'use client';

import { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const seekFrameRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const video = videoRef.current;

    if (!video || !Number.isFinite(video.duration)) {
      return;
    }

    targetTimeRef.current = progress * video.duration;

    if (seekFrameRef.current) {
      return;
    }

    seekFrameRef.current = requestAnimationFrame(() => {
      const currentVideo = videoRef.current;

      if (currentVideo && Math.abs(currentVideo.currentTime - targetTimeRef.current) > 0.04) {
        currentVideo.currentTime = targetTimeRef.current;
      }

      seekFrameRef.current = null;
    });
  });

  return (
    <section ref={sectionRef} className="relative h-[320vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <video
          ref={videoRef}
          src="/Hero_scrool1-smooth.mp4"
          className="h-full w-full object-cover object-[84%_center] md:object-center"
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={(event) => {
            event.currentTarget.currentTime = 0;
          }}
          aria-label="Golden Liora scroll kontrollü hero videosu"
        />
      </div>
    </section>
  );
};

export default Hero;
