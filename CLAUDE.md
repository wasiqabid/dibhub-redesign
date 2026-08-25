# CLAUDE.md — DibHub Website

Conventions for this repository. **Follow them exactly for every page and component built
from here on.** If something below conflicts with a habit from another Next.js project, this
file wins.

---

## 1. Stack

| Thing      | Choice                                         |
| ---------- | ---------------------------------------------- |
| Framework  | Next.js 15, **App Router only**                |
| React      | 18                                             |
| Language   | **Plain JavaScript** — no TypeScript, ever     |
| Node       | 20.15.1 (pinned in `.nvmrc`)                   |
| Styling    | **SCSS only** (`sass`)                         |
| Path alias | `@/*` → `./src/*` (`jsconfig.json`)            |
| Formatting | Prettier (`.prettierrc`)                       |
| Motion     | **Framer Motion** (`framer-motion` v11)        |
| Fonts      | Cabin via `next/font/google` (400/500/600/700) |

**Never introduce:** TypeScript, `.ts`/`.tsx` files, Tailwind, styled-components, emotion,
CSS Modules, inline `style={{}}` objects for anything a class can do, or a UI kit
(Bootstrap, MUI, Chakra). No new dependency without asking first.

`framer-motion` is the one approved runtime dependency, added for the Home page. All
entrance/scroll motion goes through the primitives in `src/components/motion/` (§5) rather
than ad-hoc `animate` props scattered through sections. Looping CSS effects and the global
`prefers-reduced-motion` clamp live in `default/_animations.scss`.

Run `nvm use` before installing. Scripts: `npm run dev`, `build`, `start`, `lint`,
`format`, `format:check`.

---

## 2. Directory layout

```
dibhub-redesign/
├── .nvmrc                     Node 20.15.1
├── .prettierrc                formatting rules (§6)
├── jsconfig.json              @/* → ./src/*
├── next.config.mjs            sass includePaths → public/assets/scss
├── CLAUDE.md                  this file
├── public/
│   └── assets/
│       ├── fonts/             self-hosted font files (Cabin comes from next/font)
│       ├── images/            all images/SVGs referenced from JSX
│       ├── video/             background video (hero-bg.mp4)
│       └── scss/              the entire stylesheet (§4)
│           ├── style.scss     the ONLY file layout.js imports
│           ├── default/       foundation — tokens, no section styles
│           └── elements/      one partial per section
└── src/
    ├── app/                   routes (§3)
    ├── components/<feature>/  section components (§5)
    │   ├── motion/            Framer Motion primitives — Reveal, Rise, Drift, WordReveal
    │   └── icons/             Icons.js — every inline SVG, named exports
    ├── hooks/                 custom hooks — useSomething.js
    └── utils/                 pure helpers — camelCase.js
```

---

## 3. Routing (`src/app`)

- **Home** is `src/app/page.js` — it lives at the app root, _not_ in the route group.
- **Every other page** lives under the `(inner)` route group:
  `src/app/(inner)/<segment>/page.js`.
  `(inner)` is a **route group** — the parentheses mean it does **not** appear in the URL.
  `src/app/(inner)/about/page.js` serves `/about`.
- Route segments are **kebab-case**: `web-development`, `qa-automation`, `all-treat`.
- Nested sections nest as folders: service detail pages under `services/`, project detail
  pages under `portfolio/`.

Current route map — do not rename or relocate these:

| URL                            | File                                                  |
| ------------------------------ | ----------------------------------------------------- |
| `/`                            | `src/app/page.js`                                     |
| `/about`                       | `src/app/(inner)/about/page.js`                       |
| `/contact`                     | `src/app/(inner)/contact/page.js`                     |
| `/team`                        | `src/app/(inner)/team/page.js`                        |
| `/portfolio`                   | `src/app/(inner)/portfolio/page.js`                   |
| `/portfolio/barbr`             | `src/app/(inner)/portfolio/barbr/page.js`             |
| `/portfolio/all-treat`         | `src/app/(inner)/portfolio/all-treat/page.js`         |
| `/portfolio/merge`             | `src/app/(inner)/portfolio/merge/page.js`             |
| `/portfolio/trt`               | `src/app/(inner)/portfolio/trt/page.js`               |
| `/services`                    | `src/app/(inner)/services/page.js`                    |
| `/services/ai-ml`              | `src/app/(inner)/services/ai-ml/page.js`              |
| `/services/web-development`    | `src/app/(inner)/services/web-development/page.js`    |
| `/services/mobile-application` | `src/app/(inner)/services/mobile-application/page.js` |
| `/services/devops`             | `src/app/(inner)/services/devops/page.js`             |
| `/services/qa-automation`      | `src/app/(inner)/services/qa-automation/page.js`      |
| `/services/business-services`  | `src/app/(inner)/services/business-services/page.js`  |

