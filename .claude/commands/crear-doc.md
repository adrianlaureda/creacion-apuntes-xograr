---
description: Crear documento formateado en Google Drive (apuntes, exámenes, actividades)
---

# Crear documento en Google Drive

El usuario quiere crear un documento para el IES Xograr Afonso Gómez.

## Instrucciones

1. Usa AskUserQuestion para preguntar el **tipo de documento**:
   - Opciones: "Documento nuevo (desde cero)", "Desde plantilla (con encabezado del centro)"
   - Si el usuario mencionó "examen" o "prueba", recomienda la plantilla

2. Usa AskUserQuestion para preguntar la **carpeta destino**:
   - 02_Apuntes
   - 03_Presentaciones
   - 04_Actividades
   - 05_Pruebas

3. Pregunta qué contenido debe tener el documento (tema, preguntas, etc.)

4. Genera el contenido en Markdown

5. Llama a la Web App con (IMPORTANTE: no usar -L, manejar redirección manualmente):
```bash
response=$(curl -s -X POST "https://script.google.com/macros/s/AKfycbw_Zprxt4RBqfE1MnwKHm_eMkei0oILZKPmb3FU27QFZYxBU5q0Gi88hZSkvayP-9rC/exec" \
  -H "Content-Type: application/json" \
  -d '{"markdown": "...", "title": "...", "folderId": "...", "templateId": "..."}')
redirect_url=$(echo "$response" | sed -n 's/.*HREF="\([^"]*\)".*/\1/p' | sed 's/&amp;/\&/g')
curl -s "$redirect_url"
```

6. Muestra el enlace al documento creado

## IDs

| Carpeta | ID |
|---------|-----|
| 02_Apuntes | 1Wgh01PddVJObQkRJXI_o3jnzj7645urk |
| 03_Presentaciones | 1hMjT4HkfnLCPIZvS3zIHBBixturrRVMP |
| 04_Actividades | 162h0gvLdN0-maSJFeNVoBZocuIq5wOor |
| 05_Pruebas | 1BE068mnBktXu1J9XN2o0AD3yTyBoGY2Z |

**Plantilla exámenes:** 1j2DUu6TmPuV4nxX1o0ITEnQ4m_9OauWT7mgD0qgjKCY
