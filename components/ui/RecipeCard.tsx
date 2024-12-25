import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';

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
      <div className="group relative overflow-hidden">
        <div className="actions w-fit flex flex-col gap-1 md:gap-3 absolute top-3 md:top-4 -inset-x-full z-20 duration-300 group-hover:inset-x-2 md:group-hover:inset-x-4 ">
          <button className="rounded-full w-7 md:w-8 h-7 md:h-8 grid place-items-center text-sm md:text-base bg-white duration-300 hover:bg-primary hover:text-white">
            <FaRegBookmark />
          </button>
          <button className="rounded-full w-7 md:w-8 h-7 md:h-8 grid place-items-center text-sm md:text-base bg-white duration-300 hover:bg-primary hover:text-white">
            <MdFavoriteBorder />
          </button>
          <button className="rounded-full w-7 md:w-8 h-7 md:h-8 grid place-items-center text-sm md:text-base bg-white duration-300 hover:bg-primary hover:text-white">
            <FaShareAlt />
          </button>
        </div>
        <Link
          href={`/recipes/${id}`}
          className="card duration-300 space-y-3 group"
        >
          <div className="img max-h-[200px] lg:max-h-[250px] aspect-square relative duration-300 w-full overflow-hidden rounded-lg">
            <Image
              src={`${img ? img : '/logo.png'}`}
              alt="recipe"
              width={0}
              height={0}
              sizes="100"
              className={`${
                img ? 'object-cover' : 'object-contain bg-primary-200'
              } w-full h-full group-hover:scale-110 duration-300 `}
            />
          </div>
          <h4 className="text-base md:text-xl font-bold md:px-3">{name}</h4>
        </Link>
      </div>
    </>
  );
};

export default RecipeCard;
