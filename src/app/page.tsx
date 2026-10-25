import type { Metadata } from "next";
import { BrandStory } from "@/components/brand-story";
import { BreadsShowcase } from "@/components/breads-showcase";
import { Categories } from "@/components/categories";
import { CraftStory } from "@/components/craft-story";
import { Events } from "@/components/events";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { ImmersiveProduct } from "@/components/immersive-product";
import { Location } from "@/components/location";
import { SignatureProducts } from "@/components/signature-products";
import { JsonLd, bakeryJsonLd } from "@/components/seo/json-ld";
import { seo } from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: seo.home.title },
  description: seo.home.description,
  alternates: { canonical: seo.home.path },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={bakeryJsonLd()} />
      <Hero />

      <BrandStory />
      <SignatureProducts />
      <BreadsShowcase />
      <CraftStory />
      <ImmersiveProduct />
      <Categories />
      <Events />
      <Gallery />
      <Location />
    </>
  );
}
