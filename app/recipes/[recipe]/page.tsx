import PageHeading from '@/components/ui/PageHeading';
import RecipeCard from '@/components/ui/RecipeCard';
import { Metadata } from 'next';
import Image from 'next/image';
import { BiComment } from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { FiCalendar } from 'react-icons/fi';
import { LuShare } from 'react-icons/lu';

export const metadata: Metadata = {
  title: 'recipes - recipe name'
};
/**
 * ==> Component
 */

const fetchData = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();
  return data;
};
const fetchRelated = async () => {
  const response = await fetch(`https://dummyjson.com/recipes`);
  const data = await response.json();
  return data;
};
const page = async ({ params }: { params: { recipe: string } }) => {
  const { recipe } = await params;
  const data = await fetchData(recipe);
  const related = await fetchRelated();
  const {
    image,
    name,
    ingredients,
    instructions,
    servings,
    prepTimeMinutes,
    cookTimeMinutes,
    caloriesPerServing
  } = data;

  return (
    <>
      <section>
        <div className="container">
          <div className="main_details space-y-4">
            <div className="detail_top flex items-center flex-wrap justify-between">
              <p className="flex items-center gap-2 text-lg font-medium">
                <FaArrowTrendUp />
                <span>85% would make this again</span>
              </p>
              <div className="actions flex items-center gap-6">
                <button className="text-2xl !border-none !rounded-none">
                  <LuShare />
                </button>
                <button className="text-2xl !border-none !rounded-none">
                  <FaRegBookmark />
                </button>
              </div>
            </div>
            <h3 className="title text-4xl md:text-6xl font-bold">{name}</h3>
            <div className="publisher_details flex items-center flex-wrap gap-4 pb-4 border-b border-slate-300">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full aspect-square object-cover"
                  src="/pasta.jpeg"
                  width={50}
                  height={50}
                  sizes="100vh"
                  alt="publisher"
                />
                <p>ahmed helal</p>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar />
                <p>yesterday</p>
              </div>
              <div className="flex items-center gap-2">
                <BiComment />
                <p>25</p>
              </div>
              <div className="flex items-center gap-2"></div>
            </div>
            <p className="desc text-lg font-medium md:max-w-[800px]">
              Lorem, ipsum dolor sit amet consectetur adipaiores ducimus,
              incidunt eligendi corporis reiciendis architecto nemo commodi
              voluptatum consequatur? Labore, aperiam placeat!
            </p>
            <img
              className="rounded object-cover w-full aspect-video"
              src={image}
              sizes="100"
              width={0}
              height={0}
              alt="recipe"
            />
          </div>
        </div>
      </section>

      <section className="recipe_details pt-0">
        <div className="container grid grid-cols-12 max-lg:gap-y-8 rtl:divide-x-reverse divide max-md:divide-y-2 lg:divide-x-2 divide-slate-300">
          <div className="col-span-12 lg:col-span-8 space-y-10 rtl:pl-8 ltr:pr-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-6">ingredients</h3>
              <div className="cat">
                <ul className="space-y-2 mt-2 instructions">
                  {ingredients.map((ingredient: string, index: string) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-6">instructions</h3>
              <ul className="space-y-4 instructions">
                {instructions.map((instruction: string, index: string) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 max-md:pt-8 lg:rtl:pr-8 lg:ltr:pl-8">
            <div className="bg-gray-200 px-6 py-8 rounded space-y-4">
              <h4 className="title text-3xl font-semibold">nutrition facts</h4>
              <ul className="items divide divide-y-2 divide-slate-300">
                <li className="item py-1 text-lg  flex items-center justify-between">
                  <span>caloriesPerServing</span>
                  <span>{caloriesPerServing}</span>
                </li>
                <li className="item py-1 text-lg  flex items-center justify-between">
                  <span>servings</span>
                  <span>{servings}</span>
                </li>
                <li className="item py-1 text-lg  flex items-center justify-between">
                  <span>prepTimeMinutes</span>
                  <span>{prepTimeMinutes}</span>
                </li>
                <li className="item py-1 text-lg  flex items-center justify-between">
                  <span>cookTimeMinutes</span>
                  <span>{cookTimeMinutes}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <PageHeading title="you might also like" />
          <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {related.recipes
              .slice(0, 4)
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

export default page;
