# LSP Explorer — Guía de Estilos

> **Concepto de marca**: *"Professional Play"* — La intersección entre la metodología empresarial seria y la construcción creativa con LEGO. Como el ladrillo amarillo sobre el traje sastre: inesperado, seguro, memorable.

---

## 1. Identidad Visual

### Concepto Central
LEGO Serious Play es una metodología usada en Fortune 500s, sesiones ejecutivas y talleres de estrategia. El diseño debe reflejar **ambos mundos simultáneamente**:

- **Arquitectura limpia y profesional** → estructura, grid preciso, tipografía poderosa
- **Color y energía LEGO** → amarillo como acento dominante y disruptivo

El usuario de LSP Explorer es un **facilitador profesional** o **líder organizacional**. Diseñamos para darle confianza y claridad, no para entretenerlo.

---

## 2. Paleta de Color

### Colores Primarios

| Token | Hex | Uso |
|-------|-----|-----|
| `--lego-yellow` | `#FFD700` | Acento principal, highlights, estados activos, iconos de técnica |
| `--lego-red` | `#E3000B` | CTAs primarios, acciones destructivas, badges urgentes |
| `--ink-800` | `#1C1C24` | Texto principal, fondos dark, barras de navegación |

### Colores Secundarios

| Token | Hex | Uso |
|-------|-----|-----|
| `--lego-blue` | `#006CB7` | Links, info, tipo "online" |
| `--lego-green` | `#00A650` | Éxito, "enables", técnicas activas |
| `--ink-050` | `#F4F4F9` | Fondo global (warm white, no puro) |
| `--ink-100` | `#E4E4EF` | Bordes, divisores |
| `--ink-400` | `#6B6B84` | Texto secundario, labels |

### Sistema de Color Semántico

```
Fondo de página   → --ink-050  (#F4F4F9)
Cards / Surface   → --ink-000  (#FFFFFF)
Texto principal   → --ink-800  (#1C1C24)
Texto secundario  → --ink-400  (#6B6B84)
Texto muted       → --ink-200  (#A9A9BF)
Bordes            → --ink-100  (#E4E4EF)
Acento/highlight  → --lego-yellow (#FFD700)
CTA principal     → --lego-red (#E3000B)
```

### Uso del Amarillo LEGO

El amarillo es el **alma de la marca**. Úsalo con intención, no con generosidad:

✅ **Hacer**
- Indicador del elemento seleccionado / activo
- Highlight sobre texto (como marca de resaltado)
- Borde izquierdo en cards de técnica activa (`border-l-4`)
- Background de badges de categoría
- Hover state en elementos de navegación
- Stud decorativo (punto circular) como ornamento estructural

❌ **Evitar**
- Backgrounds de página enteros en amarillo (se usa para CTAs / alertas, no layout)
- Texto amarillo sobre fondo blanco (bajo contraste)
- Más del 20% de la pantalla cubierta con amarillo
- Combinar amarillo + rojo en el mismo componente

### Regla de Contraste (WCAG AA)

| Combinación | Contraste | Resultado |
|-------------|-----------|-----------|
| `--ink-800` sobre `--ink-050` | 13.5:1 | ✅ AAA |
| `--ink-800` sobre `--lego-yellow` | 8.2:1 | ✅ AAA |
| `--ink-000` sobre `--lego-red` | 5.1:1 | ✅ AA |
| `--ink-400` sobre `--ink-000` | 4.9:1 | ✅ AA |
| `--ink-200` sobre `--ink-000` | 2.1:1 | ⚠️ solo decorativo |

---

## 3. Tipografía

### Fuentes del Sistema

```
Display  →  Bricolage Grotesque (Google Fonts)
Body     →  Instrument Sans (Google Fonts)
Mono     →  JetBrains Mono (Google Fonts)
```

**¿Por qué estas fuentes?**
- **Bricolage Grotesque**: Variable, con eje de ancho óptico. En tamaños grandes tiene personalidad arquitectónica — como letras construidas, casi modulares. Perfecto para el universo LEGO.
- **Instrument Sans**: Humanista, muy legible. Profesional sin ser frío. Empareja con Bricolage manteniendo el registro serio.
- **JetBrains Mono**: Para IDs de técnicas, slugs, datos técnicos.

