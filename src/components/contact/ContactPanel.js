import { CONTACT_PANEL } from '@/components/contact/contactContent';

// Static contact details. The hover-group props land on the card itself rather
// than on the sticky column that wraps it, so the blur matches the card edges.
export default function ContactPanel({ className = '', ...hoverProps }) {
  return (
    <aside className="dh-contact-aside" aria-labelledby="contact-panel-title">
      <div className={`dh-contact-panel ${className}`} {...hoverProps}>
        <div className="dh-contact-panel-head">
          <h2 id="contact-panel-title" className="dh-contact-panel-eyebrow">
            {CONTACT_PANEL.eyebrow}
          </h2>
        </div>

        <div className="dh-contact-rows">
          {CONTACT_PANEL.rows.map((row) => (
            <div key={row.key} className="dh-contact-row">
              <span className="dh-contact-row-icon">{row.icon}</span>
              <div className="dh-contact-row-body">
                <span className="dh-contact-row-label">{row.label}</span>
                {row.href ? (
                  <a href={row.href} className="dh-contact-row-value">
                    {row.value}
                  </a>
                ) : (
                  <span className="dh-contact-row-value">{row.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="dh-contact-notice">
          <span className="dh-contact-notice-mark" aria-hidden="true">
            !
          </span>
          <span>{CONTACT_PANEL.notice}</span>
        </p>
      </div>
    </aside>
  );
}
