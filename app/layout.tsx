import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { TopNavbar } from "@/components/TopNavbar";
import Footer from "@/components/Footer";

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
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <TopNavbar />
        <main className="min-h-screen flex flex-col border">
          <div className="animate-in min-w-full flex-1">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}