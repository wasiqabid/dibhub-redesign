// Inner pages have no dark hero to sit under the fixed header, so the route
// group adds the header's clearance for all of them in one place. Home opts out
// by living outside the group — its hero supplies its own top padding.
export default function InnerLayout({ children }) {
  return <div className="dh-inner-shell">{children}</div>;
}
