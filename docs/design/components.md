# LSP Explorer — Especificaciones de Componentes

> Stack: Next.js 16 App Router · React 19 · TypeScript strict · Tailwind CSS v4 · Sin UI libraries

---

## Índice

1. [NavigationBar](#1-navigationbar)
2. [TechniqueSelector](#2-techniqueSelector)
3. [TechniqueInfoPanel](#3-techniqueinfopanel)
4. [ActivityCard](#4-activitycard)
5. [ActivitiesListWithFilter](#5-activitieslistwithfilter)
6. [CategoryBadge](#6-categorybadge)
7. [KitBadge](#7-kitbadge)
8. [ComplexityIndicator](#8-complexityindicator)
9. [FilterPill](#9-filterpill)
10. [EmptyState](#10-emptystate)

---

## 1. NavigationBar

**Tipo**: Server Component  
**Archivo sugerido**: `src/components/NavigationBar.tsx`

### Anatomía

```
┌─────────────────────────────────────────────────────────────┐
│  [◆ stud]  LSP Explorer          [Técnicas] [Actividades]   │
│            ─ Herramientas de LEGO Serious Play ─            │
└─────────────────────────────────────────────────────────────┘
```

### Especificaciones

| Propiedad | Valor |
|-----------|-------|
| Alto | 64px (`--nav-height`) |
| Fondo | `--ink-800` (#1C1C24) |
| Posición | `position: sticky; top: 0; z-index: var(--z-sticky)` |
| Padding horizontal | 24px (`--space-6`) |
| Border bottom | `1px solid var(--ink-700)` |

### Elementos internos

**Logo / Marca**
- Stud decorativo SVG en `--lego-yellow`, 24×24px
- Texto "LSP Explorer" — Bricolage Grotesque, 700, 18px, color `--ink-000`
- Subtítulo opcional: "LEGO Serious Play" — Instrument Sans, 400, 12px, color `--ink-400`

**Links de navegación**
- Instrument Sans, 500, 14px, color `--ink-200`
- Hover: color `--ink-000`, underline de 2px en `--lego-yellow`
- Transición: `color 100ms ease-out`

### CSS

```css
.nav-bar {
  position: sticky;
  top: 0;
  height: var(--nav-height);
  background: var(--ink-800);
  border-bottom: 1px solid var(--ink-700);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--space-6);
  z-index: var(--z-sticky);
}
```

---

## 2. TechniqueSelector

**Tipo**: `'use client'` — OBLIGATORIO  
**Archivo**: `src/components/TechniqueSelector.tsx`

### Responsabilidad
Renderiza la lista de técnicas LSP agrupadas por categoría. Al seleccionar una técnica, hace `router.push(/lsp-explorer/${slug})`. **Sin useState para los datos** — llegan como props desde el Server Component padre.

### Props

```typescript
interface TechniqueSelectorProps {
  techniques: LSPTechnique[];          // Lista completa de técnicas
  selectedSlug?: string;               // Slug de la técnica actualmente activa
  groupedTechniques: Record<string, LSPTechnique[]>; // Pre-agrupadas por categoría
}
```

### Anatomía del Panel

```
┌─────────────────────────┐
│  Técnicas LSP           │ ← Heading S, Bricolage, --ink-800
│  20 técnicas            │ ← Caption, --ink-400
├─────────────────────────┤
│  CONSTRUCCIÓN INDIVIDUAL│ ← Overline, uppercase, --ink-400
│ ┌─────────────────────┐ │
│ │ ● Warm-Up           │ │ ← Card técnica
│ │   Técnica base      │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ ● Construcción...   │ │ ← Card técnica (activa = amarilla)
│ └─────────────────────┘ │
│                         │
│  CONSTRUCCIÓN COMPARTIDA│
│  ...                    │
└─────────────────────────┘
```

### Card de Técnica (ítem de lista)

| Estado | Descripción visual |
|--------|-------------------|
| Default | Fondo blanco, borde `--ink-100`, stud gris |
| Hover | Fondo `--ink-050`, borde `--ink-200`, translateX(2px) |
| Selected | Borde izquierdo 3px `--lego-yellow`, stud amarillo, shadow-yellow-sm, translateX(4px) |
| Focus | Outline de 2px en `--lego-yellow` con offset de 2px |

```css
.technique-card {
  background: var(--ink-000);
  border: 1px solid var(--ink-100);
  border-left: 3px solid transparent;
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  cursor: pointer;
  transition:
    border-color 150ms var(--ease-out),
    box-shadow 150ms var(--ease-out),
    transform 150ms var(--ease-spring),
    background-color 100ms var(--ease-out);
}

.technique-card:hover {
  background: var(--ink-050);
  border-left-color: var(--ink-200);
  transform: translateX(2px);
}

.technique-card[data-selected="true"] {
  border-left-color: var(--lego-yellow);
  box-shadow: var(--shadow-yellow-sm);
  transform: translateX(4px);
  background: var(--ink-000);
}
```

### Contenido de cada Card de Técnica

```
┌───────────────────────────────┐
│  ●  Nombre de la Técnica      │  ← stud dot (8px) + Bricolage 600 16px
│     Categoría breve           │  ← Instrument Sans 400 13px --ink-400
└───────────────────────────────┘
```

- **Stud dot**: `width: 8px; height: 8px; border-radius: 50%`
  - Default: `background: --ink-200`
  - Selected: `background: --lego-yellow`
- **Nombre**: Bricolage Grotesque, 600, 15px, `--ink-800`
- **Categoría**: Instrument Sans, 400, 12px, `--ink-400`, truncate con ellipsis

### Header de Categoría

```css
.category-header {
  font-family: var(--font-body);
  font-size: 0.6875rem;  /* 11px */
  font-weight: 600;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--ink-400);
  padding: var(--space-4) var(--space-4) var(--space-2);
  margin-top: var(--space-6);
}
```

---

## 3. TechniqueInfoPanel

**Tipo**: Server Component — `src/components/TechniqueInfoPanel.tsx`  
(También usado en `@techniqueInfo/(slot)/[slug]/page.tsx`)

### Props

```typescript
interface TechniqueInfoPanelProps {
  technique: LSPTechnique;
}
```

### Anatomía

```
┌─────────────────────────────────┐
│  CONSTRUCCIÓN INDIVIDUAL        │ ← Overline (categoría)
│  Nombre de la Técnica           │ ← Heading XL, Bricolage 700
│                                 │
│  Descripción completa de la     │ ← Body, Instrument 400 16px
│  técnica en 2–3 párrafos...     │   leading-relaxed
│                                 │
│  ─────────────────────────────  │ ← Divider (ink-100)
│                                 │
│  HABILITA                       │ ← Overline label
│  ┌──────────┐ ┌──────────┐     │
│  │ Técnica 1│ │ Técnica 2│     │ ← Pills enlazables
│  └──────────┘ └──────────┘     │
│                                 │
│  DA SOPORTE A                   │ ← Overline label
│  ┌──────────┐                  │
│  │ Técnica 3│                  │
│  └──────────┘                  │
└─────────────────────────────────┘
```

### Especificaciones

**Panel container**
```css
.technique-info-panel {
  padding: var(--space-10);
  height: 100%;
  overflow-y: auto;
  background: var(--ink-000);
  border-right: 1px solid var(--ink-100);
  width: var(--panel-technique);  /* 320px */
}
```

**Overline (categoría)**
```css
.panel-overline {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--ink-400);
  margin-bottom: var(--space-2);
}
```

**Título de técnica**
```css
.panel-title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);  /* 1.875rem */
  font-weight: 700;
  letter-spacing: var(--tracking-tighter);
  color: var(--ink-800);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-4);
}
```

**Descripción**
```css
.panel-description {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  color: var(--ink-600, var(--ink-800));
  line-height: var(--leading-relaxed);
}
```

**Pills de relaciones (enables/supports)**

Pills clickeables que navegan a la técnica relacionada:
```css
.relation-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  background: var(--ink-050);
  border: 1px solid var(--ink-100);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--ink-800);
  text-decoration: none;
  transition: 
    background-color 100ms var(--ease-out),
    border-color 100ms var(--ease-out);
}

.relation-pill:hover {
  background: var(--lego-yellow-light);
  border-color: var(--lego-yellow-dark);
}
```

---

## 4. ActivityCard

**Tipo**: Server Component — `src/components/ActivityCard.tsx`

### Props

```typescript
interface ActivityCardProps {
  activity: LSPActivity;
}
```

### Anatomía

```
┌──────────────────────────────────────┐
│  [kit badge]  [type badge]           │
│                                      │
│  Nombre de la Actividad              │ ← Heading S, Bricolage 600
│  Descripción breve de la actividad   │ ← Body S, Instrument 400
│                                      │
│  ─────────────────────────────────   │ ← Divider
│                                      │
│  ⏱ 45–90 min    👥 8–20 pers.       │ ← Metadatos inline
│                                      │
│  ●●●○  Nivel 3                       │ ← ComplexityIndicator
└──────────────────────────────────────┘
```

### Card Container

```css
.activity-card {
  background: var(--ink-000);
  border: 1px solid var(--ink-100);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition:
    box-shadow 200ms var(--ease-out),
    transform 200ms var(--ease-spring),
    border-color 150ms var(--ease-out);
}

.activity-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  border-color: var(--ink-200);
}
```

### Nombre de Actividad

```css
.activity-title {
  font-family: var(--font-display);
  font-size: var(--text-lg);  /* 1.25rem */
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--ink-800);
  margin: var(--space-3) 0 var(--space-2);
}
```

### Descripción

```css
.activity-description {
  font-family: var(--font-body);
  font-size: var(--text-sm);  /* 0.875rem */
  color: var(--ink-400);
  line-height: var(--leading-normal);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### Fila de Metadatos

```css
.activity-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--ink-400);
  margin-top: var(--space-4);
}

.activity-meta-item {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}
```

---

## 5. ActivitiesListWithFilter

**Tipo**: `'use client'` — OBLIGATORIO  
**Archivo**: `src/components/ActivitiesListWithFilter.tsx`

### Responsabilidad
- Recibe `activities: LSPActivity[]` como prop (del Server Component)
- Filtra **100% client-side** con `useState` + `Array.filter()`
- **Cero fetches** en el cliente

### Props

```typescript
interface ActivitiesListWithFilterProps {
  activities: LSPActivity[];
  techniqueSlug: string;  // Para context, no para fetch
}
```

### Anatomía del Panel

```
┌─────────────────────────────────┐
│  Actividades (7)                │ ← Heading S + count badge
│                                 │
│  Filtros:                       │
│  [Todos] [Workshop] [Assessment]│ ← FilterPills tipo
│  [Corta] [Larga]                │ ← FilterPills duración
│  [● 1] [●● 2] [●●● 3]          │ ← FilterPills complejidad
│                                 │
│  ┌───────────────────────────┐  │
│  │ ActivityCard              │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │ ActivityCard              │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### Estado de filtros

```typescript
type FilterState = {
  type: 'all' | 'workshop' | 'assessment';
  duration: 'all' | 'short' | 'long';
  complexity: 'all' | '1' | '2' | '3';
};
```

### Panel Container

```css
.activities-panel {
  width: var(--panel-activity);  /* 360px */
  background: var(--ink-050);
  border-left: 1px solid var(--ink-100);
  padding: var(--space-6);
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
```

### Header del Panel

```css
.panel-header {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
}

.panel-heading {
  font-family: var(--font-display);
  font-size: var(--text-xl);  /* 1.5rem */
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink-800);
}

.panel-count {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--ink-000);
  background: var(--lego-yellow);
  color: var(--ink-800);
  padding: 1px var(--space-2);
  border-radius: var(--radius-full);
}
```

---

## 6. CategoryBadge

**Tipo**: Server Component puro (sin estado)  
**Archivo**: `src/components/ui/CategoryBadge.tsx`

### Props

```typescript
interface CategoryBadgeProps {
  category: LSPTechnique['category'];
  size?: 'sm' | 'md';
}
```

### Especificaciones

```css
.category-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 2px var(--space-2);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 0.6875rem;  /* 11px */
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
}
```

### Variantes por Categoría

| Categoría | Background | Color texto |
|-----------|-----------|-------------|
| Construcción Individual | `#FFF3CD` | `#8A6D00` |
| Construcción Compartida | `#DBEAFE` | `#1E40AF` |
| Construcción Paisaje | `#D1FAE5` | `#065F46` |
| Juego Identitario | `#FEE2E2` | `#991B1B` |
| Metáforas Sistémicas | `#EDE9FE` | `#5B21B6` |

---

## 7. KitBadge

**Tipo**: Server Component puro  
**Archivo**: `src/components/ui/KitBadge.tsx`

### Props

```typescript
interface KitBadgeProps {
  kit: LSPActivity['kit'];
}
```

### Variantes

| Kit | Ícono | Estilo |
|-----|-------|--------|
| `starter` | `▷` | Fondo `--ink-050`, texto `--ink-600` |
| `facilitator` | `◆` | Fondo amarillo light, texto oscuro |
| `team` | `⬡` | Fondo azul light, texto azul |
| `online` | `⬡` | Fondo verde light, texto verde |

```css
.kit-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}
```

---

## 8. ComplexityIndicator

**Tipo**: Server Component puro  
**Archivo**: `src/components/ui/ComplexityIndicator.tsx`

### Props

```typescript
interface ComplexityIndicatorProps {
  complexity: '1' | '2' | '3';
  showLabel?: boolean;
}
```

### Anatomía

```
●●●  Nivel 3   (complexity=3, showLabel=true)
●●○  Nivel 2
●○○  Nivel 1
```

### Implementación

```typescript
// Renderiza 3 dots: filled para <= complexity, empty para > complexity
// Dot filled: background --lego-yellow, 8×8px, border-radius 50%
// Dot empty:  background --ink-100, 8×8px, border-radius 50%
// Gap entre dots: 4px
// Label: Instrument Sans 500 13px --ink-400, "Nivel N"
```

---

## 9. FilterPill

**Tipo**: Client Component (usado dentro de ActivitiesListWithFilter)  
No requiere archivo propio — puede ser componente interno o inline.

### Props

```typescript
interface FilterPillProps {
  label: string;
  active: boolean;
  onClick: () => void;
}
```

### Estados

```css
.filter-pill {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  border: 1px solid var(--ink-100);
  background: var(--ink-000);
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--ink-400);
  cursor: pointer;
  transition:
    background-color 100ms var(--ease-out),
    border-color 100ms var(--ease-out),
    color 100ms var(--ease-out);
  user-select: none;
}

.filter-pill:hover {
  background: var(--ink-050);
  color: var(--ink-800);
}

.filter-pill[data-active="true"] {
  background: var(--lego-yellow);
  border-color: var(--lego-yellow-dark);
  color: var(--ink-800);
  font-weight: 600;
}

.filter-pill:focus-visible {
  outline: 2px solid var(--lego-yellow);
  outline-offset: 2px;
}
```

---

## 10. EmptyState

**Tipo**: Server Component puro  
**Archivo**: `src/components/ui/EmptyState.tsx`

Se muestra cuando:
- No hay técnica seleccionada (panel de info)
- No hay actividades con los filtros aplicados

### Props

```typescript
interface EmptyStateProps {
  variant: 'no-technique-selected' | 'no-activities' | 'no-results';
  message?: string;
}
```

### Anatomía

```
     ┌──────────────────────────┐
     │                          │
     │    [◆ stud grande]       │   ← SVG ornamental, 48px, --ink-100
     │                          │
     │    Selecciona una        │   ← Heading XS, Bricolage, --ink-400
     │    técnica para empezar  │
     │                          │
     │    Elige una técnica en  │   ← Body S, Instrument, --ink-200
     │    el panel izquierdo    │
     │                          │
     └──────────────────────────┘
```

### CSS

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-12) var(--space-8);
  gap: var(--space-3);
}

.empty-state-icon {
  width: 48px;
  height: 48px;
  color: var(--ink-100);
  margin-bottom: var(--space-2);
}

.empty-state-heading {
  font-family: var(--font-display);
  font-size: var(--text-md);
  font-weight: 600;
  color: var(--ink-400);
}

.empty-state-body {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--ink-200);
  max-width: 220px;
}
```

---

## Patrones Transversales

### Foco y Accesibilidad

Todos los elementos interactivos deben tener un estado `:focus-visible` claro:

```css
:focus-visible {
  outline: 2px solid var(--lego-yellow);
  outline-offset: 2px;
  border-radius: var(--radius-xs);
}
```

### Scrollbars Personalizados

Para los paneles con `overflow-y: auto`:

```css
.scrollable-panel {
  scrollbar-width: thin;
  scrollbar-color: var(--ink-100) transparent;
}

.scrollable-panel::-webkit-scrollbar {
  width: 4px;
}

.scrollable-panel::-webkit-scrollbar-track {
  background: transparent;
}

.scrollable-panel::-webkit-scrollbar-thumb {
  background: var(--ink-100);
  border-radius: var(--radius-full);
}

.scrollable-panel::-webkit-scrollbar-thumb:hover {
  background: var(--ink-200);
}
```

### Skeleton Loading

Para estados de carga en Parallel Routes (usar `loading.tsx`):

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--ink-100) 0%,
    var(--ink-050) 50%,
    var(--ink-100) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: var(--radius-sm);
}

@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .skeleton { animation: none; background: var(--ink-100); }
}
```

### Dividers

```css
/* Horizontal */
.divider {
  height: 1px;
  background: var(--ink-100);
  margin: var(--space-6) 0;
}

/* Con label centrado */
.divider-labeled {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--ink-200);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.divider-labeled::before,
.divider-labeled::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--ink-100);
}
```
