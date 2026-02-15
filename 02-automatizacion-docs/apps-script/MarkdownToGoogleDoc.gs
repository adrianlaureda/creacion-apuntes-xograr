/**
 * Markdown to Google Doc Converter
 *
 * Este script convierte contenido Markdown a un Google Doc formateado.
 * Se despliega como Web App para ser llamado desde Claude Code.
 *
 * Autor: Generado para Adri (IES Xograr Afonso Gómez)
 *
 * Uso: POST request con JSON:
 *   - Sin plantilla: { "markdown": "contenido", "title": "titulo", "folderId": "id_carpeta" }
 *   - Con plantilla: { "markdown": "contenido", "title": "titulo", "templateId": "id_plantilla", "folderId": "id_carpeta" }
 */

// Configuración por defecto
const DEFAULT_FOLDER_ID = '1Wgh01PddVJObQkRJXI_o3jnzj7645urk'; // 02_Apuntes de 4ESO
const DEFAULT_TEMPLATE_ID = '1j2DUu6TmPuV4nxX1o0ITEnQ4m_9OauWT7mgD0qgjKCY'; // Plantilla pruebas de examen
const SCRIPT_VERSION = '2.1.1'; // Fix: guardia para celdas vacías en tablas

/**
 * Maneja peticiones POST (entrada principal)
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const markdown = data.markdown || '';
    const title = data.title || 'Documento sin título';
    const folderId = data.folderId || DEFAULT_FOLDER_ID;
    const templateId = data.templateId || null;

    let result;
    if (templateId) {
      // Modo plantilla: copiar plantilla y añadir contenido
      result = createFromTemplate(markdown, title, folderId, templateId);
    } else {
      // Modo normal: crear documento desde cero
      result = createFormattedDoc(markdown, title, folderId);
    }

    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Maneja peticiones GET (para pruebas)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Markdown to Google Doc API activa. Usa POST para crear documentos.',
      usage: {
        method: 'POST',
        body: {
          markdown: 'Contenido en Markdown',
          title: 'Título del documento',
          folderId: '(opcional) ID de carpeta destino',
          templateId: '(opcional) ID de plantilla a usar'
        }
      }
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Crea documento desde plantilla
 */
function createFromTemplate(markdown, title, folderId, templateId) {
  // Copiar la plantilla
  const templateFile = DriveApp.getFileById(templateId);
  const newFile = templateFile.makeCopy(title);

  // Abrir el documento copiado
  const doc = DocumentApp.openById(newFile.getId());
  const body = doc.getBody();

  // Procesar el Markdown y añadirlo al final
  processMarkdown(body, markdown);

  // Eliminar el primer párrafo si está vacío (generado automáticamente por el header)
  if (body.getNumChildren() > 0) {
    const firstChild = body.getChild(0);
    if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH &&
        firstChild.asParagraph().getText().trim() === '') {
      body.removeChild(firstChild);
    }
  }

  // Guardar cambios
  doc.saveAndClose();

  // Mover a la carpeta destino
  const folder = DriveApp.getFolderById(folderId);
  newFile.moveTo(folder);

  return {
    success: true,
    documentId: doc.getId(),
    documentUrl: doc.getUrl(),
    title: title,
    fromTemplate: true,
    version: SCRIPT_VERSION
  };
}

/**
 * Crea el documento formateado (desde cero)
 */
function createFormattedDoc(markdown, title, folderId) {
  // Crear documento
  const doc = DocumentApp.create(title);
  const body = doc.getBody();

  // Limpiar el documento (eliminar párrafo vacío inicial)
  body.clear();

  // Procesar el Markdown
  processMarkdown(body, markdown);

  // Eliminar el primer párrafo si está vacío (por si acaso)
  if (body.getNumChildren() > 0) {
    const firstChild = body.getChild(0);
    if (firstChild.getType() === DocumentApp.ElementType.PARAGRAPH &&
        firstChild.asParagraph().getText().trim() === '') {
      body.removeChild(firstChild);
    }
  }

  // Guardar cambios
  doc.saveAndClose();

  // Mover a la carpeta destino
  const file = DriveApp.getFileById(doc.getId());
  const folder = DriveApp.getFolderById(folderId);
  file.moveTo(folder);

  return {
    success: true,
    documentId: doc.getId(),
    documentUrl: doc.getUrl(),
    title: title,
    fromTemplate: false,
    version: SCRIPT_VERSION
  };
}

/**
 * Procesa el contenido Markdown y lo aplica al documento
 */
