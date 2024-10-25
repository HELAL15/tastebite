import { Metadata } from "next";
import { FC } from "react";

/**
 * ==> props interface
 */
interface IProps {

}
export const metadata: Metadata = {
  title: "blogs - blog name",
};
/**
 * ==> Component
 */
const page: FC<IProps> = ({  }) => {
  return (
    <>
    <h1>blog</h1>
    </>
  );
}

export default page;