### Page file shape

Every `page.js` is a **Server Component** (no `'use client'`) that exports `metadata` and a
default function. It composes section components — it does not contain long stretches of
raw markup:

```js
import Banner from '@/components/banner/Banner';
import Services from '@/components/services/Services';

export const metadata = {
  title: 'Services',
  description: '...',
};

export default function ServicesPage() {
  return (
    <>
      <Banner />
      <Services />
    </>
  );
}
```

- Component name = PascalCase route + `Page`: `AiMlPage`, `AllTreatPage`, `HomePage`.
- Every page exports `metadata` with at least a `title`.
- `src/app/layout.js` is the root layout: it sets `<html lang="en">`, loads the Cabin font
  through `next/font/google` as the `--font-cabin` variable, imports `style.scss`, and
  mounts `<Header />`, `<main>`, `<Footer />` and `<BackToTop />` for every route.
- `src/app/(inner)/layout.js` wraps inner pages in `.dh-inner-shell`, which adds the fixed
  header's 72px of clearance. Home stays outside the group because its hero supplies its
  own top padding.
- Inner pages still render a bare `<h1>` placeholder. **Replace that entirely** when the
  approved design for that page arrives — do not build on top of the placeholder.
- Add a `loading.js` / `error.js` / `not-found.js` only when asked.

### Header active state

The header is mounted once globally, so the active nav link is derived from `usePathname()`
— never hardcoded per page. `/` matches exactly; every other link matches on prefix, so
`/services/ai-ml` keeps "Services" underlined.

---

## 4. Styling

### The rules

1. **All SCSS lives in `public/assets/scss/`.** No `.scss` files inside `src/`.
2. **`style.scss` is the only stylesheet the app imports**, and it is imported exactly once,
   in `src/app/layout.js`:
   ```js
   import '../../public/assets/scss/style.scss';
   ```
   Never import SCSS from a component or a page.
3. Every new partial must be registered with a `@use` line in `style.scss` or it produces
   no CSS.
4. Styling is done with **global class names on elements** — no CSS Modules, no Tailwind,
   no CSS-in-JS.

### `default/` — the foundation

Tokens and helpers that the whole site draws on. Populated when the design system is
approved; currently placeholders.

| File               | Holds                                                      |
| ------------------ | ---------------------------------------------------------- |
| `_variables.scss`  | colors, font families, breakpoints, radii, z-index scale   |
| `_typography.scss` | base type styles, heading scale, `body` defaults           |
| `_spacing.scss`    | spacing scale, container widths, section padding utilities |
| `_mixins.scss`     | mixins + functions (media queries, flex helpers, clamps)   |
| `_animations.scss` | keyframes and transition helpers                           |
| `_index.scss`      | `@forward`s all of the above — **do not add styles here**  |

### `elements/` — one partial per section

One file per section/component: `_header.scss`, `_footer.scss`, `_banner.scss`,
`_button.scss`, `_services.scss`, `_portfolio.scss`, `_process.scss`, `_cta.scss`,
`_back-to-top.scss`, `_testimonials.scss`, `_about.scss`, `_contact.scss`, `_team.scss`.

`_testimonials.scss`, `_about.scss`, `_contact.scss` and `_team.scss` are still empty —
those sections have not been designed yet. Leave them registered and unstyled.

Adding a new section means: create `elements/_<section>.scss` **and** add
`@use 'elements/<section>';` to `style.scss`.

### Using tokens inside a partial

`@use` is scoped per-file, so each partial pulls in what it needs at the top. Because
`next.config.mjs` adds `public/assets/scss` to Sass `includePaths`, the path is always the
same regardless of folder depth:

```scss
@use 'default' as *;

.banner {
  padding: $section-padding;

  @include media-md {
    padding: $section-padding-sm;
  }
}
```

`@use 'default' as *;` produces no duplicate CSS — Sass emits each module once.

### SCSS conventions

- Class names **kebab-case**, prefixed by section: `.banner`, `.banner-title`,
  `.banner-cta`. Keep nesting **≤ 3 levels**.
- Never hardcode a color, font size, or breakpoint that exists as a variable in
  `default/_variables.scss` — add the variable if it is missing.
- Use `@use` / `@forward`. **Do not use `@import`** (deprecated in Dart Sass).
- Mobile-first: base styles, then `min-width` mixins upward.

---

## 5. Components (`src/components`)

- One lowercase folder per feature: `header/`, `footer/`, `banner/`, `services/`,
  `portfolio/`, `testimonials/`, `cta/`. Add new folders in the same style.
- File and component name are **PascalCase and match**: `banner/Banner.js` exports
  `default function Banner()`.
- Sub-parts of a feature go in the same folder: `services/ServiceCard.js`.
- Import via the alias, never a relative walk:
  ```js
  import Header from '@/components/header/Header'; // ✅
  import Header from '../../components/header/Header'; // ❌
  ```
