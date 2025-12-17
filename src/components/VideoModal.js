import { useRef, useState, useEffect } from "react";

export default function VideoModal({ isActive, onClose, playChaching }) {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const updateProgress = () => {
    if (videoRef.current && videoRef.current.duration) {
      const prog =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(prog);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const time = (videoRef.current.duration / 100) * e.target.value;
      videoRef.current.currentTime = time;
      setProgress(e.target.value);
    }
  };

  useEffect(() => {
    if (isActive) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isActive]);

  return (
    <div
      className={`modal-overlay ${isActive ? "active" : ""}`}
      onClick={onClose}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="modal-video-wrapper">
          <video
            ref={videoRef}
            className="modal-video"
            playsInline
            loop
            onTimeUpdate={updateProgress}
          >
            <source src="/trailer.mov" type="video/quicktime" />
          </video>
          <div className="video-controls">
            <div className="progress-bar">
              <div
                className="progress-bar-filled"
                style={{ width: `${progress}%` }}
              ></div>
              <input
                type="range"
                className="progress-seek"
                value={progress}
                min="0"
                max="100"
                step="0.1"
                onChange={handleSeek}
              />
            </div>
            <div className="time-display">
              <span>{formatTime(videoRef.current?.currentTime || 0)}</span>
              <span>{formatTime(videoRef.current?.duration || 0)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
