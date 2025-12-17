import { useState } from "react";

export default function ScrollText({ playChaching, position }) {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      "VWCkKgH6rdNwqNHvcD1kQLkvvu2nPsYxBasqaEWpump"
    );
    playChaching();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className={`scroll-container ${position}`} onClick={handleCopy}>
      <div className="scroll-text">
        {Array(16)
          .fill("VWCkKgH6rdNwqNHvcD1kQLkvvu2nPsYxBasqaEWpump")
          .map((text, i) => (
            <span key={i}>{text}</span>
          ))}
      </div>
      <div className={`copy-notification ${showNotification ? "show" : ""}`}>
        Copied!
      </div>
    </div>
  );
}
