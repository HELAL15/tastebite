// //import { FC } from "react";
import SecTitle from "./ui/SecTitle";
import DeliciousCard from "./ui/DeliciousCard";


/**
 * ==> props interface
 */
// interface IProps {

// }

/**
 * ==> Component
 */
// : FC<IProps>
const SuperDeleciuos = ({  }) => {
  return (
    <>
    <section className="">
      <div className="container">
        <SecTitle title="super delecious" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DeliciousCard/>
          <DeliciousCard/>
          <DeliciousCard/>
          <DeliciousCard/>
          <DeliciousCard/>
          <DeliciousCard/>
        </div>
      </div>
    </section>
    </>
  );
}

export default SuperDeleciuos;