### Escala de Tipos

| Nombre | Tamaño | Peso | Leading | Uso |
|--------|--------|------|---------|-----|
| Display Hero | `4.5rem` | 800 | 1.05 | Títulos de hero page |
| Display Large | `3.75rem` | 800 | 1.1 | H1 de secciones |
| Display | `3rem` | 700 | 1.15 | H1 de páginas interiores |
| Heading XL | `2.25rem` | 700 | 1.2 | H2 principales |
| Heading L | `1.875rem` | 700 | 1.25 | H2 secundarios |
| Heading M | `1.5rem` | 600 | 1.3 | H3 |
| Heading S | `1.25rem` | 600 | 1.35 | H4, card titles |
| Heading XS | `1.125rem` | 600 | 1.4 | Labels de sección |
| Body L | `1.125rem` | 400 | 1.6 | Texto introductorio |
| Body | `1rem` | 400 | 1.6 | Texto base |
| Body S | `0.875rem` | 400 | 1.5 | Texto secundario, descriptions |
| Label | `0.875rem` | 500 | 1.3 | Labels de UI, badges |
| Caption | `0.75rem` | 400 | 1.4 | Metadatos, timestamps |
| Overline | `0.75rem` | 600 | 1.2 | Category labels (uppercase + tracking) |
| Mono | `0.875rem` | 400 | 1.5 | IDs, slugs, código |

### Reglas Tipográficas

**Headings (Bricolage Grotesque)**
```css
/* Siempre tracking negativo en títulos grandes */
h1 { letter-spacing: -0.04em; }
h2 { letter-spacing: -0.025em; }
h3 { letter-spacing: -0.015em; }

/* Nunca font-weight < 600 en Bricolage para headings */
```

**Body (Instrument Sans)**
```css
/* Texto cuerpo: tracking neutro */
p { letter-spacing: 0; }

/* Labels y UI: tracking ligeramente positivo */
.label { letter-spacing: 0.01em; }

/* Overlines (categorías): uppercase + tracking amplio */
.overline {
  text-transform: uppercase;
  letter-spacing: 0.10em;
  font-size: 0.75rem;
  font-weight: 600;
}
```

### Jerarquía en el Explorador LSP

```
CATEGORÍA (overline)          → Instrument Sans, 600, uppercase, 12px, --ink-400
Nombre de Técnica             → Bricolage Grotesque, 700, 24–30px, --ink-800
Descripción corta             → Instrument Sans, 400, 16px, --ink-400
Descripción completa          → Instrument Sans, 400, 16px leading-relaxed, --ink-800
Metadatos (kit, duración)     → Instrument Sans, 500, 14px, --ink-400
Actividades (card title)      → Bricolage Grotesque, 600, 18px, --ink-800
ID / Slug                     → JetBrains Mono, 400, 12px, --ink-400
```

---

## 4. Espaciado

Sistema basado en **unidad de 4px** — paralelo al stud LEGO (9.6mm en el mundo físico → 4px en el digital).

### Escala

| Token | Valor | Uso típico |
|-------|-------|-----------|
| `--space-1` | 4px | Gap entre ícono e inline text |
| `--space-2` | 8px | Padding de badges, gap en inline groups |
| `--space-3` | 12px | Padding vertical de inputs pequeños |
| `--space-4` | 16px | Padding de cards compactas, gap en listas |
| `--space-6` | 24px | Padding estándar de cards |
| `--space-8` | 32px | Gap entre secciones de card |
| `--space-10` | 40px | Padding de contenido en paneles |
| `--space-12` | 48px | Separación entre secciones |
| `--space-16` | 64px | Secciones de página |
| `--space-20` | 80px | Hero padding vertical |
| `--space-24` | 96px | Separación de bloques grandes |

### Principios de Espaciado

1. **Densidad intencional**: Los paneles laterales son densos (compactos), el área principal es aireada.
2. **Consistencia en componentes**: Todos los cards usan `padding: 24px` (`--space-6`).
3. **Gap en listas**: `16px` entre items de lista (`--space-4`).
4. **Secciones dentro de cards**: `24px` de separación (`--space-6`).

