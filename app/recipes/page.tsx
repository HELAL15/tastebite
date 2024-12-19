import PageHeading from '@/components/ui/PageHeading';
import RecipeCard from '@/components/ui/RecipeCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tastebite - recipes'
};
/**
 * ==> Component
 */

const fetchData = async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  return data;
};

const page = async ({}) => {
  const { recipes } = await fetchData();
  console.log(recipes);

  return (
    <>
      <section>
        <div className="container ">
          <PageHeading title="recipes" />
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* {Array.from({ length: 20 }, (_, index) => (
              <RecipeCard key={index} />
            ))} */}
            {recipes.map(
              (recipe: { id: string; name: string; image: string }) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  name={recipe.name}
                  img={recipe.image}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
