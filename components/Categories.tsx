import SecTitle from './ui/SecTitle';
import CategoryCard from './ui/CategoryCard';

/**
 * ==> Component
 */
const Categories = ({}) => {
  return (
    <>
      <section>
        <div className="container">
          <SecTitle title="categories" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
            <CategoryCard img="pasta.jpeg" title="pasta" />
            <CategoryCard img="pizza.webp" title="pizza" />
            <CategoryCard img="vegan.jpeg" title="vegan" />
            <CategoryCard img="desserts.jpeg" title="desserts" />
            <CategoryCard img="smoothie.jpeg" title="smoothies" />
            <CategoryCard img="breakfast.jpeg" title="breakfast" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
