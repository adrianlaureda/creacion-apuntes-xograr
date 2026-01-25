# Tabu Game

## Descripcion

Adaptacion del clasico juego Tabu para trabajar **vocabulario y descripcion oral**. Los equipos compiten para que sus companeros adivinen palabras sin usar las palabras prohibidas.

## Objetivos

- Ampliar vocabulario activo y pasivo
- Desarrollar habilidades de descripcion y comunicacion oral
- Trabajar sinonimos, antonimos y campos semanticos
- Fomentar el trabajo en equipo y la escucha activa

## Caracteristicas

| Aspecto | Detalle |
|---------|---------|
| Duracion | 45 minutos |
| Alumnado | 6-8 alumnos, 2 ESO |
| Formato | Por equipos (2 equipos) |
| Materiales | Proyector, HTML interactivo |

## Base de datos

El juego incluye aproximadamente **560 palabras** organizadas en mas de 20 categorias:

| Categoria | Ejemplos |
|-----------|----------|
| Animales | Perro, gato, elefante, mariposa... |
| Comida | Pizza, chocolate, ensalada, sopa... |
| Deportes | Futbol, natacion, baloncesto... |
| Tecnologia | Movil, ordenador, wifi, selfie... |
| Emociones | Felicidad, tristeza, miedo... |
| Profesiones | Medico, profesor, bombero... |
| Y muchas mas... | |

## Mecanica del juego

### Sistema de puntuacion

| Situacion | Puntos |
|-----------|--------|
| Acierto en los primeros 15 segundos | +3 |
| Acierto entre 15 y 60 segundos | +2 |
| Acierto despues de 60 segundos | +1 |
| Uso de gestos | -1 |
| Decir palabra prohibida | -2 |

### Flujo de juego

1. **Inicio**: Se muestra la pantalla de bienvenida con instrucciones y reglas
2. **Transicion**: Pantalla para que los equipos se preparen antes de cada turno
3. **Turno**: Un jugador describe la palabra (2 minutos maximo)
4. **Puntuacion**: Al puntuar, aparece un modal con los puntos obtenidos
5. **Cambio**: Se pasa al otro equipo

### Controles

- **Acierto**: Suma puntos segun velocidad y pasa turno
- **Gesto**: Resta 1 punto y pasa turno
- **Palabra prohibida**: Resta 2 puntos y pasa turno
- **Pasar**: Sin puntos, pasa turno

## Caracteristicas tecnicas

- **Tema dual**: Modo claro y oscuro (toggle con icono sol/luna)
- **Responsive**: Adaptable a diferentes pantallas
- **Sin dependencias**: HTML autocontenido (CSS y JS embebido)
- **Guardado de tema**: Recuerda la preferencia del usuario

## Adaptaciones para nivel bajo

- Palabras de vocabulario cotidiano y conocido
- 5 palabras prohibidas por tarjeta (claras y directas)
- Sin presion de tiempo estricta (el docente controla)
- Opcion de pasar sin penalizacion

## Archivos

- [HTML interactivo](index.html)
