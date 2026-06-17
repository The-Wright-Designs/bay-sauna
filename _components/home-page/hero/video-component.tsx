"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";

export default function VideoComponent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full h-[550px] tablet:h-[600px] desktop:h-[660px] object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/open-graph-image.webp"
      >
        <source
          src="/videos/desktop.webm"
          type="video/webm"
          media="(min-width: 1280px)"
        />
        <source src="/videos/desktop.mp4" media="(min-width: 1280px)" />
        <source
          src="/videos/tablet.webm"
          type="video/webm"
          media="(min-width: 800px)"
        />
        <source src="/videos/tablet.mp4" media="(min-width: 800px)" />
        <source src="/videos/phone.webm" type="video/webm" />
        <source src="/videos/phone.mp4" />
      </video>
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-4 right-4 bg-black/50 rounded-full p-2 desktop:hover:cursor-pointer desktop:hover:bg-black/70 ease-in-out duration-300"
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