function processMarkdown(body, markdown) {
  const lines = markdown.split('\n');
  let inCodeBlock = false;
  let codeContent = [];
  let inTable = false;
  let tableData = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Bloques de código
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // Fin del bloque de código
        addCodeBlock(body, codeContent.join('\n'));
        codeContent = [];
        inCodeBlock = false;
      } else {
        // Inicio del bloque de código
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      continue;
    }

    // Detectar tablas
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      // Ignorar líneas de separación de tabla (|---|---|)
      if (line.match(/^\|[\s\-:]+\|$/)) {
        continue;
      }
      tableData.push(line);

      // Verificar si la siguiente línea también es tabla
      if (i + 1 >= lines.length || !lines[i + 1].trim().startsWith('|')) {
        // Fin de la tabla
        addTable(body, tableData);
        tableData = [];
      }
      continue;
    }

    // Línea horizontal
    if (line.trim().match(/^(-{3,}|\*{3,}|_{3,})$/)) {
      body.appendHorizontalRule();
      continue;
    }

    // Citas de bloque (> texto) — renderizar como párrafo indentado
    if (line.startsWith('>')) {
      let content = line.replace(/^>\s?/, '');
      if (content.trim() === '') continue; // Línea vacía dentro del blockquote
      const para = body.appendParagraph('');
      para.setIndentStart(36);
      applyParagraphStyle(para);
      applyInlineFormatting(para, content);
      continue;
    }

    // Línea vacía - ignorar para evitar espaciado extra
    if (line.trim() === '') {
      continue;
    }

    // Encabezados
    if (line.startsWith('#')) {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2];
        addHeading(body, text, level);
        continue;
      }
    }

    // Listas no ordenadas
    if (line.match(/^\s*[-*+]\s+/)) {
      const match = line.match(/^(\s*)[-*+]\s+(.+)$/);
      if (match) {
        const indent = Math.floor(match[1].length / 2);
        const text = match[2];
        addListItem(body, text, false, indent);
        continue;
      }
    }

    // Listas ordenadas
    if (line.match(/^\s*\d+\.\s+/)) {
      const match = line.match(/^(\s*)\d+\.\s+(.+)$/);
      if (match) {
        const indent = Math.floor(match[1].length / 2);
        const text = match[2];
        addListItem(body, text, true, indent);
        continue;
      }
    }

    // Párrafo normal
    addParagraph(body, line);
  }
}

/**
 * Aplica estilo común a párrafos: justificado, espaciado 3/3, interlineado 1.20
 */
function applyParagraphStyle(element) {
  element.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  element.setSpacingBefore(3);
  element.setSpacingAfter(3);
  element.setLineSpacing(1.20);
}

/**
 * Añade un encabezado con alineación justificada
 */
function addHeading(body, text, level) {
  const para = body.appendParagraph('');
  const headingStyles = {
    1: DocumentApp.ParagraphHeading.HEADING1,
    2: DocumentApp.ParagraphHeading.HEADING2,
    3: DocumentApp.ParagraphHeading.HEADING3,
    4: DocumentApp.ParagraphHeading.HEADING4,
    5: DocumentApp.ParagraphHeading.HEADING5,
    6: DocumentApp.ParagraphHeading.HEADING6
  };

  para.setHeading(headingStyles[level] || DocumentApp.ParagraphHeading.HEADING1);
  applyParagraphStyle(para);
  applyInlineFormatting(para, text);
}

/**
 * Añade un párrafo con formato inline y alineación justificada
 */
function addParagraph(body, text) {
  const para = body.appendParagraph('');
  applyParagraphStyle(para);
  applyInlineFormatting(para, text);
}

/**
 * Añade un elemento de lista con alineación justificada
 */
function addListItem(body, text, ordered, indent) {
  const listItem = body.appendListItem('');

  if (ordered) {
    listItem.setGlyphType(DocumentApp.GlyphType.NUMBER);
  } else {
    listItem.setGlyphType(DocumentApp.GlyphType.BULLET);
  }

  if (indent > 0) {
    listItem.setNestingLevel(indent);
  }

  applyParagraphStyle(listItem);
  applyInlineFormatting(listItem, text);
}

/**
 * Añade un bloque de código con alineación justificada
 */
function addCodeBlock(body, code) {
  const para = body.appendParagraph(code);
  para.setFontFamily('Consolas');
  para.setFontSize(10);
  para.setBackgroundColor('#f5f5f5');
  para.setIndentStart(20);
  para.setIndentEnd(20);
  applyParagraphStyle(para);
}

/**
 * Añade una tabla con alineación justificada en celdas
 */
function addTable(body, tableLines) {
  if (tableLines.length === 0) return;

  // Parsear filas
  const rows = tableLines.map(line => {
    return line
      .split('|')
      .filter((cell, index, arr) => index > 0 && index < arr.length - 1)
      .map(cell => cell.trim());
  });

  if (rows.length === 0 || rows[0].length === 0) return;

  const numCols = rows[0].length;
  const numRows = rows.length;

  const table = body.appendTable();

  for (let i = 0; i < numRows; i++) {
    const tableRow = table.appendTableRow();
    for (let j = 0; j < numCols; j++) {
      const cellText = rows[i][j] || '';
      const cell = tableRow.appendTableCell('');

      // Procesar formato inline en la celda (negrita, subrayado, etc.)
      if (cell.getNumChildren() > 0) {
        const cellPara = cell.getChild(0).asParagraph();
        cellPara.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
        applyInlineFormatting(cellPara, cellText);
      }

      // Primera fila en negrita (cabecera)
      if (i === 0) {
        cell.editAsText().setBold(true);
      }
    }
  }
}

