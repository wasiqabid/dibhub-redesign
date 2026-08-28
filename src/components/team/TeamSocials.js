import { IconGitHub, IconLinkedIn } from '@/components/icons/Icons';

const ICONS = {
  linkedin: { Icon: IconLinkedIn, label: 'LinkedIn' },
  github: { Icon: IconGitHub, label: 'GitHub' },
};

// Shared by the leadership block and the member cards — only the button size
// differs, and that comes from the class the caller passes.
export default function TeamSocials({ socials, name, className }) {
  return (
    <div className={className}>
      {socials.map(({ type, href }) => {
        const { Icon, label } = ICONS[type];

        return (
          <a
            key={type}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="dh-team-social"
            aria-label={`${name} on ${label}`}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