---

## 5. Bordes y Radio

### Filosofía
Las esquinas en LSP Explorer son **limpias pero no frías**. Inspiradas en la arista redondeada de las piezas LEGO — precisa, no orgánica.

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-xs` | 2px | Indicadores, progress bars |
| `--radius-sm` | 4px | Badges, tags, inputs de texto |
| `--radius-md` | 8px | Botones, cards compactas |
| `--radius-lg` | 12px | Cards principales, paneles |
| `--radius-xl` | 16px | Modales, sheets, drawers |
| `--radius-2xl` | 24px | Hero cards, elementos destacados |
| `--radius-full` | 9999px | Pills de filtro, avatars |

### Bordes

```css
/* Borde estándar */
border: 1px solid var(--ink-100);

/* Borde de énfasis (activo / hover) */
border: 1px solid var(--lego-yellow);

/* Borde izquierdo de acento — técnica seleccionada */
border-left: 3px solid var(--lego-yellow);

/* Sin borde — elevación por sombra */
border: none;
box-shadow: var(--shadow-float);
```

---

## 6. Sombras y Elevación

Sistema de **5 niveles de elevación**, de menor a mayor flotabilidad:

| Nivel | Token | Uso |
|-------|-------|-----|
| 0 | `none` | Elementos en el mismo plano que el fondo |
| 1 | `--shadow-xs` | Inputs, checkboxes, elementos inline |
| 2 | `--shadow-sm` | Cards de lista, items de navegación |
| 3 | `--shadow-md` | Cards de contenido, dropdowns |
| 4 | `--shadow-lg` | Paneles laterales, popovers |
| 5 | `--shadow-float` | Modales, cards destacadas |

**Sombras con amarillo** (usar con moderación — solo en elementos seleccionados o CTA destacados):
```css
/* Card de técnica activa */
box-shadow: var(--shadow-yellow-md);

/* Botón CTA amarillo en hover */
box-shadow: var(--shadow-yellow-sm);
```

---

## 7. Iconografía

### Principios
- **Sin icon libraries** — el stack no incluye dependencias de íconos
- Usar **SVG inline** para íconos de sistema
- Usar **emojis o caracteres unicode** para indicadores semánticos simples
- Los "studs" LEGO se representan como círculos SVG decorativos

### Íconos de Sistema (SVG inline, 20×20px)

| Ícono | Uso | Forma |
|-------|-----|-------|
| Stud LEGO | Ornamento de marca, indicador activo | Círculo con anillo interior |
| Ladrillo | Logo / hero | Rectángulo con studs en fila |
| Flecha derecha `→` | Navegación, "enables" | SVG chevron o unicode |
| Filtro | Panel de filtros | 3 líneas horizontales decrecientes |
| Check | Estado completado | Checkmark simple |
| X | Cerrar, quitar filtro | Cruz en 45° |

### Indicadores de Categoría (dots de color)

Cada categoría LSP tiene un color de identificación:

| Categoría | Color | Hex |
|-----------|-------|-----|
| Construcción Individual | Amarillo | `#FFD700` |
| Construcción Compartida | Azul | `#006CB7` |
| Construcción Paisaje | Verde | `#00A650` |
| Juego Identitario | Rojo | `#E3000B` |
| Metáforas Sistémicas | Violeta | `#7B2FBE` |

---

## 8. Animación y Motion

### Principios
- **Velocidad**: Rápido por defecto. Los profesionales no esperan.
- **Propósito**: Cada animación comunica estado o jerarquía, nunca es decorativa sin más.
- **Reducción**: Respetar `prefers-reduced-motion`.

### Duraciones

| Uso | Token | Valor |
|-----|-------|-------|
| Feedback instantáneo (hover states) | `--duration-fast` | 100ms |
| Transiciones de UI (color, opacity) | `--duration-normal` | 200ms |
| Entrada de elementos | `--duration-slow` | 300ms |
| Transiciones de página | `--duration-slower` | 500ms |

### Easings

```css
/* Salida de elementos (suele ser más rápida) */
--ease-out: cubic-bezier(0.0, 0.0, 0.2, 1.0);

/* Entrada natural con leve rebote (technique cards) */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1.0);

/* Respuesta inmediata al input (botones) */
--ease-snappy: cubic-bezier(0.2, 0.0, 0.0, 1.0);
```