- **Server Components by default.** Add `'use client'` as the first line only when the file
  genuinely needs state, effects, refs, or browser events — and push it to the smallest
  possible leaf component rather than to a whole page.
- Each component owns exactly one partial in `elements/`, named after its folder.
- Images: `next/image` with sources under `/assets/images/...`. Links: `next/link`.
- Content that is pure data (card copy, tags, step text) lives in a lowercase file beside
  the component it feeds — `portfolio/projects.js`, `services/serviceItems.js`,
  `process/processSteps.js`. Data shared across features goes to `utils/` instead, which is
  why nav/footer links live in `utils/navigation.js`.

### `components/motion` — animation primitives

Four shared components carry every entrance effect. Use them instead of hand-rolling
`motion.div`s, and pass `index` so siblings stagger the way the design does.

| Component    | Effect                                                                  |
| ------------ | ----------------------------------------------------------------------- |
| `Reveal`     | Scroll reveal — 56px up + `scale(.94)` → settled, 130ms sibling stagger |
| `Rise`       | Mount entrance — fade up from 16px                                      |
| `Drift`      | 22s looping drift/scale/opacity on decorative background shapes         |
| `WordReveal` | Headline — per-word blur-to-sharp rise + per-character fade + caret     |

Every one of them short-circuits to plain, unanimated markup under
`useReducedMotion()`. **Any new motion must do the same** — the design source disables its
animations under `prefers-reduced-motion` and so do we.

Because Framer serialises its `initial` state into the SSR HTML, anything that starts
hidden must be reachable without JavaScript: `Reveal`/`Rise` tag themselves `data-reveal` /
`data-rise`, and the root layout ships a `<noscript>` rule that forces them visible. Keep
that contract if you add a primitive.

### `components/icons`

`Icons.js` holds every inline SVG as a named export — the deliberate exception to the
one-default-export-per-file rule, because these are glyphs rather than sections. Icons draw
with `currentColor` so the dark-card hover inversion recolours them for free.

## `src/hooks` and `src/utils`

- `hooks/` — one hook per file, `useSomething.js`, named export matching the file, always
  `'use client'`.
- `utils/` — pure, framework-free helpers, `camelCase.js`, named exports. No React imports,
  no DOM access at module scope.
- Import as `@/hooks/useScrollPosition`, `@/utils/formatDate`.

---

## 6. Code style

`.prettierrc` is authoritative — run `npm run format` before finishing any task.

- single quotes
- semicolons required
- 2-space indentation, no tabs
- 100 character print width
- trailing commas (`es5`), bracket spacing, always-parenthesized arrow params, LF endings

Beyond Prettier:

- Function declarations for components (`export default function Foo()`), not arrow consts.
- Named exports for hooks and utils; default export for components and pages.
- Import order: React/Next → third-party → `@/` internals → styles.
- Comments explain **why**, not what. No commented-out code left behind.

---

## 7. Building from a Claude Design source

Approved designs arrive as `design-reference/source/DibHub <Page>.dc.html`. They are not
real HTML — read them as a spec:

- `<sc-if value="{{ isDesktop }}">` marks a breakpoint variant. `hint-placeholder-val`
  gives the value the design previews with, and `renderVals()` at the bottom of the file
  gives the real rule (e.g. `isDesktop = w >= 900`). Translate to a media query or
  `useMediaQuery`, not to a JS-only branch where CSS will do.
- `<image-slot>` marks where a real image goes. The actual bytes are **not** in
  `assets/`/`uploads/` — they are base64 in `.image-slots.state.json`, keyed by the slot's
  `id`. Extract them to real files under `public/assets/images/` and reference them through
  `next/image`. Never inline a data URI into JSX.
- `{{ expr }}` bindings and the trailing `<script type="text/x-dc">` class describe
  behaviour. Read `componentDidMount` and `renderVals()` before assuming anything — some
  CSS keyframes in the file are vestigial and never applied, and the real effect is in JS.
- Boolean props in `data-props` (e.g. `showProcess`) carry a `default`. Honour it.
- Copy is the source of truth: transcribe headings, body text and tag labels **verbatim**,
  including punctuation and typographic apostrophes.
- Design hrefs point at sibling `.dc.html` files. Map them onto this project's route table
  (§3); do not invent new routes.

## 8. Working agreement

- Designs are delivered and approved **one page at a time**, starting with Home. Build only
  the page that was handed over; do not pre-build or guess at other pages' markup.
- Do not restructure folders, rename routes, or swap tooling without asking.
- Do not copy code, markup, or assets from any other project into this one.
- When a page is finished: routes still resolve, `npm run build` passes, and
  `npm run format:check` is clean.
- Check the page at 390px, 768px and 1440px, and confirm the document never scrolls
  horizontally at any of them.
