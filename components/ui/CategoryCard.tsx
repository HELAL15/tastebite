import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

/**
 * ==> props interface
 */
interface IProps {
  img?: string;
  title?: string;
}

/**
 * ==> Component
 */
const CategoryCard: FC<IProps> = ({ img, title }) => {
  return (
    <>
      <Link href={'/recipes'} className="group">
        <Image
          src={`/${img}`}
          className="aspect-square rounded-full w-full object-cover group-hover:scale-105 duration-300 overflow-hidden"
          alt=""
          width={0}
          height={0}
          sizes="100"
        />
        <h4
          className="text-center text-xl lg:text-2xl 
        font-bold mt-4 group-hover:text-primary 
        group-hover:-translate-y-1 duration-300"
        >
          {title}
        </h4>
      </Link>
    </>
  );
};

export default CategoryCard;
