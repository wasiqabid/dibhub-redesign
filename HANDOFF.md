# HANDOFF — DibHub Website Redesign

Session state as of the end of the Contact page build. `CLAUDE.md` covers the project's
conventions and is loaded automatically; **this file covers what has happened and what is
left**, which `CLAUDE.md` does not.

---

## START HERE

1. Read `CLAUDE.md` — 16 numbered sections, it is the authority on conventions and wins over
   habits from any other project.
2. Run `git status` and `git log --oneline -5` to see what is uncommitted.
3. The dev server is almost certainly stale or stopped. Stop it, `rm -rf .next`, restart.
4. Read the **Gotchas** section below before trusting anything the browser preview reports.
5. Do not start a new page until the user hands over its design.

---

## Project

Next.js 15 marketing site rebuild at `D:\dibhub-redesign`, branch **`feature/About-Contact`**.
Windows; PowerShell and Git Bash both available.

**Stack:** Next 15 App Router · React 18 · plain JavaScript (no TypeScript, ever) · SCSS only ·
`framer-motion` v11 (the only runtime dependency) · Cabin via `next/font/google` ·
`@/*` → `./src/*`.

**Linting:** ESLint flat config in `eslint.config.mjs`, pinned to `eslint-config-next@^15`. The
`lint` script is `eslint .`, not `next lint` (deprecated in 15, removed in 16).

---

## Build status

| Built                                                                                                                                              | Placeholder (bare `<h1>`, awaiting design) |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `/`, `/services`, all six `/services/*`, `/about`, `/contact`, `/team`, `/portfolio`, `/portfolio/{merge,barbr,all-treat,trt}` — every route in §3 | _none_                                     |

**Next up:** no page is outstanding. The remaining work is the open items below — the contact
form has no backend, `_testimonials.scss` is the one unstyled partial (that section has no
approved design yet), and the header still has no no-JS navigation.

### Uncommitted right now

Only the Contact page work — `src/components/contact/` (new), `_contact.scss`,
`_variables.scss`, `Icons.js`, `(inner)/contact/page.js`, plus this file. Everything before it
is committed through `539b18a About screen done`.

---

## Architecture worth knowing

- **Design references live at `design-reference/source/*.dc.html`.** The user's prompts often
  say `design-export/` — that folder does not exist; use `design-reference/source/`, same
  filenames, and just proceed. These are Claude Design markup, not real HTML: `<sc-if>` marks a
  breakpoint variant, `{{ }}` are bindings, and the true breakpoints are in `renderVals()` at
  the bottom of each file. See `CLAUDE.md` §7.
- **The references were re-exported mid-project.** Always re-read a reference before building
  from it rather than trusting an earlier reading.
- **Shared section components.** `banner/ServiceDetailBanner` + `services/ServiceCapabilities` +
  `services/ServiceApproach` drive all six service detail pages, fed by one `*Content.js` per
  page. `cta/Cta` is the shared CTA. `.dh-page-hero*` in `_banner.scss` is the shared dark
  inner-page hero shell, reused by About and Contact too.
- **Motion primitives** live in `src/components/motion/`: `Reveal`, `Rise`, `Drift`,
  `WordReveal`. Every one short-circuits under `useReducedMotion()`. Never inline
  `framer-motion` inside a section component.
- **Hooks:** `useHoverGroup` (card pop/dim groups), `usePointerSpotlight`, `useScrollMetrics`,
  `useMediaQuery`.
- **Icons:** every inline SVG is a named export in `components/icons/Icons.js`. `ButtonBadge` is
  the shared badge used inside every gradient button.
- **Content as data:** repeated lists are `UPPER_SNAKE_CASE` arrays in a sibling file. Icons are
  stored as **rendered elements** (`icon: <IconNlp />`) — passing a component _function_ from a
  Server Component page into a client component fails the build.

---

## Gotchas that have already cost real time

1. **The dev server goes stale constantly.** `ENOENT` on a `.next` chunk, or
   `__webpack_modules__[moduleId] is not a function`, means a stale cache — not broken code.
   Fix: stop the server, `rm -rf .next`, restart. **Always restart after `npm run build`**,
   because the build and the dev server share `.next`.

2. **The preview pane never composites** (`document.visibilityState === 'hidden'`). Frozen as a
   result: `requestAnimationFrame`, `IntersectionObserver`, **CSS transitions**, and
   media-query re-evaluation on resize. Practical consequences:
   - Computed colours read as stale mid-transition values. **Inject
     `transition: none !important` before measuring**, or you will chase phantom bugs.
   - Screenshots are unavailable. Verify via DOM, computed styles and the CSSOM instead.
   - Scroll reveals, hover states and Framer animations do not run at all.
   - After `resize_window`, **reload** before reading media-query-driven layout.
   - React's `onMouseEnter` is not triggered by a synthetic `mouseover`; dispatch `focusin` /
     `focusout` for focus behaviour, and `mouseover` with `relatedTarget: null` for hover.
   - Say plainly when something could not be observed rather than implying it was checked.

