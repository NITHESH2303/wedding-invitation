import type { Metadata, Viewport } from "next";
import { Inter, Caveat, Kalam, Shadows_Into_Light, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const kalam = Kalam({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-kalam" });
const shadows = Shadows_Into_Light({ subsets: ["latin"], weight: "400", variable: "--font-shadows" });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dancing" });

export const metadata: Metadata = {
  title: "Boobana & Giri's Wedding | November 22-23, 2025",
  description: "🎉 This is not a normal kalyanam. This is THE bash! Food unlimited, dance compulsory, excuses banned. Join us in Namakkal, Tamil Nadu for two days of love, laughter, and celebration! 💍✨",
  keywords: ["wedding", "Boobana", "Giri", "Namakkal", "wedding invitation", "Tamil Nadu"],
  authors: [{ name: "Boobana & Giri" }],
  openGraph: {
    title: "Boobana & Giri's Wedding Celebration 💍",
    description: "🎉 This is not a normal kalyanam. This is THE bash! Food unlimited, dance compulsory, excuses banned. Join us on November 22-23, 2025 in Namakkal, Tamil Nadu! 💕",
    url: "https://boobana-giri-wedding-invitation.vercel.app",
    siteName: "Boobana & Giri's Wedding",
    images: [
      {
        url: "https://boobana-giri-wedding-invitation.vercel.app/assests/brideGroomLookComp.jpeg",
        width: 1043,
        height: 1280,
        alt: "Boobana & Giri - Wedding Celebration",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boobana & Giri's Wedding Celebration 💍✨",
    description: "🎉 This is not a normal kalyanam. This is THE bash! Food unlimited, dance compulsory, excuses banned. November 22-23, 2025 | Namakkal, Tamil Nadu 💕",
    images: [
      {
        url: "https://boobana-giri-wedding-invitation.vercel.app/assests/brideGroomLookComp.jpeg",
        alt: "Boobana & Giri - Wedding Celebration",
      },
    ],
    creator: "@boobana_giri",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph / Facebook / WhatsApp Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boobana-giri-wedding-invitation.vercel.app" />
        <meta property="og:title" content="Boobana & Giri's Wedding Celebration 💍" />
        <meta property="og:description" content="🎉 This is not a normal kalyanam. This is THE bash! Food unlimited, dance compulsory, excuses banned. Join us on November 22-23, 2025 in Namakkal, Tamil Nadu! 💕" />
        <meta property="og:image" content="https://boobana-giri-wedding-invitation.vercel.app/assests/brideGroomLookComp.jpeg" />
        <meta property="og:image:width" content="1043" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:site_name" content="Boobana & Giri's Wedding" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://boobana-giri-wedding-invitation.vercel.app" />
        <meta name="twitter:title" content="Boobana & Giri's Wedding Celebration 💍✨" />
        <meta name="twitter:description" content="🎉 This is not a normal kalyanam. This is THE bash! Food unlimited, dance compulsory, excuses banned. November 22-23, 2025 | Namakkal, Tamil Nadu 💕" />
        <meta name="twitter:image" content="https://boobana-giri-wedding-invitation.vercel.app/assests/brideGroomLookComp.jpeg" />
        
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
