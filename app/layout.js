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
        {/* Preload banner video and poster to start fetching early */}
        <link rel="preload" href="/videos/BANNER-VIDEO.webm" as="video" type="video/webm" crossOrigin="anonymous" />
        {/* <link rel="preload" href="/videos/BANNER-VIDEO.mp4" as="video" type="video/mp4" crossOrigin="anonymous" /> */}
        <link rel="preload" href="/images/home/banner-home-bg.jpg" as="image" />
      </head>
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
