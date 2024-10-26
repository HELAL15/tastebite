import { FC,  } from "react";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const notFound: FC<IProps> = ({  }) => {
  return (
    <>
      <div className="container flex items-center justify-center py-60">
        <h1 className="text-4xl font-bold text-center">404 - Page Not Found</h1>
      </div>
    </>
  );
}

export default notFound;