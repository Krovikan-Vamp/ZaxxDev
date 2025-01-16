import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { TopNavbar } from "@/components/nav/TopNavbar";
import Footer from "@/components/index/Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ZaxxDev Home",
  description: "Creating internal solutions since 2021.",
  icons: [
    {
      url: "favicon.ico", // Add the 'url' property
      href: "favicon.ico",
      rel: "icon",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className}`} data-theme="dracula">
      <body>
        <TopNavbar />
        <main className="min-h-screen flex flex-col mt-16">
          <div className="animate-in min-w-screen flex-1">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}