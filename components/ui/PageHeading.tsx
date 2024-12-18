import { FC } from 'react';

/**
 * ==> props interface
 */
interface IProps {
  title?: string;
}

/**
 * ==> Component
 */
const PageHeading: FC<IProps> = ({ title }) => {
  return (
    <>
      <h2 className=" text-2xl xl:text-3xl font-bold pb-3 mb-6 md:mb-10 border-b border-b-secondary-200">
        {title}
      </h2>
    </>
  );
};

export default PageHeading;
