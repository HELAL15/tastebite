import SecTitle from './ui/SecTitle';
import RecipeCard from './ui/RecipeCard';

/**
 * ==> Component
 */
const LatestRecipes = ({}) => {
  return (
    <>
      <section>
        <div className="container">
          <SecTitle title="recipes" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestRecipes;
