Apply fixes from a code review of this project (`D:\dibhub-redesign`). Read `CLAUDE.md` and
`HANDOFF.md` first — they're the authority on conventions, and everything below should follow
them (SCSS tokens, content-as-data, `'use client'` placement, etc.). Work through the items below
in order. After each group, run `npm run lint` and `npm run format:check` and fix anything they
flag before moving on. Run a full `npm run build` at the end.

Do not touch anything not listed here — no drive-by refactors, no "while I'm here" changes.

---

## 1. Real bugs — fix these

**a) `src/components/portfolio/projects.js` — key doesn't match its own route.**
The Team Recovery Tech project has `key: 'team-recovery-tech'`, but every other project's key
equals its route slug (`merge`, `all-treat`, `barbr`), and `src/app/(inner)/portfolio/trt/page.js`
passes `currentKey="trt"` into `ProjectMoreWork`. Because the keys don't match,
`ProjectMoreWork`'s exclusion filter (`project.key !== currentKey`) can never actually exclude
this project from its own "more work" list — it's only hidden today because the TRT page also
passes an explicit `projectKeys={['barbr', 'merge']}` override. Rename the key to `'trt'` so it
matches the route and every sibling. Check for any other place that references the old key string
(e.g. a `href` built from it) and update those too.

**b) `src/utils/navigation.js` — header and footer disagree on the Facebook URL.**
`SOCIAL_LINKS` (used by the header) has `https://www.facebook.com/people/DibHub/61578628965230/`.
`FOOTER_CONTACT_LINKS` has `https://www.facebook.com/dibhub`. Pick the correct one — ask me if
you're not sure which is right — and make both match.

**c) `src/components/header/MobileMenu.js` — dead file, delete it.**
It's never imported anywhere (`Header.js` has its own separate, correct inline mobile-menu
implementation that's actually used). Confirm with a repo-wide search that nothing references it,
then delete the file.

**d) `src/components/header/Header.js` — `heroHeight` goes stale on resize.**
It's only measured in a `useEffect` keyed on `[pathname]` (via `document.querySelector('[data-hero-host]')`), but the hero's height is fluid (`clamp(...vw...)` padding), so resizing the browser or rotating a device without a route change leaves `heroHeight` pointing at the old measurement — which can flip the transparent-over-hero header logic (`overHero`/`isClear`) to the wrong state. Re-measure on resize too — piggyback on the resize listener `useScrollMetrics` already sets up, or add a `ResizeObserver` on the hero element.

**e) `src/components/contact/ContactForm.js` — silent no-op on submit.**
`handleSubmit` currently only calls `event.preventDefault()`. Add a lightweight, obviously
temporary acknowledgment so a visitor gets *some* feedback when they submit — e.g. a small message
near the submit button like "Thanks — we're finishing this up, please also reach us directly at
[email]" and/or briefly disabling the button. Do not build real submit/loading/error state — the
real handler is being merged in separately later. Keep the existing `name` attributes
(`firstname`, `lastname`, `email`, `phone`, `message`, `consent`) exactly as they are.

## 2. Duplication — consolidate onto the existing shared version

**a) `src/components/about/AboutCta.js` duplicates `src/components/cta/Cta.js`.**
Every other page (Home, Team, all six service detail pages, Portfolio and its four project pages)
renders the shared `<Cta />`. Replace the About page's use of `AboutCta` with `<Cta />`, then
delete `AboutCta.js` and the now-unused `ABOUT_CTA` export from
`src/components/about/aboutContent.js`. Confirm nothing else imports either.

**b) `_mixins.scss` has a `pop-card` mixin that several partials don't use.**
`.is-active`/`.is-dimmed` hover-state rules are hand-duplicated instead of going through the
existing `pop-card` mixin in `public/assets/scss/default/_mixins.scss`, in:
`public/assets/scss/elements/_services.scss` (three rule blocks), `_service-detail-approach.scss`,
`_service-detail-capabilities.scss`, and in `_portfolio.scss` (`.dh-work-card` and
`.dh-project-story-row` — `.dh-project-outcome` in the same file already uses the mixin
correctly, use it as the reference). Extend `pop-card` to accept the parameters that currently
differ between call sites (transition duration, whether it dark-inverts on hover), then replace
each hand-rolled block with a call to the mixin. Verify visually/via computed styles that nothing
changes — this should be a pure refactor, same output.

**c) `WorkListing.js` and `ProjectMoreWork.js` both reimplement the same "merge project with its
listing override" line** (`PROJECTS.map(p => ({...p, ...p.listing}))`). Hoist this into one
exported helper (e.g. from `src/components/portfolio/projects.js`) and have both files use it.

## 3. Hardcoded values that already have a token

