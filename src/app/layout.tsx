import type { Metadata } from "next";
import { Inter, Caveat, Kalam, Shadows_Into_Light, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const kalam = Kalam({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-kalam" });
const shadows = Shadows_Into_Light({ subsets: ["latin"], weight: "400", variable: "--font-shadows" });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dancing" });

export const metadata: Metadata = {
  title: "Boobana & Giri's Wedding",
  description: "Join us for our wedding celebration!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LWZH2JDWCK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LWZH2JDWCK');
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${caveat.variable} ${kalam.variable} ${shadows.variable} ${dancing.variable}`}>
        {children}
      </body>
    </html>
  );
}
