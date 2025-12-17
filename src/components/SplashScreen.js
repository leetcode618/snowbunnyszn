import Image from "next/image";

export default function SplashScreen({ isVisible, onConfirm }) {
  return (
    <div className={`splash-screen ${isVisible ? "" : "hidden"}`}>
      <div className="splash-background"></div>
      <div className="overlay"></div>
      <div className="splash-content">
        <Image
          src="/access.png"
          alt="Access Restricted"
          width={800}
          height={200}
          className="access-restricted"
          unoptimized
        />
        <Image
          src="/confirm.png"
          alt="Confirm Button"
          width={300}
          height={100}
          className="confirm-button"
          onClick={onConfirm}
          unoptimized
        />
      </div>
    </div>
  );
}
