import type { Metadata } from "next";
import { Assistant, Noto_Serif_Hebrew } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { WhatsAppFab } from "@/components/whatsapp-button";
import { absoluteUrl, defaultOgImage, seo, siteUrl } from "@/data/seo";
import { site } from "@/data/site";
import "./globals.css";

const display = Noto_Serif_Hebrew({
  variable: "--font-display-face",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Assistant({
  variable: "--font-body-face",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.home.title,
    template: `%s | ${site.nameHe}`,
  },
  description: seo.home.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    siteName: site.nameHe,
    title: seo.home.title,
    description: seo.home.description,
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        width: 1200,
        height: 630,
        alt: `${site.nameHe}, ויטרינת פטיסרי בהר נוף`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
    images: [absoluteUrl(defaultOgImage)],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${display.variable} ${body.variable} h-full scroll-smooth`}
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
