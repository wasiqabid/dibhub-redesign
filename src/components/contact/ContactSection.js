'use client';

import { useHoverGroup } from '@/hooks/useHoverGroup';
import ContactForm from '@/components/contact/ContactForm';
import ContactPanel from '@/components/contact/ContactPanel';

// Client Component because the two cards react as one hover group — the card
// under the cursor stays sharp while the other blurs and recedes — so the
// hovered index has to live above both of them. This is the section, not a
// shared parent above it, so the directive is still on the smallest scope that
// can hold the state.
export default function ContactSection() {
  const { bind, clear, stateOf } = useHoverGroup();

  // `clear` sits on each card rather than on the grid so that moving into the
  // gap between them resets both, the way the reference's dimGroup does,
  // instead of holding the last hovered card.
  const panelProps = (index) => ({
    className: `is-${stateOf(index)}`,
    ...bind(index),
    onMouseLeave: clear,
  });

  return (
    <section id="form" className="dh-contact" aria-label="Contact form">
      <div className="dh-contact-shell">
        <ContactForm {...panelProps(0)} />
        <ContactPanel {...panelProps(1)} />
      </div>
    </section>
  );
}
