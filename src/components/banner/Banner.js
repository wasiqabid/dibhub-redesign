'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

import { usePointerSpotlight } from '@/hooks/usePointerSpotlight';
import Drift from '@/components/motion/Drift';
import Rise from '@/components/motion/Rise';
import WordReveal from '@/components/motion/WordReveal';

const HEADLINE = [{ text: 'Empowering Tomorrow’s Innovations,' }, { text: 'Today', accent: true }];

export default function Banner() {
  const reduced = useReducedMotion();
  const { hostRef, spotRef, spotlightProps } = usePointerSpotlight();
  const videoRef = useRef(null);

  // The looping background clip cross-fades its own seam so the restart is
  // invisible; under reduced motion it holds on the first frame instead.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const BASE_OPACITY = 0.42;
    const FADE = 0.55;

    if (reduced) {
      video.pause();
      video.style.opacity = String(BASE_OPACITY);
      return undefined;
    }

    const tryPlay = () => {
      const played = video.play();
      if (played && played.catch) played.catch(() => {});
    };

    const onTimeUpdate = () => {
      const duration = video.duration;
      if (!duration || !Number.isFinite(duration)) return;
      const fadeIn = Math.min(video.currentTime / FADE, 1);
      const fadeOut = Math.min((duration - video.currentTime) / FADE, 1);
      video.style.opacity = String(BASE_OPACITY * Math.min(fadeIn, fadeOut));
    };

    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };

    tryPlay();
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('seeked', tryPlay);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('seeked', tryPlay);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reduced]);

  return (
    <section
      id="top"
      ref={hostRef}
      data-hero-host=""
      className="dh-hero"
      aria-label="Hero"
      {...spotlightProps}
    >
      <video
        ref={videoRef}
        className="dh-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="dh-hero-scrim" />
      <Drift className="dh-hero-glow" />
      <div ref={spotRef} className="dh-spotlight" />
      <div className="dh-hero-rule" />

      <div className="dh-hero-inner">
        <Rise className="dh-eyebrow-row" duration={0.7}>
          <span className="dh-eyebrow dh-eyebrow--on-dark">Dedicated Innovative Brains Hub</span>
        </Rise>

        <h1 className="dh-hero-title">
          <WordReveal segments={HEADLINE} caret />
        </h1>

        <Rise as="p" className="dh-hero-lead" duration={0.85} delay={0.18}>
          More than an IT provider — we&#39;re your strategic partner in digital transformation.
          Backed by a decade of experience and a team of certified experts, we deliver solutions
          built to drive growth, improve efficiency, and safeguard what matters most
        </Rise>
      </div>
    </section>
  );
}
