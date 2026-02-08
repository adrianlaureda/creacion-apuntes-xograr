# Práctica - Sesión 5: Sintagmas (localización + análisis)

**4º ESO - Lengua Castellana y Literatura**

---

## Texto

> Marcos y yo activamos la ubicación compartida hace tres meses. Al principio me parecía una gran idea: saber que llegaba bien a casa por las noches me daba una tranquilidad inmensa. <u>La aplicación de geolocalización</u> me permitía comprobar que estaba en el autobús y no preocuparme.
>
> Ahora compruebo <u>su posición</u> cada pocos minutos. Reconozco que hay algo reconfortante en ello: es como una señal silenciosa de que todo va bien. Si aparece en un lugar conocido, respiro aliviada. Sin embargo, cuando el punto azul surge <u>en un sitio desconocido</u>, el corazón me late <u>muy deprisa</u> y las manos me tiemblan.
>
> Mis amigas me dicen que estoy <u>completamente obsesionada</u>. Mi tutora les explicó ayer la situación a mis padres. Puede que tengan razón: esta necesidad constante de control resulta agotadora. No duermo bien desde hace semanas porque reviso la ubicación de Marcos antes de dormir.
>
> No sé qué pensar. La aplicación me da seguridad, pero al mismo tiempo me quita la libertad. ¿Debería desinstalarla? Quizá necesite <u>ayuda profesional</u> para encontrar el equilibrio entre confianza y control.

---

## Ejercicio 1: Localización de sintagmas (1,5 puntos)

Localiza en el texto un ejemplo de cada uno de los siguientes elementos:

| Apartado | Función pedida |
|----------|---------------|
| a) | Un **SN en función de sujeto** |
| b) | Un **pronombre átono en función de CI** |
| c) | Un **SN en función de CD** |
| d) | Un **SAdj en función de atributo** |
| e) | Un **SPrep en función de CCL** |
| f) | Un **SAdv en función de CCT** |

---

## Ejercicio 2: Análisis de sintagmas (2 puntos)

Analiza la estructura interna de los siguientes sintagmas subrayados en el texto e indica su función en la oración:

| # | Sintagma |
|---|----------|
| a | **su posición** |
| b | **ayuda profesional** |
| c | **completamente obsesionada** |
| d | **muy deprisa** |
| e | **en un sitio desconocido** |
| f | **La aplicación de geolocalización** |

Para cada uno, indica:
1. **Tipo** de sintagma (SN, SAdj, SAdv, SPrep)
2. **Estructura interna** (Det, N, MOD, E, T...)
3. **Función** en la oración

---

# SOLUCIONARIO

---

## Ejercicio 1: Localización

| Apartado | Función | Respuestas válidas |
|----------|---------|--------------------|
| a) SN sujeto | Sujeto | *La aplicación de geolocalización* · *el punto azul* · *el corazón* · *las manos* · *Mis amigas* · *Mi tutora* · *esta necesidad constante de control* · *La aplicación* (P4) |
| b) Pron. átono CI | CI | *les* (les explicó a mis padres) · *me* (el corazón **me** late / **me** daba tranquilidad / **me** da seguridad / **me** quita la libertad / **me** dicen) |
| c) SN CD | CD | *la ubicación compartida* · *su posición* · *la situación* · *la ubicación de Marcos* · *seguridad* · *la libertad* · *ayuda profesional* · *el equilibrio* |
| d) SAdj atributo | Atributo | *completamente obsesionada* (estoy ~) |
| | Predicativo | *agotadora* (resulta ~) — "resultar" es semicopulativo, no copulativo |
| e) SPrep CCL | CCL | *a casa* · *en el autobús* · *en un lugar conocido* · *en un sitio desconocido* |
| f) SAdv CCT | CCT | *ahora* · *ayer* |

**Criterios de corrección:**

| Apartado | Puntos | Observaciones |
|----------|--------|---------------|
| a) | 0,25 | Cualquier SN sujeto válido del texto |
| b) | 0,25 | Identificar pronombre átono + función CI |
| c) | 0,25 | Cualquier SN en función CD válido |
| d) | 0,25 | SAdj con verbo copulativo o semicopulativo |
| e) | 0,25 | SPrep que indique lugar |
| f) | 0,25 | SAdv que indique tiempo |

---

## Ejercicio 2: Análisis

### a) **la ubicación de Marcos** — SN · CD

*"reviso la ubicación de Marcos antes de dormir"*

**Formato lineal:**

```
SN [Det(la) + N(ubicación) + CN(SPrep: E(de) + T(Marcos))] → CD
```

**Formato arbóreo:**

