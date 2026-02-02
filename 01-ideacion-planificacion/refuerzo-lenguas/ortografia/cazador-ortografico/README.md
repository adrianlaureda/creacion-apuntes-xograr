# El Cazador Ortográfico

Actividad gamificada para trabajar **errores ortográficos típicos del castellano** en formato concurso.

## Descripción

Dos equipos compiten en rondas de persecución. En cada ronda, un concursante intenta llegar a la meta respondiendo preguntas de ortografía mientras un cazador (del equipo contrario) intenta alcanzarlo.

## Características

| Aspecto | Detalle |
|---------|---------|
| Duración | 45 minutos |
| Alumnado | 6-8 alumnos, 2º ESO |
| Formato | 2 equipos de 3-4 alumnos |
| Materiales | Proyector, HTML interactivo (tablero) |

## Contenidos trabajados

Errores típicos del castellano, organizados por categorías:

| Categoría | Ejemplos |
|-----------|----------|
| **Analogías falsas** | discusión (no discursión), prever (no preveer) |
| **Dequeísmo/queísmo** | pienso que (no de que), me alegro de que |
| **Haber impersonal** | hubo problemas (no hubieron), habrá fiestas |
| **Posesivos incorrectos** | detrás de mí (no detrás mío) |
| **Confusiones comunes** | a ver / haber, echo / hecho, tuvo / tubo |
| **Palabras inexistentes** | dentífrico (no dentrífico), espontáneo (no espontaneo) |

## Mecánica del juego

### Preparación
- Se forman 2 equipos equilibrados
- Cada equipo elige un nombre (opcional, motiva)

### Tablero

```
[CAZADOR]                                    [META]
    ↓                                          ↓
   -2   -1    0    1    2    3    4    5    6    7
              ↑
        [CONCURSANTE]
```

- El concursante empieza en 0, debe llegar a 7
- El cazador empieza en -2 (ventaja de 2 casillas)

### Cada ronda

1. **Equipo A** elige a su concursante (no puede repetir)
2. **Equipo B** designa a su cazador
3. Se muestran preguntas una a una
4. El concursante responde primero (5 segundos)
5. Luego responde el cazador
6. **Acierto** = avanza 1 casilla / **Fallo** = no avanza
7. La ronda termina cuando:
   - El concursante llega a 7 → **¡Salvado!** (2 puntos para su equipo)
   - El cazador alcanza al concursante → **¡Cazado!** (1 punto para el equipo cazador)

### Alternar roles
- En la siguiente ronda, los equipos intercambian roles
- Equipo B pone concursante, Equipo A pone cazador

### Final (opcional)
- Si hay tiempo: duelo final entre los "supervivientes" de cada equipo

## Puntuación

| Resultado | Puntos |
|-----------|--------|
| Concursante llega a meta | +2 para su equipo |
| Cazador atrapa al concursante | +1 para equipo cazador |

## Archivos

- [Secuencia didáctica](secuencia-didactica.md)
- [Banco de preguntas](preguntas.json)
- [HTML interactivo](index.html)
