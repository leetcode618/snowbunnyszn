"use client";

import { useState, useRef } from "react";
import SplashScreen from "../components/SplashScreen";
import ScrollText from "../components/ScrollText";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AudioToggle from "../components/AudioToggle";

export default function Home() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [audioMuted, setAudioMuted] = useState(false);
  const bgVideoRef = useRef(null);
  const bgVideoMobileRef = useRef(null);
  const bgAudioRef = useRef(null);
  const chachingAudioRef = useRef(null);

  const playChachingSound = () => {
    if (chachingAudioRef.current) {
      chachingAudioRef.current.currentTime = 0;
      chachingAudioRef.current.play();
    }
  };

  const handleConfirm = () => {
    playChachingSound();
    setSplashVisible(false);
    bgVideoRef.current?.play();
    bgVideoMobileRef.current?.play();
    bgAudioRef.current?.play();
  };

  const toggleAudio = () => {
    if (bgAudioRef.current) {
      bgAudioRef.current.volume = audioMuted ? 1 : 0;
      setAudioMuted(!audioMuted);
    }
  };

  return (
    <>
      <SplashScreen isVisible={isSplashVisible} onConfirm={handleConfirm} />

      <div className={`container ${isSplashVisible ? "" : "visible"}`}>
        <ScrollText playChaching={playChachingSound} position="top" />
        <Hero
          playChaching={playChachingSound}
          bgVideoRef={bgVideoRef}
          bgVideoMobileRef={bgVideoMobileRef}
        />
        <ScrollText playChaching={playChachingSound} position="bottom" />
        <Footer playChaching={playChachingSound} />
      </div>

      <AudioToggle muted={audioMuted} onToggle={toggleAudio} />

      <audio ref={bgAudioRef} loop preload="none">
        <source src="/ariana.mp3" type="audio/mp3" />
      </audio>
      <audio ref={chachingAudioRef} preload="none">
        <source
          src="https://github.com/fatfellas/fellawebsite/raw/refs/heads/main/FNS_WEB_SOUNDS_chaching.mp3"
          type="audio/mp3"
        />
      </audio>
    </>
  );
}
