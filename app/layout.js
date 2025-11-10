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
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
