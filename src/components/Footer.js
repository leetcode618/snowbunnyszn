import Image from "next/image";

export default function Footer({ playChaching, openModal = () => {} }) {
  const socialLinks = [
    {
      href: "https://www.instagram.com/fatfellas/",
      src: "https://raw.githubusercontent.com/fatfellas/fellawebsite/main/web_icon_IG.png",
      alt: "Instagram",
    },
    {
      href: "https://x.com/i/communities/2001084089043161592",
      src: "https://raw.githubusercontent.com/fatfellas/fellawebsite/main/web_icon_X.png",
      alt: "X",
    },
    {
      href: "https://t.me/SnowBunny_Season",
      src: "https://raw.githubusercontent.com/fatfellas/fellawebsite/main/web_icon_TG.png",
      alt: "Telegram",
    },
    {
      href: "https://dexscreener.com/solana/VWCkKgH6rdNwqNHvcD1kQLkvvu2nPsYxBasqaEWpump",
      src: "https://raw.githubusercontent.com/fatfellas/fellawebsite/main/web_icon_DEX.png",
      alt: "Dex",
    },
    {
      href: "https://pump.fun/coin/VWCkKgH6rdNwqNHvcD1kQLkvvu2nPsYxBasqaEWpump",
      src: "https://raw.githubusercontent.com/fatfellas/fellawebsite/main/web_icon_PUMP.png",
      alt: "Pump",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              onClick={playChaching}
            >
              <Image
                src={link.src}
                alt={link.alt}
                width={48}
                height={48}
                className="social-icon"
                unoptimized
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
