import "./globals.css";
import "@styles/font.css";
import "@styles/mainbundle.scss";
import ClientLayoutWrapper from "@common/ClientLayoutWrapper";


export const metadata = {
  title: "Lightning Arrestor| Protection Manufacturer in Kerala, India",
  description: "Excel Earthings is the best lightning arrestor | protection system manufacturer in Kerala. Lightning arrestor | protection for Home & Building in Kerala, India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Preload critical resources only - banner poster for above the fold */}
        <link rel="preload" href="/images/home/BANNER-VIDEO-New.png" as="image" />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/neuehaasdisplaybold-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/neuehaasdisplayroman-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Resource hints for performance */}
        <link rel="prefetch" href="/videos/BANNER-VIDEO-NEW.webm" as="video" type="video/webm" crossOrigin="anonymous" />

        {/* Viewport meta tag for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#002581" />
      </head>
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
