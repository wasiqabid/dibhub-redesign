// Every icon in the approved design, transcribed 1:1 from the source SVG paths.
// They inherit `currentColor` so the pop-card hover inversion recolours them for
// free. Named exports are the deliberate exception to the one-default-export
// rule — these are glyphs, not sections.

function Svg({ size = 23, strokeWidth = 1.7, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

// --- Services / mega-menu ----------------------------------------------------

export function IconAiMl(props) {
  return (
    <Svg size={22} {...props}>
      <rect x="8.4" y="8.4" width="7.2" height="7.2" rx="1.4" />
      <path d="M12 3.4v5M12 15.6v5M3.4 12h5M15.6 12h5" />
    </Svg>
  );
}

export function IconClientSolutions(props) {
  return (
    <Svg size={22} {...props}>
      <path d="M4.6 20.4V6.2l6.2-2.6v16.8" />
      <path d="M10.8 9.6h5.4v10.8" />
      <path d="M19.4 20.4H3.6" />
      <path d="M7.4 9.8h.8M7.4 13.4h.8M13.4 13.4h.8M13.4 16.6h.8" />
    </Svg>
  );
}

export function IconWebDevelopment(props) {
  return (
    <Svg size={22} {...props}>
      <path d="M12 3.2 20.4 12 12 20.8 3.6 12 12 3.2Z" />
      <path d="M7.6 12h8.8M12 7.6v8.8" />
    </Svg>
  );
}

export function IconMobile(props) {
  return (
    <Svg size={22} {...props}>
      <rect x="7" y="2.8" width="10" height="18.4" rx="2.2" />
      <path d="M11 18.4h2" />
    </Svg>
  );
}

export function IconDevOps(props) {
  return (
    <Svg size={22} {...props}>
      <path d="M12 3.2 19.4 6v6.2c0 4.2-3.1 7.2-7.4 8.6-4.3-1.4-7.4-4.4-7.4-8.6V6L12 3.2Z" />
      <path d="m9 12.2 2.2 2.2 3.8-4" />
    </Svg>
  );
}

export function IconQaAutomation(props) {
  return (
    <Svg size={22} {...props}>
      <path d="M3.8 20.2h16.4" />
      <path d="M6.4 20.2V9.6M12 20.2V9.6M17.6 20.2V9.6" />
      <path d="M3.6 9.6 12 4.2l8.4 5.4H3.6Z" />
    </Svg>
  );
}

// --- Process steps -----------------------------------------------------------

export function IconDiscover(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.2 8.8-2 4.4-4.4 2 2-4.4 4.4-2Z" />
    </Svg>
  );
}

export function IconDesign(props) {
  return (
    <Svg {...props}>
      <path d="M4 20.2 8.2 19l10-10a2.4 2.4 0 0 0-3.4-3.4l-10 10L4 20.2Z" />
      <path d="m13.6 6.6 3.8 3.8" />
    </Svg>
  );
}

export function IconBuild(props) {
  return (
    <Svg {...props}>
      <path d="m8.4 8.4-4 3.6 4 3.6" />
      <path d="m15.6 8.4 4 3.6-4 3.6" />
      <path d="m13.4 5.4-2.8 13.2" />
    </Svg>
  );
}

export function IconOperate(props) {
  return (
    <Svg {...props}>
      <path d="M3 12.4h4l2.4-5.6 4.2 10.4 2.2-4.8H21" />
    </Svg>
  );
}

// --- Service cards -----------------------------------------------------------

export function IconBolt(props) {
  return (
    <Svg {...props}>
      <path d="M13 2 4.5 13.5H10l-1 8.5L19.5 10H14l-1-8Z" />
    </Svg>
  );
}

export function IconDataDiscovery(props) {
  return (
    <Svg {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.4 15.4 21 21" />
      <path d="M4 10.5h13M10.5 4c3 3.6 3 9.4 0 13" />
    </Svg>
  );
}

export function IconLayers(props) {
  return (
    <Svg {...props}>
      <path d="m12 2.8 8.5 4.6L12 12 3.5 7.4 12 2.8Z" />
      <path d="m3.5 12 8.5 4.6 8.5-4.6" />
      <path d="m3.5 16.6 8.5 4.6 8.5-4.6" />
    </Svg>
  );
}

export function IconRisk(props) {
  return (
    <Svg {...props}>
      <path d="M12 2.6 19.6 6v5.6c0 4.7-3.2 8-7.6 9.8-4.4-1.8-7.6-5.1-7.6-9.8V6L12 2.6Z" />
      <path d="M12 8.4v4" />
      <path d="M12 15.6h.01" />
    </Svg>
  );
}

export function IconPrivacy(props) {
  return (
    <Svg {...props}>
      <rect x="4" y="10" width="16" height="10.6" rx="2" />
      <path d="M7.8 10V7.2a4.2 4.2 0 0 1 8.4 0V10" />
      <path d="M12 14.2v2.4" />
    </Svg>
  );
}

export function IconThirdParty(props) {
  return (
    <Svg {...props}>
      <circle cx="5.4" cy="6.2" r="2.6" />
      <circle cx="18.6" cy="6.2" r="2.6" />
      <circle cx="12" cy="18.2" r="2.6" />
      <path d="M7.4 7.7 10.6 16M16.6 7.7 13.4 16M8 6.2h8" />
    </Svg>
  );
}

// --- Key Benefits (Services page) -------------------------------------------

export function IconAccelerateGrowth(props) {
  return (
    <Svg {...props}>
      <path d="M3.6 17.6 9 11.4l3.6 3 6.8-8" />
      <path d="M15.2 6.4h4.2v4.2" />
    </Svg>
  );
}

export function IconBoostEfficiency(props) {
  return (
    <Svg {...props}>
      <path d="M13 2.6 4.8 13.6H10l-1 7.8L19.2 10H13.8l-.8-7.4Z" />
    </Svg>
  );
}

export function IconCollaboration(props) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8.4" r="3.2" />
      <path d="M3.4 20.2c0-3.1 2.5-5.6 5.6-5.6s5.6 2.5 5.6 5.6" />
      <path d="M16.2 5.6a3.2 3.2 0 0 1 0 6M17.6 14.9c1.9.7 3.2 2.5 3.2 4.7" />
    </Svg>
  );
}