/**
 * Aplica formato inline en una sola pasada (negrita, cursiva, subrayado, codigo, enlaces)
 * Regex combinada: el orden de alternativas importa (** antes de *, <u> antes de _)
 */
function applyInlineFormatting(element, text) {
  if (!text) return;

  var combinedRegex = /\*\*(.+?)\*\*|<u>(.+?)<\/u>|\*(.+?)\*|`(.+?)`|\[(.+?)\]\((.+?)\)/g;

  var markers = [];
  var m;
  while ((m = combinedRegex.exec(text)) !== null) {
    if (m[1] !== undefined) {
      markers.push({ start: m.index, len: m[0].length, content: m[1], type: 'bold' });
    } else if (m[2] !== undefined) {
      markers.push({ start: m.index, len: m[0].length, content: m[2], type: 'underline' });
    } else if (m[3] !== undefined) {
      markers.push({ start: m.index, len: m[0].length, content: m[3], type: 'italic' });
    } else if (m[4] !== undefined) {
      markers.push({ start: m.index, len: m[0].length, content: m[4], type: 'code' });
    } else if (m[5] !== undefined) {
      markers.push({ start: m.index, len: m[0].length, content: m[5], type: 'link', url: m[6] });
    }
  }

  var plainText = '';
  var formatRanges = [];
  var lastEnd = 0;

  for (var i = 0; i < markers.length; i++) {
    var mk = markers[i];
    plainText += text.substring(lastEnd, mk.start);
    var plainStart = plainText.length;
    plainText += mk.content;
    formatRanges.push({ start: plainStart, end: plainText.length, type: mk.type, url: mk.url || null });
    lastEnd = mk.start + mk.len;
  }
  plainText += text.substring(lastEnd);

  element.setText(plainText);

  if (plainText.length === 0) return;
  var textElement = element.editAsText();

  for (var j = 0; j < formatRanges.length; j++) {
    var range = formatRanges[j];
    if (range.start >= plainText.length) continue;
    var end = Math.min(range.end - 1, plainText.length - 1);
    if (end < range.start) continue;

    try {
      switch (range.type) {
        case 'bold':
          textElement.setBold(range.start, end, true);
          break;
        case 'italic':
          textElement.setItalic(range.start, end, true);
          break;
        case 'underline':
          textElement.setUnderline(range.start, end, true);
          break;
        case 'code':
          textElement.setFontFamily(range.start, end, 'Consolas');
          textElement.setBackgroundColor(range.start, end, '#f0f0f0');
          break;
        case 'link':
          textElement.setLinkUrl(range.start, end, range.url);
          textElement.setForegroundColor(range.start, end, '#1155cc');
          textElement.setUnderline(range.start, end, true);
          break;
      }
    } catch (e) {
      // Ignorar errores de formato en rangos invalidos
    }
  }
}

/**
 * Función de prueba - Documento desde cero
 */
function testCreateDoc() {
  const testMarkdown = `# Documento de Prueba

## Introducción

Este es un **texto en negrita** y este es *texto en cursiva*.

### Lista de elementos

- Primer elemento
- Segundo elemento
- Tercer elemento

### Lista numerada

1. Paso uno
2. Paso dos
3. Paso tres

### Tabla de ejemplo

| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Dato 1 | Dato 2 | Dato 3 |
| Dato 4 | Dato 5 | Dato 6 |

---

*Texto final en cursiva*
`;

  const result = createFormattedDoc(testMarkdown, 'Test Markdown', DEFAULT_FOLDER_ID);
  Logger.log(result);
}

/**
 * Función de prueba - Documento desde plantilla
 */
function testCreateFromTemplate() {
  const testMarkdown = `## Preguntas

1. ¿Cuál es el tema principal del texto? **(2 puntos)**

2. Identifica las figuras retóricas presentes en el fragmento. **(3 puntos)**

3. Analiza sintácticamente la siguiente oración: **(2,5 puntos)**

   "El poeta contemplaba el horizonte mientras anochecía."

4. Redacta un breve comentario crítico sobre el texto (mínimo 150 palabras). **(2,5 puntos)**
`;

  const result = createFromTemplate(
    testMarkdown,
    'Examen Prueba - Tema 5',
    DEFAULT_FOLDER_ID,
    DEFAULT_TEMPLATE_ID
  );
  Logger.log(result);
}
