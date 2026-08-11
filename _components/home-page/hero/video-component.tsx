"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";

export default function VideoComponent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => video.play().catch(() => {});

    const playOnInteraction = () => {
      attemptPlay();
      document.removeEventListener("touchstart", playOnInteraction);
      document.removeEventListener("click", playOnInteraction);
    };

    attemptPlay();
    video.addEventListener("loadeddata", attemptPlay);
    video.addEventListener("canplay", attemptPlay);
    document.addEventListener("touchstart", playOnInteraction);
    document.addEventListener("click", playOnInteraction);

    return () => {
      video.removeEventListener("loadeddata", attemptPlay);
      video.removeEventListener("canplay", attemptPlay);
      document.removeEventListener("touchstart", playOnInteraction);
      document.removeEventListener("click", playOnInteraction);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (video.paused) video.play().catch(() => {});
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full h-[550px] tablet:h-[600px] desktop:h-[660px] object-cover"
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        poster="/images/home-page/hero-slider/bay-sauna-hero-image-1.jpg"
      >
        <source
          src="/videos/hero-video.mp4"
          type='video/mp4; codecs="avc1.4D401F, mp4a.40.2"'
        />
        <source src="/videos/hero-video.webm" type="video/webm" />
      </video>
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-4 right-4 z-20 bg-black/50 rounded-full p-2 desktop:hover:cursor-pointer desktop:hover:bg-black/70 ease-in-out duration-300"
      >
        {muted ? (
          <VolumeOff color="#ffffff" size={20} />
        ) : (
          <Volume2 color="#ffffff" size={20} />
        )}
      </button>
    </div>
  );
}