export function IconReduceCosts(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M15 9.2c-.7-.9-1.8-1.4-3-1.4-1.7 0-2.8.8-2.8 2s1.2 1.8 2.8 2.1c1.7.4 2.9 1 2.9 2.2s-1.2 2.1-2.9 2.1c-1.3 0-2.4-.5-3-1.4" />
      <path d="M12 6v12" />
    </Svg>
  );
}

export function IconNetworking(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="5.4" r="2.4" />
      <circle cx="5.4" cy="17.6" r="2.4" />
      <circle cx="18.6" cy="17.6" r="2.4" />
      <path d="M10.4 7.2 6.8 15.4M13.6 7.2l3.6 8.2M7.8 17.6h8.4" />
    </Svg>
  );
}

export function IconGlobalTranslations(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.6 12h16.8" />
      <path d="M12 3.4c2.6 3.4 2.6 13.8 0 17.2M12 3.4c-2.6 3.4-2.6 13.8 0 17.2" />
    </Svg>
  );
}

export function IconEnhanceSecurity(props) {
  return (
    <Svg {...props}>
      <path d="M12 2.8 19.4 6v6.2c0 4.4-3.1 7.6-7.4 9.2-4.3-1.6-7.4-4.8-7.4-9.2V6L12 2.8Z" />
      <path d="m9 12.2 2.2 2.2 3.8-4" />
    </Svg>
  );
}

export function IconInHouseTechs(props) {
  return (
    <Svg {...props}>
      <path d="M3.8 10.4 12 4l8.2 6.4" />
      <path d="M5.8 10.2v9.6h12.4v-9.6" />
      <path d="m10 16.4-1.6-1.6L10 13.2M14 13.2l1.6 1.6L14 16.4" />
    </Svg>
  );
}

// --- AI & ML capabilities ----------------------------------------------------

export function IconNlp(props) {
  return (
    <Svg {...props}>
      <path d="M20.4 12.6c0 4-3.8 7.2-8.4 7.2-1 0-2-.15-2.9-.42L4.2 21l1.5-3.9C4.3 15.9 3.6 14.3 3.6 12.6c0-4 3.8-7.2 8.4-7.2s8.4 3.2 8.4 7.2Z" />
      <path d="M8.6 11.4h6.8M8.6 14.4h4.4" />
    </Svg>
  );
}