- `public/assets/scss/elements/_header.scss`: two places hardcode `font-size: 17px` where
  `$fs-body` (already `17px`) exists in `default/_variables.scss` — use the variable. Also
  replace the one-off `rgba(255, 255, 255, 0.3)` border with the nearest existing on-dark opacity
  token (`0.1`/`0.14`/`0.2` already exist nearby — pick whichever matches the intended visual, ask
  if unclear).
- `public/assets/scss/elements/_services.scss`: `.dh-benefit-title` hardcodes `font-size: 17px`
  — its visual siblings (`.dh-service-title`, `.dh-offering-title`) use the responsive
  `$fs-h3-service` clamp for the same card-heading role. Switch `.dh-benefit-title` to
  `$fs-h3-service` so it scales down on mobile consistently with the others.

## 4. Fragile React keys

`src/components/services/ServiceApproach.js` and `src/components/about/AboutMission.js` both key
a list of paragraphs with `key={paragraph.slice(0, 40)}`. Replace with a stable key — either the
array index, or (preferred, matches the rest of the codebase's pattern) add a `key` field to each
paragraph entry in the underlying data file if it's structured data already, otherwise just use
the index.

## 5. Tooling hygiene

`eslint.config.mjs`'s `ignores` array and `.prettierignore` both exclude `design-reference/` but
not `design-export/`. Right now `npm run lint` reports 2 real errors and `npm run format:check`
reports 18 formatting issues against vendored design-tool code in `design-export/` that isn't part
of the app. Add `design-export/**` to both ignore lists (the `ignores` array in
`eslint.config.mjs`, and a new line in `.prettierignore`) so lint/format only run against actual
app code. Re-run `npm run lint` and `npm run format:check` after and confirm both come back clean.

## 6. `next/image` sizing

`src/components/portfolio/WorkCard.js` hardcodes
`sizes="(min-width: 900px) 45vw, 100vw"`, which is accurate for the two-column project-detail
grids (`WorkListing`, `ProjectMoreWork`) but wrong for Home's featured-work grid (`Portfolio.js`),
which renders the same cards narrower (3–4 per row via `auto-fit, minmax(380px,1fr)`) — so Home is
currently over-fetching image resolution. Give `WorkCard` a `sizes` prop (following the same
pattern `ProjectShowcase` already uses via `content.sizes`) and pass the correct hint from each
caller instead of hardcoding one value inside `WorkCard`.

## 7. Delete unreferenced image assets (~25.9MB)

Every file below was checked with a full-repo grep against `src/` and has zero references. Before
deleting each one, re-confirm with a fresh grep for the exact filename (no extension assumptions)
— if anything turns up, stop and ask instead of deleting.

- `public/assets/images/portfolio/01.png`, `01.svg`, and `01.webp` through `25.webp` (27 files,
  ~5.4MB) — looks like a raw bulk export that was never wired to any component.
- `public/assets/images/portfolio/bak/` — the whole folder (5 files, ~1.6MB, one named
  `14.bak.webp`).
- `public/assets/images/portfolio/BarbrPortfolio.png`, `BarbrPortfolio-with-boders.png`, and
  `MergePortfolio.png` (~1.4MB) — superseded by `case-barbr-hero.webp`/`case-merge-hero.webp`.
- `public/assets/images/case-all-treat-hero.webp` (~41KB) — `allTreatContent.js` uses
  `AllTreatPortfolio.png` instead; confirm that's intentional before deleting (ask me if unsure
  which is the real hero image).
- `public/assets/images/dibhub-logo-dark.png` and `dibhub-mark.svg` — unreferenced; confirm they
  aren't meant to be used as a favicon/dark-mode logo before deleting (ask me if unsure).
- `public/assets/images/team/000.png` through `009.png` (~16.6MB) and `team/01.webp` through
  `06.webp` (~0.8MB) — the team section actually uses the small named files (`adnan.webp`,
  `afaq.webp`, etc.); these look like unoptimized originals left behind after cropping/renaming.

## 8. Documentation — bring these back in sync with the actual code

- `HANDOFF.md`'s "Build status" table marks `/team`, `/portfolio`, and all four portfolio project
  pages as placeholder/"awaiting design." They're all fully built. Update the table to reflect
  reality, and update "Next up" accordingly.
- `CLAUDE.md` §4 and the top comment in `public/assets/scss/style.scss` both still describe
  `_about.scss`, `_contact.scss`, and `_team.scss` as empty, unstyled placeholders. All three are
  now fully built. Update both to drop those three from the "still empty" list — only
  `_testimonials.scss` is actually still a stub.

---

## Do NOT change without asking me first

These need a product/design decision, not just a code fix — flag them back to me instead of
guessing:

