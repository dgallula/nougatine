import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { WhatsAppFab } from "@/components/whatsapp-button";
import { site } from "@/data/site";
import "./globals.css";

const frank = Frank_Ruhl_Libre({
  variable: "--font-frank",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.nameHe} | ${site.tagline}`,
  description: `${site.nameHe} — ${site.tagline}. ${site.hero.subtitle}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frank.variable} ${heebo.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-bg font-body text-ink antialiased">
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
