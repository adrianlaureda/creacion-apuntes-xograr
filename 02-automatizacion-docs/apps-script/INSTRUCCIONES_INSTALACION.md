# Instrucciones de instalación del Apps Script

## Paso 1: Crear el proyecto en Apps Script

1. Ve a [script.google.com](https://script.google.com) con tu cuenta de trabajo (adrian@tclass.eu)
2. Haz clic en **"Nuevo proyecto"**
3. Cambia el nombre del proyecto: haz clic en "Proyecto sin título" arriba a la izquierda y escribe: `MarkdownToGoogleDoc`

## Paso 2: Copiar el código

1. Borra todo el contenido del archivo `Código.gs` que aparece por defecto
2. Abre el archivo `MarkdownToGoogleDoc.gs` de esta carpeta
3. Copia TODO el contenido y pégalo en el editor de Apps Script
4. Guarda el proyecto (Ctrl+S o Cmd+S)

## Paso 3: Probar que funciona

1. En el editor, selecciona la función `testCreateDoc` en el desplegable de funciones (arriba)
2. Haz clic en **"Ejecutar"**
3. La primera vez te pedirá permisos:
   - Haz clic en "Revisar permisos"
   - Selecciona tu cuenta (adrian@tclass.eu)
   - Haz clic en "Avanzado" > "Ir a MarkdownToGoogleDoc (no seguro)"
   - Haz clic en "Permitir"
4. Revisa la carpeta 02_Apuntes de 4ESO en tu Drive - debería haber un documento "Test Markdown"

## Paso 4: Desplegar como Web App

1. Haz clic en **"Implementar"** > **"Nueva implementación"**
2. En "Seleccionar tipo", haz clic en el engranaje y elige **"Aplicación web"**
3. Configura:
   - **Descripción:** "Markdown to Google Doc API"
   - **Ejecutar como:** "Yo" (tu cuenta)
   - **Quién tiene acceso:** "Cualquier persona" (necesario para que Claude pueda llamarlo)
4. Haz clic en **"Implementar"**
5. **IMPORTANTE:** Copia la URL de la aplicación web que te da. Es algo como:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

## Paso 5: Darme la URL

Una vez tengas la URL, dámela para que la guarde en el proyecto y pueda usarla automáticamente.

---

## Uso posterior

Una vez configurado, el flujo será:

1. Me pides crear un documento con cierto contenido
2. Genero el Markdown
3. Llamo a tu Web App con el Markdown
4. Se crea el Google Doc formateado automáticamente
5. Te doy el enlace

---

## Solución de problemas

### Error de permisos
Si ves un error de permisos al ejecutar, asegúrate de:
- Estar usando la cuenta adrian@tclass.eu
- Haber aceptado todos los permisos (Drive y Docs)

### El documento no aparece en la carpeta
Verifica que el ID de la carpeta por defecto en el código (`DEFAULT_FOLDER_ID`) sea correcto:
```
1Wgh01PddVJObQkRJXI_o3jnzj7645urk
```
Este es el ID de 02_Apuntes en 04_4ESO.

### Error al llamar a la Web App
Asegúrate de que "Quién tiene acceso" esté configurado como "Cualquier persona".
