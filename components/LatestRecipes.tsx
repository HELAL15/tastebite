import SecTitle from './ui/SecTitle';
import RecipeCard from './ui/RecipeCard';

const fetchData = async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  return data;
};

/**
 * ==> Component
 */
const LatestRecipes = async ({}) => {
  const { recipes } = await fetchData();
  return (
    <>
      <section>
        <div className="container">
          <SecTitle title="recipes" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {recipes
              .slice(4, 12)
              .map((recipe: { id: string; name: string; image: string }) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  name={recipe.name}
                  img={recipe.image}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestRecipes;