export function IconComputerVision(props) {
  return (
    <Svg {...props}>
      <path d="M2.6 12S6 5.8 12 5.8 21.4 12 21.4 12 18 18.2 12 18.2 2.6 12 2.6 12Z" />
      <circle cx="12" cy="12" r="3.2" />
    </Svg>
  );
}

export function IconPredictiveAnalytics(props) {
  return (
    <Svg {...props}>
      <path d="M3.6 19.4h16.8" />
      <path d="m4.8 15.4 4.4-4.8 3.4 2.8 6.6-7" />
      <path d="M15.6 6.4h4v4" />
    </Svg>
  );
}

export function IconRecommendationEngines(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="2.6" />
      <circle cx="5" cy="6.4" r="2.2" />
      <circle cx="19" cy="6.4" r="2.2" />
      <circle cx="5" cy="17.6" r="2.2" />
      <circle cx="19" cy="17.6" r="2.2" />
      <path d="m6.9 7.6 3.2 2.8M17.1 7.6l-3.2 2.8M6.9 16.4l3.2-2.8M17.1 16.4l-3.2-2.8" />
    </Svg>
  );
}

// --- Web development capabilities --------------------------------------------

export function IconMarketingSite(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="4.4" width="18" height="15.2" rx="2.2" />
      <path d="M3 9h18" />
      <path d="M6.4 6.7h.9M9.1 6.7h.9" />
    </Svg>
  );
}

export function IconSaasPlatform(props) {
  return (
    <Svg {...props}>
      <rect x="3.2" y="3.2" width="7.4" height="7.4" rx="1.6" />
      <rect x="13.4" y="3.2" width="7.4" height="7.4" rx="1.6" />
      <rect x="3.2" y="13.4" width="7.4" height="7.4" rx="1.6" />
      <rect x="13.4" y="13.4" width="7.4" height="7.4" rx="1.6" />
    </Svg>
  );
}

export function IconApiBackend(props) {
  return (
    <Svg {...props}>
      <ellipse cx="12" cy="6.4" rx="7.4" ry="2.8" />
      <path d="M4.6 6.4v11.2c0 1.55 3.3 2.8 7.4 2.8s7.4-1.25 7.4-2.8V6.4" />
      <path d="M4.6 12c0 1.55 3.3 2.8 7.4 2.8s7.4-1.25 7.4-2.8" />
    </Svg>
  );
}

export function IconInternalDashboard(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="4.4" width="18" height="15.2" rx="2.2" />
      <path d="M7.4 15.6V11M12 15.6V8.4M16.6 15.6v-3" />
    </Svg>
  );
}

// --- Mobile application capabilities -----------------------------------------
// "MVP Builds" reuses IconBoostEfficiency — the reference draws both with the
// same bolt path, so there is no second glyph to add.

export function IconCrossPlatform(props) {
  return (
    <Svg {...props}>
      <rect x="2.8" y="3.4" width="9" height="17.2" rx="2" />
      <rect x="13.8" y="7.4" width="7.4" height="13.2" rx="1.8" />
      <path d="M6.4 18h1.8M16.6 18h1.8" />
    </Svg>
  );
}

export function IconApiIntegration(props) {
  return (
    <Svg {...props}>
      <path d="M9.6 4.6 5 12l4.6 7.4M14.4 4.6 19 12l-4.6 7.4" />
      <path d="M13 8.4l-2 7.2" />
    </Svg>
  );
}

export function IconStoreRelease(props) {
  return (
    <Svg {...props}>
      <path d="M12 3.4v11.4" />
      <path d="m7.6 10.6 4.4 4.4 4.4-4.4" />
      <path d="M4.6 18.4h14.8" />
    </Svg>
  );
}

// --- DevOps capabilities -----------------------------------------------------

export function IconCicdPipeline(props) {
  return (
    <Svg {...props}>
      <path d="M4.6 8.4a7.4 7.4 0 0 1 12.6-2.6" />
      <path d="M17.2 3.2v2.8h-2.8" />
      <path d="M19.4 15.6a7.4 7.4 0 0 1-12.6 2.6" />
      <path d="M6.8 20.8V18h2.8" />
    </Svg>
  );
}

export function IconCloudArchitecture(props) {
  return (
    <Svg {...props}>
      <path d="M6.4 17.4a3.8 3.8 0 0 1-.5-7.56A5.2 5.2 0 0 1 16.3 8.9a3.6 3.6 0 0 1 1.3 7.02" />
      <path d="M8 17.4h9.6" />
      <path d="M12 13.6v6.4" />
      <path d="m9.6 18 2.4 2.4L14.4 18" />
    </Svg>
  );
}

