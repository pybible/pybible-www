'use client';

import { useRef, useState } from 'react';

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        className="home-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/Dadohaehaesang National Park, Republic of Korea.jfif"
        aria-hidden="true"
      >
        <source src="/assets/spash.mp4" type="video/mp4" media="(min-width: 701px)" />
      </video>
      <button className="motion-toggle" type="button" onClick={togglePlayback}>
        {paused ? 'Play background video' : 'Pause background video'}
      </button>
    </>
  );
}
