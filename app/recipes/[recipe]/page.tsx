import { Metadata } from "next";
import { FC } from "react";

/**
 * ==> props interface
 */
interface IProps {

}
export const metadata: Metadata = {
  title: "recipes - recipe name",
};
/**
 * ==> Component
 */
const page: FC<IProps> = ({  }) => {
  return (
    <>
    <h1>recipe</h1>
    </>
  );
}

export default page;