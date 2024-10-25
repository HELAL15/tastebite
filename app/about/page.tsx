import { Metadata } from "next";
import { FC } from "react";

/**
 * ==> props interface
 */
interface IProps {

}
export const metadata: Metadata = {
  title: "Tastebite - about",
};
/**
 * ==> Component
 */
const page: FC<IProps> = ({  }) => {
  return (
    <>
    <h1>about</h1>
    </>
  );
}

export default page;