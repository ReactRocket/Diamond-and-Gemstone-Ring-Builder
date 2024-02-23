import React, { useState, useEffect } from "react";

const VideoViewer = ({
  src = "https://diavideo.in:7813/imaged/J33238086A/video.mp4",
}) => {
  const [isValidVideo, setIsValidVideo] = useState(false);

  const checkVideoValidity = () => {
    const validExtensions = [".mp4", ".webm", "-A"];
    const isValid = validExtensions.some((ext) => src.endsWith(ext));
    setIsValidVideo(isValid);
  };

  useEffect(() => {
    checkVideoValidity();
  }, []);
  return (
    <div  className="w-1/2 h-full border border-black">
      {isValidVideo ? (
        <iframe className="h-full w-full " src={src} autoPlay></iframe>
      ) : (
        <p>This is not a valid video.</p>
      )}
    </div>
  );
};

export default VideoViewer;
