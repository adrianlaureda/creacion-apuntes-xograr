# CLAUDE.md - Proyecto Ideación RE y PC

## Descripción

Proyecto para generar **materiales didácticos creativos** para:
- **Refuerzo de Lenguas (RE)**: Actividades con **enfoque lingüístico** para grupos pequeños con dificultades
- **Proyecto Competencial (PC)**: Trabajo en torno a **situaciones teatrales**, improvisación y expresión oral

---

## Perfil del alumnado

| Aspecto | Detalle |
|---------|---------|
| Curso | 2º ESO (13-15 años) |
| Nivel | Muy bajo, alumnado con dificultades significativas |
| Grupos | Pequeños (6-8 alumnos) |
| Sesiones | ~45 minutos efectivos |
| Recursos | Todos tienen ordenador |
| Motivación | **Necesitan elementos lúdicos o competitivos**. Les cuesta trabajar con otras fórmulas |

---

## Principios pedagógicos

1. **Lúdico/competitivo** (esencial): Juegos, retos, puntuaciones, narrativas tipo "misión". Sin esto, no enganchan
2. **Inductivo**: Ejemplos reales → extracción de regla → aplicación
3. **Gamificado**: Narrativas (detectives, misiones, retos)
4. **Contextualizado**: Redes sociales, cultura juvenil, situaciones cotidianas
5. **Visual**: Materiales atractivos, poco texto, estructura clara
6. **Progresivo**: De lo simple a lo complejo, con refuerzo
7. **Mínima preparación**: Actividades que requieran poco tiempo de preparación previa

### Qué ha funcionado

- **Detectives Ortográficos**: Formato de "investigación" con tweets. Enganchó bien

---

## Estructura del proyecto

```
01-ideacion-planificacion/
├── CLAUDE.md                 # Este archivo
├── README.md                 # Índice general
├── banco-ideas.md            # Ideas pendientes de desarrollar
│
├── refuerzo-lenguas/
│   ├── ortografia/
│   │   └── detectives-ortograficos/
│   ├── expresion-escrita/
│   │   └── microrrelatos-dados/
│   └── vocabulario/
│
├── proyecto-competencial/
│   ├── improvisacion/
│   │   ├── taller-impro/
│   │   └── calentamientos/
│   └── teatro/
│
└── tipologias-textuales/     # Ya existente
```

---

## Materiales desarrollados

### Refuerzo de Lenguas

| Proyecto | Descripción | Estado |
|----------|-------------|--------|
| Detectives Ortográficos | Detectar errores en "tweets" simulados | Completado |
| Microrrelatos con dados | Escritura creativa con Story Dice Online | Completado |

### Proyecto Competencial

| Proyecto | Descripción | Estado |
|----------|-------------|--------|
| Taller de Improvisación | Situaciones cotidianas para improvisar | Completado |
| 1-2-3 Estatuas | Calentamiento con emociones | Completado |

---

## Comandos útiles

### Generar nuevo proyecto
```
Crea un nuevo proyecto de [tema] con enfoque gamificado para 2º ESO.
Incluye: README, secuencia didáctica para 1-2 sesiones.
Sigue el estilo de los proyectos existentes (Detectives, Microrrelatos).
Grupos pequeños (6-8 alumnos), sesiones de 45 min.
```

### Ampliar proyecto existente
```
Amplía [proyecto] con [X] nuevos casos/ejemplos.
Mantén el mismo formato y estilo.
```

### Crear artefacto interactivo
```
Genera un HTML interactivo para [actividad].
Estilo minimalista, fondo blanco, sin dependencias externas.
Debe funcionar pulsando ESPACIO o un botón.
```

---

## Formato de secuencias didácticas

Cada secuencia debe incluir:

1. **Tabla de fases** con tiempos concretos (45 min total)
2. **Materiales necesarios** (proyector, ordenadores, papel...)
3. **Ajustes** según tamaño del grupo (6 vs 8 alumnos)
4. **Variantes** opcionales para repetir la actividad

Ejemplo de estructura:

| Fase | Tiempo | Desarrollo |
|------|--------|------------|
| Intro | 5' | Explicación breve |
| Demo | 5' | Ejemplo grupal |
| Trabajo | 20' | Actividad principal |
| Puesta en común | 12' | Compartir resultados |
| Cierre | 3' | Reflexión final |

---

## Notas técnicas

### Para archivos HTML interactivos
- Self-contained (CSS y JS embebido)
- Fondo blanco, diseño minimalista
- Compatible con navegadores de alumnos
- Sin dependencias externas

### Para documentación
- Markdown con tablas claras
- Emojis solo si aportan (indicadores de estado)
- Estructura consistente entre proyectos
