import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      poster={poster}
      style={{ width: "100%", maxWidth: "800px", borderRadius: "8px" }}
    />
  );
};
