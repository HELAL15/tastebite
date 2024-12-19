import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  name?: string | undefined;
  img?: string | undefined;
  id?: string | undefined;
}

/**
 * ==> Component
 */
const RecipeCard: FC<IProps> = ({ name, img, id }) => {
  return (
    <>
      <Link
        href={`/recipes/${id}`}
        className="card duration-300 group space-y-3"
      >
        <div className="img max-h-[200px] lg:max-h-[250px] aspect-square relative duration-300 w-full overflow-hidden rounded-lg">
          <img
            src={img}
            alt="recipe"
            // width={0}
            // height={0}
            // sizes="100"
            className="object-cover w-full h-full group-hover:scale-110 duration-300 "
          />
        </div>
        <h4 className="text-base md:text-xl font-bold md:px-3">{name}</h4>
      </Link>
    </>
  );
};

export default RecipeCard;
