import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const RecipeCard: FC<IProps> = ({  }) => {
  return (
    <>
    <Link href={'/recipe'} className="card group space-y-3">
      <div className="img h-[250px] w-full overflow-hidden rounded-lg">
        <Image src="/header.png" alt="recipe" width={0} height={0} sizes="100vh" className="object-cover w-full h-full group-hover:scale-110 duration-300 " />
      </div>
      <h4 className="text-2xl font-bold px-3">caramel strawbery milkshake</h4>
    </Link>
    </>
  );
}

export default RecipeCard;