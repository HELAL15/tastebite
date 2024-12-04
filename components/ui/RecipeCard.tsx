import Link from 'next/link';
import Image from 'next/image';

/**
 * ==> Component
 */
const RecipeCard = ({}) => {
  return (
    <>
      <Link href={'/recipes/2'} className="card duration-300 group space-y-3">
        <div className="img max-h-[200px] lg:max-h-[300px] aspect-square relative duration-300 w-full overflow-hidden rounded-lg">
          <Image
            src="/header.png"
            alt="recipe"
            width={0}
            height={0}
            sizes="100vh"
            className="object-cover w-full h-full group-hover:scale-110 duration-300 "
          />
        </div>
        <h4 className="text-2xl font-bold px-3">caramel strawbery milkshake</h4>
      </Link>
    </>
  );
};

export default RecipeCard;