### Micro-interacciones Clave

**Card de técnica al seleccionarse:**
```css
transition: 
  border-color 200ms var(--ease-out),
  box-shadow 200ms var(--ease-out),
  transform 150ms var(--ease-spring);

/* En selected: */
transform: translateX(2px);
border-left-color: var(--lego-yellow);
box-shadow: var(--shadow-yellow-sm);
```

**Botón CTA:**
```css
transition: 
  background-color 100ms var(--ease-snappy),
  transform 100ms var(--ease-snappy);

/* En hover: */
transform: translateY(-1px);

/* En active: */
transform: translateY(0px) scale(0.98);
```

**Badge de filtro al activarse:**
```css
transition:
  background-color 150ms var(--ease-out),
  color 150ms var(--ease-out);
```

### `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Layout y Grid

### Estructura del Explorador

```
┌─────────────────────────────────────────────────────────────┐
│  NAV BAR (64px alto, position: sticky)                      │
├───────────────┬─────────────────────────────┬───────────────┤
│               │                             │               │
│  @techniqueInfo│   TechniqueSelector        │  @activities  │
│  Panel        │   + descripción principal   │  Panel        │
│  320px        │   (flex-grow: 1)            │  360px        │
│  overflow-y   │                             │  overflow-y   │
│  scroll       │                             │  scroll       │
│               │                             │               │
└───────────────┴─────────────────────────────┴───────────────┘
```

### Responsive

| Breakpoint | Layout | Cambio |
|------------|--------|--------|
| `<768px` | Stack vertical | Los paneles se convierten en acordeones / tabs |
| `768–1023px` | 2 columnas | Technique Info + Selector en columna izquierda |
| `1024–1279px` | 3 columnas compactas | Paneles reducidos a 280px |
| `≥1280px` | Layout completo | Paneles a ancho máximo |

### Principios de Layout

1. **El grid es sagrado** — alinear siempre a la cuadrícula de 4px
2. **Contenido, no chrome** — la interfaz sirve al contenido LSP, no al revés
3. **Paneles estables** — el panel de técnica y el de actividades no hacen layout shift al navegar
4. **Scannable** — el usuario debe poder leer el nombre de una técnica en < 0.3 segundos

---

## 10. Voz y Tono

### Personalidad
**Experto accesible** — habla como un facilitador LSP senior que respeta tu inteligencia.

### Principios

| Principio | Hacer | Evitar |
|-----------|-------|--------|
| Preciso | "5–20 participantes" | "Un grupo de personas" |
| Directo | "Selecciona una técnica" | "Por favor, elige una técnica para comenzar tu exploración" |
| Profesional | "Metodología validada" | "¡Super cool!" |
| Claro | "Kit: Facilitador" | "Necesita el kit del facilitador para su uso" |

### Labels de UI

```
Categorías:
  "Construcción Individual" ✅
  "Contrucción Indiv." ❌ (nunca truncar)

Duración:
  "Corta (< 30 min)" ✅
  "Rápida" ❌ (demasiado informal)

Complejidad:
  "Nivel 1 / 2 / 3" ✅
  "Fácil / Medio / Difícil" ❌ (subjetivo)

Kit:
  "Starter" / "Facilitador" / "Equipo" / "Online" ✅
  (Usar capitalización consistente — title case en español)
```

---

## 11. Dark Mode

Preparado para implementación futura. Las variables semánticas facilitan el toggle:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:          var(--ink-900);
    --color-bg-elevated: var(--ink-800);
    --color-surface:     var(--ink-700);
    --color-border:      var(--ink-600);
    --color-text:        var(--ink-050);
    --color-text-muted:  var(--ink-200);
    --color-text-subtle: var(--ink-400);
    /* El amarillo no cambia — es la constante de marca */
    --color-accent:      var(--lego-yellow);
  }
}
```

**En modo oscuro, el amarillo brilla aún más.** El fondo `--ink-900` contra `--lego-yellow` crea el contraste más dramático del sistema — guarda este momento para los elementos más importantes.
