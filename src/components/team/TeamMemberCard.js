'use client';

import Image from 'next/image';

import Reveal from '@/components/motion/Reveal';
import TeamSocials from '@/components/team/TeamSocials';

// Reveal owns the entrance, and once it settles Framer holds `transform` and
// `opacity` as inline styles on its own element. The hover lift and the dimming
// of the other cards set those same two properties, so they live on a child
// element instead — otherwise the inline values win and only the blur lands.
export default function TeamMemberCard({ member, index, state, bind }) {
  return (
    <Reveal className="dh-team-member-reveal" index={index}>
      <div className={`dh-team-member is-${state}`} {...bind}>
        <div className="dh-team-member-frame">
          <Image
            className="dh-team-member-photo"
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            width={544}
            height={402}
            sizes="(min-width: 760px) 33vw, (min-width: 480px) 50vw, 100vw"
          />
        </div>

        <div className="dh-team-member-body">
          <div className="dh-team-member-id">
            {/* The reference marks these h4 with no h3 above them; levels are not
                skipped here, and the size still comes from the class. */}
            <h3 className="dh-team-member-name">{member.name}</h3>
            <span className="dh-team-member-role">{member.role}</span>
          </div>

          <TeamSocials
            socials={member.socials}
            name={member.name}
            className="dh-team-socials dh-team-socials--member"
          />
        </div>
      </div>
    </Reveal>
  );
}
