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
          <SecTitle title="latest recipes" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
