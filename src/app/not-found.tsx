import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-title mt-4 text-4xl">העמוד לא נמצא</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        ייתכן שהקישור השתנה. חזרו לדף הבית או צרו קשר בוואטסאפ.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">לדף הבית</Button>
        <Link href="/contact" className="px-6 py-3 text-sm text-gold-deep underline-offset-4 hover:underline">
          צור קשר
        </Link>
      </div>
    </section>
  );
}