```
              SN (CD)
         ┌─────┼──────┐
        Det    N      CN
         │     │       │
        la  ubicación SPrep
                    ┌───┴───┐
                    E       T
                    │       │
                   de    Marcos
```

---

### b) **esta necesidad constante de control** — SN · Sujeto

*"esta necesidad constante de control resulta agotadora"*

**Formato lineal:**

```
SN [Det(esta) + N(necesidad) + MOD(constante, adj) + CN(SPrep: E(de) + T(control))] → Sujeto
```

**Formato arbóreo:**

```
                    SN (Sujeto)
         ┌─────┬─────┼───────┐
        Det    N    MOD      CN
         │     │     │        │
       esta necesidad constante SPrep
                  (adj)    ┌───┴───┐
                           E       T
                           │       │
                          de    control
```

---

### c) **completamente obsesionada** — SAdj · Atributo

*"estoy completamente obsesionada"*

**Formato lineal:**

```
SAdj [MOD(completamente, adv) + N(obsesionada)] → Atributo
```

**Formato arbóreo:**

```
         SAdj (Atributo)
        ┌─────┴─────┐
       MOD           N
        │            │
  completamente  obsesionada
      (adv)
```

**Nota:** La función es atributo porque el verbo es "estar" (copulativo). Si el verbo fuera "resultar" o "acabar", sería predicativo.

---

### d) **en un sitio desconocido** — SPrep · CCL

*"el punto azul surge en un sitio desconocido"*

**Formato lineal:**

```
SPrep [E(en) + T(SN: Det(un) + N(sitio) + MOD(desconocido, adj))] → CCL
```

**Formato arbóreo:**

```
           SPrep (CCL)
          ┌────┴────┐
          E         T
          │         │
         en        SN
              ┌────┼────┐
             Det   N    MOD
              │    │     │
             un  sitio  desconocido
                         (adj)
```

---

### e) **La aplicación de geolocalización** — SN · Sujeto

*"La aplicación de geolocalización me permitía comprobar..."*

**Formato lineal:**

```
SN [Det(La) + N(aplicación) + CN(SPrep: E(de) + T(geolocalización))] → Sujeto
```

**Formato arbóreo:**

```
              SN (Sujeto)
         ┌─────┼──────┐
        Det    N      CN
         │     │       │
        La  aplicación SPrep
                    ┌───┴───┐
                    E       T
                    │       │
                   de  geolocalización
```

---

### f) **el equilibrio entre confianza y control** — SN · CD

*"encontrar el equilibrio entre confianza y control"*

**Formato lineal:**

```
SN [Det(el) + N(equilibrio) + CN(SPrep: E(entre) + T(SN: N(confianza) + Nx(y) + N(control)))] → CD
```

**Formato arbóreo:**

```
                  SN (CD)
         ┌─────────┼──────────┐
        Det        N          CN
         │         │           │
        el    equilibrio     SPrep
                          ┌────┴────┐
                          E         T
                          │         │
                        entre      SN
                             ┌───┬──┴──┐
                             N   Nx    N
                             │   │     │
                        confianza y  control
```

---

## Criterios de corrección — Ejercicio 2

| Sintagma | Tipo (0,1) | Estructura (0,15) | Función (0,1) | Subtotal |
|----------|------------|-------------------|---------------|----------|
| a) la ubicación de Marcos | SN | Det + N + CN(SPrep) | CD | 0,35 |
| b) esta necesidad constante de control | SN | Det + N + MOD + CN(SPrep) | Sujeto | 0,35 |
| c) completamente obsesionada | SAdj | MOD + N | Atributo | 0,30 |
| d) en un sitio desconocido | SPrep | E + T(SN: Det+N+MOD) | CCL | 0,35 |
| e) La aplicación de geolocalización | SN | Det + N + CN(SPrep) | Sujeto | 0,30 |
| f) el equilibrio entre confianza y control | SN | Det + N + CN(SPrep con SN coord.) | CD | 0,35 |
| **TOTAL** | | | | **2,00** |

**Notas:**
- Aceptar "complemento del nombre", "CN" o "MOD" como función del SPrep dentro de los SN
- En b), valorar positivamente identificar los dos modificadores (adj + SPrep)
- En f), valorar positivamente desglosar la coordinación dentro del término
- En c), el atributo es con "estar" (copulativo). NO confundir con predicativo (semicopulativos)
- En d), aceptar "CC de modo" o "CCM" si se justifica, aunque la respuesta esperada es CCL

---

## Baremo

| Ejercicio | Puntos |
|-----------|--------|
| 1 - Localización | 1,5 |
| 2 - Análisis | 2,0 |
| **TOTAL** | **3,5** |
