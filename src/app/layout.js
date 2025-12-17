import "./globals.css";

export const metadata = {
  title: "Snow Bunny Season",
  description: "A meme token project on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="preload" as="image" href="/snowbunny.png" />
        <link rel="preload" as="image" href="/access.png" />
        <link rel="preload" as="image" href="/confirm.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
