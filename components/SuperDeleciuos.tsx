import SecTitle from './ui/SecTitle';
import DeliciousCard from './ui/DeliciousCard';

const fetchData = async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  return data;
};

/**
 * ==> Component
 */
const SuperDeleciuos = async ({}) => {
  const { recipes } = await fetchData();
  return (
    <>
      <section className="">
        <div className="container">
          <SecTitle title="delecious" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes
              .slice(0, 3)
              .map((recipe: { id: string; name: string; image: string }) => (
                <DeliciousCard
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

export default SuperDeleciuos;
