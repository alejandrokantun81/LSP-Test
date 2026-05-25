# LSP Explorer — Design System

> **"Professional Play"** — La metodología más seria, con el ladrillo más icónico.

## Visor Interactivo

Abre [`design-system.html`](./design-system.html) en el navegador para ver todos los tokens, colores, tipografía, sombras y componentes en vivo con demos interactivos.

---

## Concepto

El sistema de diseño de LSP Explorer vive en la intersección de dos mundos:

- **Profesional**: Tipografía poderosa, arquitectura limpia, grid preciso. Los usuarios son facilitadores corporativos y líderes que trabajan con Fortune 500s.
- **Lúdico**: El amarillo LEGO como acento dominante e inesperado. Módular, estructurado, construido bloque a bloque.

Inspiración directa: un ladrillo LEGO amarillo como pasador de corbata sobre un traje sastre gris marengo.

---

## Archivos del Sistema

| Archivo | Contenido |
|---------|-----------|
| [`design-system.html`](./design-system.html) | **Visor interactivo** — tokens, componentes y demos en vivo |
| [`style-guide.md`](./style-guide.md) | Guía de estilos completa — paleta, tipografía, animación, layout, voz y tono |
| [`components.md`](./components.md) | Especificaciones de los 10 componentes: props TypeScript, CSS, anatomía |
| [`tokens.css`](./tokens.css) | Referencia standalone (los tokens vivos están en `app/globals.css`) |

---

## Stack Tecnológico

| Tecnología | Versión | Notas |
|------------|---------|-------|
| Next.js | 16.x | App Router exclusivamente |
| React | 19.x | Server Components por defecto |
| TypeScript | 5.x | Strict mode |
| Tailwind CSS | 4.x | `@theme` en globals.css — sin `tailwind.config.js` |

---

## Paleta Rápida

```
Amarillo LEGO    #FFD700   ← Acento dominante, alma de la marca
Rojo LEGO        #E3000B   ← CTAs, acciones primarias
Ink 800          #1C1C24   ← Texto principal, navbars
Ink 050          #F4F4F9   ← Fondo de página (warm white)
Blanco           #FFFFFF   ← Surface de cards
```

## Fuentes

```
Bricolage Grotesque   → Headings, display, nombres de técnicas
Instrument Sans       → Body, UI labels, descripciones
JetBrains Mono        → IDs, slugs, datos técnicos
```

Importar en `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap');
```

---

## Cómo Usar los Tokens

Los tokens se definen en `tokens.css`. Para usarlos en el proyecto:

**Opción A — Import directo en globals.css:**
```css
@import "tailwindcss";
@import "../docs/design/tokens.css";
```

**Opción B — Copiar el bloque `@theme` a globals.css:**
Copia el contenido del bloque `@theme` de `tokens.css` dentro del archivo `globals.css` existente, después de `@import "tailwindcss";`.

---

## Imágenes de Referencia

| Archivo | Descripción |
|---------|-------------|
| [`1.png`](./1.png) | Legomode — UI reference: cards blancas, fondo amarillo, tipografía bold |
| [`2.png`](./2.png) | Concepto de marca: traje profesional + ladrillo LEGO amarillo |

---

## Principios de Diseño

1. **El amarillo es la firma** — Siempre presente, nunca excesivo. Máximo 20% de cobertura visual.
2. **Construido, no orgánico** — Bordes precisos, grid rígido, espaciado basado en múltiplos de 4px.
3. **La URL es la fuente de verdad** — El diseño refleja esto: el estado seleccionado es la URL, no el localStorage.
4. **Dense panels, airy content** — Los paneles laterales son compactos; el área central respira.
5. **Sin librería de UI** — Todo CSS puro con variables. Liviano, predecible, sin override wars.
