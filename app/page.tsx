import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import LatestRecipes from "@/components/LatestRecipes";
import SuperDeleciuos from "@/components/SuperDeleciuos";


export default function Home() {
  return (
    <>
      <Hero/>
      <Categories/>
      <SuperDeleciuos/>
      <LatestRecipes/>
    </>
  );
}
