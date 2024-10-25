import { Metadata } from "next";
import { FC } from "react";

/**
 * ==> props interface
 */
interface IProps {

}
export const metadata: Metadata = {
  title: "Tastebite - recipes",
};
/**
 * ==> Component
 */
const page: FC<IProps> = ({  }) => {
  return (
    <>
    <h1>recipes</h1>
    </>
  );
}

export default page;