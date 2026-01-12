# Skill: Crear documento en Google Drive

Este skill gestiona la creación de documentos formateados en Google Drive para el IES Xograr Afonso Gómez.

## Flujo de trabajo

Cuando el usuario quiera crear un documento (apuntes, examen, actividad, etc.):

1. **Preguntar tipo de documento** usando AskUserQuestion:
   - "Documento nuevo" - Crear desde cero
   - "Desde plantilla" - Usar plantilla con encabezado del centro (para exámenes/pruebas)

2. **Preguntar carpeta destino** usando AskUserQuestion:
   - 02_Apuntes (ID: `1Wgh01PddVJObQkRJXI_o3jnzj7645urk`)
   - 03_Presentaciones (ID: `1hMjT4HkfnLCPIZvS3zIHBBixturrRVMP`)
   - 04_Actividades (ID: `162h0gvLdN0-maSJFeNVoBZocuIq5wOor`)
   - 05_Pruebas (ID: `1BE068mnBktXu1J9XN2o0AD3yTyBoGY2Z`)

3. **Generar el contenido** en Markdown según lo que pida el usuario

4. **Llamar a la Web App** con curl (IMPORTANTE: no usar -L, manejar redirección manualmente):
```bash
response=$(curl -s -X POST "https://script.google.com/macros/s/AKfycbw_Zprxt4RBqfE1MnwKHm_eMkei0oILZKPmb3FU27QFZYxBU5q0Gi88hZSkvayP-9rC/exec" \
  -H "Content-Type: application/json" \
  -d '{
    "markdown": "CONTENIDO_MARKDOWN",
    "title": "TITULO_DOCUMENTO",
    "folderId": "ID_CARPETA",
    "templateId": "ID_PLANTILLA_SI_APLICA"
  }')
redirect_url=$(echo "$response" | sed -n 's/.*HREF="\([^"]*\)".*/\1/p' | sed 's/&amp;/\&/g')
curl -s "$redirect_url"
```

5. **Mostrar el enlace** al documento creado

## IDs de referencia

### Carpetas
| Carpeta | ID |
|---------|-----|
| 02_Apuntes | `1Wgh01PddVJObQkRJXI_o3jnzj7645urk` |
| 03_Presentaciones | `1hMjT4HkfnLCPIZvS3zIHBBixturrRVMP` |
| 04_Actividades | `162h0gvLdN0-maSJFeNVoBZocuIq5wOor` |
| 05_Pruebas | `1BE068mnBktXu1J9XN2o0AD3yTyBoGY2Z` |

### Plantilla
- **Plantilla exámenes:** `1j2DUu6TmPuV4nxX1o0ITEnQ4m_9OauWT7mgD0qgjKCY`

## Notas
- Si el usuario dice "examen" o "prueba", sugerir usar la plantilla
- Si el usuario dice "apuntes", sugerir documento nuevo
- La respuesta de la API incluye `documentUrl` con el enlace directo
