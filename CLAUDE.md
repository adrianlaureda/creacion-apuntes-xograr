# Proyecto: Creación de Apuntes y Archivos para IES Xograr Afonso Gómez

## Descripción
Proyecto para generar materiales didácticos (apuntes, actividades, presentaciones) en formato Markdown y subirlos al Drive compartido del IES Xograr Afonso Gómez.

---

## IDs del Drive Compartido (Xograr Afonso Gómez)

### Raíz del Shared Drive
- **ID:** `108jcj5TBP-gkNZsD_e9JjlmAcIiXlBHg`
- **URL:** https://drive.google.com/drive/folders/108jcj5TBP-gkNZsD_e9JjlmAcIiXlBHg

### Estructura principal
| Carpeta | ID |
|---------|-----|
| 00_Titoría | `1zebe3RW5in0O17IX0GbBM2vme6dEkpbb` |
| 02_2ESO | `1HqZCEj8JcixB-_mgxAlXW2bkLJpdWjs0` |
| 03_Proxecto Competencial | `1BDLIRKjPvJqjO7k96nQ0GP2d3kw5wwfv` |
| 04_4ESO | `1VFNKLuMpllMwhtXjoKPZfj5q_qyGixl3` |
| 05_Otros | `1Wv6A7GTjUDD5Pv32hFdJ4YwyYFGYJDgJ` |

### Subcarpetas de 04_4ESO
| Carpeta | ID |
|---------|-----|
| 00_Datos | `11M_hD3e8aBXqvC0qv7bUazhnMV3kqs_j` |
| 01_Evaluaciones | `1TDnrfyjDTnftEx6EeUtj2JN4ym7wX-Fw` |
| 02_Apuntes | `1Wgh01PddVJObQkRJXI_o3jnzj7645urk` |
| 03_Presentaciones | `1hMjT4HkfnLCPIZvS3zIHBBixturrRVMP` |
| 04_Actividades | `162h0gvLdN0-maSJFeNVoBZocuIq5wOor` |
| 05_Pruebas | `1BE068mnBktXu1J9XN2o0AD3yTyBoGY2Z` |

---

## Apps Script - Markdown to Google Doc

### URL de la Web App
```
https://script.google.com/macros/s/AKfycbw_Zprxt4RBqfE1MnwKHm_eMkei0oILZKPmb3FU27QFZYxBU5q0Gi88hZSkvayP-9rC/exec
```

### Plantilla de exámenes
- **ID:** `1j2DUu6TmPuV4nxX1o0ITEnQ4m_9OauWT7mgD0qgjKCY`
- **URL:** https://docs.google.com/document/d/1j2DUu6TmPuV4nxX1o0ITEnQ4m_9OauWT7mgD0qgjKCY

### Uso

**Sin plantilla (documento desde cero):**
```json
{
  "markdown": "# Título\n\nContenido en **Markdown**...",
  "title": "Nombre del documento",
  "folderId": "ID_carpeta_opcional"
}
```

**Con plantilla (usa encabezado del centro):**
```json
{
  "markdown": "## Preguntas\n\n1. Primera pregunta...",
  "title": "Examen Tema 5",
  "templateId": "1j2DUu6TmPuV4nxX1o0ITEnQ4m_9OauWT7mgD0qgjKCY",
  "folderId": "ID_carpeta_opcional"
}
```

- Si no se especifica `folderId`, usa `02_Apuntes` por defecto
- Si no se especifica `templateId`, crea documento desde cero

### Respuesta exitosa
```json
{
  "success": true,
  "documentId": "...",
  "documentUrl": "https://docs.google.com/open?id=...",
  "title": "Nombre del documento"
}
```

---

## Flujo de trabajo

### Método 1: Google Doc formateado (recomendado)
1. Generar el contenido en formato Markdown
2. Llamar a la Web App del Apps Script con POST
3. Se crea el Google Doc con formato aplicado automáticamente

### Método 2: Archivo Markdown (alternativo)
1. Generar el contenido en formato Markdown
2. Subir el archivo `.md` a la carpeta correspondiente usando `createTextFile`
3. En Google Drive, abrir el archivo y usar **"Abrir con" > Google Docs**

### Ejemplo - Método 1 (curl)
**IMPORTANTE:** No usar `-L` por problema con redirección. Manejar manualmente:
```bash
response=$(curl -s -X POST "https://script.google.com/macros/s/AKfycbw_Zprxt4RBqfE1MnwKHm_eMkei0oILZKPmb3FU27QFZYxBU5q0Gi88hZSkvayP-9rC/exec" \
  -H "Content-Type: application/json" \
  -d '{"markdown": "# Tema\n\nContenido...", "title": "Mi documento"}')
redirect_url=$(echo "$response" | sed -n 's/.*HREF="\([^"]*\)".*/\1/p' | sed 's/&amp;/\&/g')
curl -s "$redirect_url"
```

### Ejemplo - Método 2 (MCP)
```
mcp__drive-trabajo__createTextFile
  name: "19_Nuevo_Tema.md"
  content: "# Título del tema\n\nContenido..."
  parentFolderId: "1Wgh01PddVJObQkRJXI_o3jnzj7645urk"
```

---

## Comando personalizado

### `/crear-doc`
Comando interactivo que pregunta:
1. Tipo de documento (nuevo o desde plantilla)
2. Carpeta destino
3. Contenido a generar

Luego crea el documento automáticamente y devuelve el enlace.

---

## MCP configurado
- **Servidor:** `drive-trabajo`
- **Cuenta:** adrian@tclass.eu (TADEGA)
- **Paquete:** @piotr-agier/google-drive-mcp

---

## Contexto educativo
- Centro: IES Xograr Afonso Gómez (Sarria, Galicia)
- Materia: Lengua Castellana y Literatura
- Curso principal: 4º ESO
- Sistema: LOMLOE, normativa gallega
- Calificaciones: 1-10, aprobado ≥ 5
