import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import LatestRecipes from '@/components/LatestRecipes';
import Newsletter from '@/components/Newsletter';
import SuperDeleciuos from '@/components/SuperDeleciuos';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <SuperDeleciuos />
      <LatestRecipes />
      <Newsletter />
    </>
  );
}