- **The header has no working navigation for a visitor without JavaScript, and visibly flashes
  for everyone else on load.** `Header.js` picks between two completely different JSX trees
  (full desktop nav vs. a bare hamburger button) based on `useMediaQuery`, which is `false` until
  the client mounts — so JS-disabled visitors get an inert hamburger and no way to reach any nav
  link, and everyone else sees the hamburger swap to the real nav a moment after load.
  `default/_mixins.scss` already has `nav-desktop`/`nav-mobile` mixins for a CSS-only version of
  this split, but they're unused anywhere. Fixing this properly means restructuring how the header
  renders (render both trees, let CSS pick) — propose an approach to me before implementing it,
  since it touches the header on every single page.
- The mobile "Contact us" button (`.dh-mobile-cta` in `_header.scss`) is a plain solid pill, not
  the gradient/badge treatment (`.dh-button`) used everywhere else on the site. This might be
  intentional or might be a leftover from before the button system was unified — I want to look at
  it before it changes.
- Breakpoint token sprawl in `default/_variables.scss` — six named tokens
  (`$bp-about-stat-2`, `$bp-contact-fields`, `$bp-team-stats-2`, `$bp-benefits-2`,
  `$bp-project-outcomes-2`, `$bp-work-listing-2`, `$bp-team-cards-3`) collapse to three real
  values (620px / 640px / 760px). Consolidating is a good idea but touches a lot of files — don't
  start it without confirming with me first.
- `ServiceDetailBanner`, `ServicesBanner`, and `Banner.js` hand-duplicate the same hero shell
  (~15 lines: dots, `Drift` glow, spotlight, rule, eyebrow, `WordReveal` heading, lead paragraph).
  A shared `PageHero` primitive would remove the duplication, but it's a bigger structural change
  across three files that feed every page on the site — propose the extraction to me before
  building it.

---

## Before reporting done, double-check your own work:

- Re-read the diff for every item in sections 1–8 against what was actually asked — no extra
  changes, nothing skipped, nothing from "Do NOT change without asking me first" touched.
- `src/components/portfolio/projects.js`: confirm the key is now `'trt'` everywhere, and grep the
  whole `src/` tree for the old string `'team-recovery-tech'` to make sure no other file (a href,
  a data lookup, a test) still references it.
- `src/utils/navigation.js`: confirm `SOCIAL_LINKS` and `FOOTER_CONTACT_LINKS` now point at the
  *same* Facebook URL.
- Grep the whole repo for `MobileMenu` before and after deleting the file — confirm zero
  references remain and the app still builds.
- Header: manually trace that `heroHeight` now updates on a plain window resize (no route change),
  not just on `pathname` change.
- `ContactForm.js`: confirm the six `name` attributes (`firstname`, `lastname`, `email`, `phone`,
  `message`, `consent`) are byte-for-byte unchanged — this is the one thing that must not drift
  before the backend merge.
- `AboutCta.js` removal: grep for `AboutCta` and `ABOUT_CTA` to confirm both are fully gone and
  nothing still imports them; confirm the About page renders `<Cta />` and looks the same.
- `pop-card` mixin refactor: for every call site you converted, confirm the *computed* CSS
  (transition duration, transform, colors) is unchanged from before the refactor — this must be a
  pure refactor, not a visual change. If any site genuinely needs different values, stop and tell
  me rather than silently changing the output.
- Hardcoded value fixes: confirm the rendered value is identical to what was there before (e.g.
  `$fs-body` actually equals `17px` — don't swap in a token that changes the number).
- React key fixes: confirm no duplicate-key console warnings in dev for the affected lists.
- `design-export/**` ignore fix: re-run `npm run lint` and `npm run format:check` and confirm they
  now report zero problems against `design-export/`, and still report correctly against real
  `src/`/`public/` issues (i.e. you didn't accidentally over-broaden the ignore and hide real
  problems).
- `WorkCard` `sizes` prop: confirm all current callers (`Portfolio.js`, `WorkListing.js`,
  `ProjectMoreWork.js`) were updated, not just one — a partially-migrated prop is worse than the
  original hardcoded value.
- Docs: re-read the updated sections of `HANDOFF.md` and `CLAUDE.md` against the actual current
  file tree (not from memory) to confirm they're now accurate, not just "less wrong."
- Final pass: `npm run lint`, `npm run format:check`, and `npm run build` all clean, all pages
  still resolve, and nothing outside the files named in sections 1–8 was modified.
- For section 7 (deleted images): confirm `npm run build` still succeeds with no missing-asset
  errors, and do a final grep across the whole repo (not just `src/`) for each deleted filename to
  be certain nothing outside `src/` — a CSS `background-image`, a JSON config, a README — pointed
  at one of them.

When all of that checks out, give me a summary of exactly what changed per item above, plus
anything you found during double-checking that didn't match what was expected.
