import { Metadata } from "next";
import { FC } from "react";

/**
 * ==> props interface
 */
interface IProps {

}

export const metadata: Metadata = {
  title: "profile - ahmed helal",
};
/**
 * ==> Component
 */
const page: FC<IProps> = ({  }) => {
  return (
    <>
    <h1>profile</h1>
    </>
  );
}

export default page;