export function IconContainers(props) {
  return (
    <Svg {...props}>
      <rect x="3.2" y="3.4" width="7" height="7" rx="1.4" />
      <rect x="13.8" y="3.4" width="7" height="7" rx="1.4" />
      <rect x="3.2" y="13.6" width="7" height="7" rx="1.4" />
      <rect x="13.8" y="13.6" width="7" height="7" rx="1.4" />
      <path d="M10.2 6.9h3.6M6.7 10.4v3.2" />
    </Svg>
  );
}

export function IconMonitoring(props) {
  return (
    <Svg {...props}>
      <path d="M3 13.2h3.6l2-4.4 3 8.8 2.2-6 1.6 3.2H21" />
      <path d="M4.4 19.6h15.2" />
    </Svg>
  );
}

// --- QA automation capabilities ----------------------------------------------
// IconApiTesting is close to IconApiIntegration but not identical — the QA
// reference draws the inner slash differently, so it gets its own glyph.

export function IconUnitTesting(props) {
  return (
    <Svg {...props}>
      <path d="M5.2 4.6h13.6v14.8H5.2z" />
      <path d="m8.2 11.4 2.2 2.2 4.8-4.8" />
    </Svg>
  );
}

export function IconIntegrationTesting(props) {
  return (
    <Svg {...props}>
      <circle cx="7.6" cy="7.6" r="3.4" />
      <circle cx="16.4" cy="16.4" r="3.4" />
      <path d="M10.4 8.6a5.8 5.8 0 0 1 5 5" />
    </Svg>
  );
}

export function IconApiTesting(props) {
  return (
    <Svg {...props}>
      <path d="M9.6 4.6 5 12l4.6 7.4M14.4 4.6 19 12l-4.6 7.4" />
      <path d="m13.2 8.6-2.4 6.8" />
    </Svg>
  );
}

export function IconEndToEndTesting(props) {
  return (
    <Svg {...props}>
      <circle cx="10.6" cy="10.6" r="6" />
      <path d="m15.2 15.2 5 5" />
      <path d="m8.2 10.6 1.8 1.8 3.2-3.4" />
    </Svg>
  );
}

// --- Client driven solutions capabilities ------------------------------------
// "CRM & Order Management" reuses IconClientSolutions — the reference draws it
// with the same path as the mega-menu entry, at size 23 rather than 22.

export function IconDigitalOnboarding(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="8.2" r="3.6" />
      <path d="M5 20.4c0-3.6 3.1-6.4 7-6.4s7 2.8 7 6.4" />
    </Svg>
  );
}

export function IconWorkflowAutomation(props) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="6.4" r="2.4" />
      <circle cx="18" cy="17.6" r="2.4" />
      <path d="M6 8.8v5.4a3.4 3.4 0 0 0 3.4 3.4h6.2" />
      <path d="M8.4 6.4h6.2a3.4 3.4 0 0 1 3.4 3.4v5.4" />
    </Svg>
  );
}

export function IconPortalsPayments(props) {
  return (
    <Svg {...props}>
      <rect x="2.8" y="5.6" width="18.4" height="12.8" rx="2.2" />
      <path d="M2.8 10h18.4" />
      <path d="M6.4 14.4h3.6" />
    </Svg>
  );
}

// --- Chrome ------------------------------------------------------------------

export function IconChevronDown(props) {
  return (
    <Svg size={11} strokeWidth={2.4} {...props}>
      <path d="m5 9 7 7 7-7" />
    </Svg>
  );
}

export function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.6 8.75 22 10.9 22 14.1V21h-4v-6.1c0-1.5-.54-2.5-1.9-2.5-1.14 0-1.8.75-2.1 1.48-.1.26-.13.62-.13.98V21h-4V9Z" />
    </svg>
  );
}

export function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.04 1.47-4.04 4.17V9.9H7.5V13h2.53v8h3.47Z" />
    </svg>
  );
}

export function IconInstagram() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// The "→" used on links and buttons is a rule plus a rotated corner, not a glyph.
export function ArrowGlyph({ size = 'sm' }) {
  return (
    <span className={`dh-arrow dh-arrow--${size}`} aria-hidden="true">
      <span className="dh-arrow-head" />
    </span>
  );
}