3. **Windows is case-insensitive.** A data file must never match its component's name in any
   casing — `aiMlCapabilities.js` silently overwrote `AiMlCapabilities.js` and broke the build.
   Now documented in `CLAUDE.md` §5.

4. **IDE CSS errors inside `.dc.html` files** are VS Code's CSS parser choking on `{{ }}` inside
   `style` attributes. Harmless — those files are read-only and excluded from Prettier/ESLint.

---

## Decisions already made — do not undo

- **`/services` has no nav dropdown.** `showServicesMenu = pathname !== '/services'`. The
  chevron there is `visibility: hidden` rather than removed, so the nav links do not shift.
- **Dropdown, mobile menu and footer service order** mirrors the `/services` page listing, with
  Client Driven Solutions last.
- **Header state:** `heroHeight` starts `null`; until it is measured the header asserts no class
  and CSS decides via `body:has([data-hero-host])`. `navHovered` resets on pathname change so
  the bar does not stay stuck solid after a client-side navigation.
- **Typing animation:** a single `revealed` counter, computed from elapsed time, drives both the
  caret position and character visibility. Characters switch on **instantly** — a fade longer
  than the 85ms cadence made the next character bleed through ahead of the caret. The per-word
  blur/lift stays on its own Framer delay.
- **Contact is the only page whose `h1` does not type** — its headline rises in whole.
- **Hero SSR:** the headline ships as plain readable text tagged `data-type-pending`, hidden by
  CSS until mount, so there is no flash of finished text and no-JS readers still get it.
- **One button treatment site-wide:** gradient pill plus a 34px badge. Confirmed against the
  re-exported references (21 badge buttons, 0 arrow-rule). The bare `ArrowGlyph` is now only for
  inline text links such as "View project" and "Service Details".
- **`priority` is on no image** — the LCP element is always the hero heading. The header logo
  uses `loading="eager"` instead.

---

## Open items to raise with the user

- **`metadataBase` falls back to `http://localhost:3000`.** `NEXT_PUBLIC_SITE_URL` must be set
  before deploying or every canonical and openGraph URL points at localhost. `.env.example`
  documents the key.
- **openGraph images are the logo placeholder** (`/assets/images/dibhub-logo.png`). A real
  1200×630 image per page should replace it.
- **Breakpoint token sprawl:** 620px now exists twice (`$bp-about-stat-2`,
  `$bp-contact-fields`), with 640px and 660px nearby. Worth consolidating to neutral names.
- **`$color-muted-light: #75757d`** replaces three greys in the Contact design that failed WCAG
  AA on white (2.79:1, 3.29:1, 4.25:1). Awaiting the user's confirmation.
- **The Contact form has no backend.** `contact/ContactForm.js` contains only
  `e.preventDefault()` and a TODO. Legacy submit logic will be merged in separately. Field
  `name` attributes, agreed for that merge: `firstname`, `lastname`, `email`, `phone`,
  `message`, `consent`. The design's "Message sent." success state was deliberately **not**
  built, since faking request lifecycle UI was explicitly out of scope.
- **The mobile menu's "Contact us" button** became a gradient pill in the re-export but is still
  solid `#1f1f25` in code.
- **The already-built pages have not been re-diffed** against the re-exported references. Worth
  an audit — the re-export is known to have changed at least the CTA buttons and that mobile
  menu button.

---

## Working agreement

One page at a time, built from its own reference only — never by copying another page. Copy is
transcribed **verbatim**, including punctuation (some apostrophes are curly `U+2019`, some
straight `'` — check rather than assume). Reuse existing tokens; a genuinely new token goes in
`default/_variables.scss`, never inline, and gets flagged for confirmation.

Before reporting a page done:

1. Diff the rendered copy against the reference programmatically, section by section.
2. Compare computed styles against the reference's declared styles — do not eyeball it.
3. `npm run lint`, `npm run format:check`, `npm run build` — all clean, 19/19 pages.
4. Load the page at 390px and 1440px and confirm no horizontal scroll.
5. **Re-check adjacent features that share code.** Regressions in the header, nav and shared CTA
   have caused more rework in this project than anything else.

---

## Suggested opening prompt for a new chat

> Read `HANDOFF.md` in the project root, then `CLAUDE.md`. That is where we left off. Confirm
> what is built and what is next, check `git status`, and start a clean dev server — then wait
> for my next task.
