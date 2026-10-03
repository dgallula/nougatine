import { BrandStory } from "@/components/brand-story";
import { Categories } from "@/components/categories";
import { CraftStory } from "@/components/craft-story";
import { Events } from "@/components/events";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { ImmersiveProduct } from "@/components/immersive-product";
import { Location } from "@/components/location";
import { SignatureProducts } from "@/components/signature-products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <SignatureProducts />
      <CraftStory />
      <ImmersiveProduct />
      <Categories />
      <Events />
      <Gallery />
      <Location />
    </>
  );
}
