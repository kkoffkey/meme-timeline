import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Internet Meme Timeline",
  description:
    "A visual horizontal timeline documenting the major internet memes that defined 2005–2008 — the golden age of internet culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
