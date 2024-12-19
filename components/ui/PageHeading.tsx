import { FC } from 'react';

/**
 * ==> props interface
 */
interface IProps {
  title?: string;
  border?: boolean;
}

/**
 * ==> Component
 */
const PageHeading: FC<IProps> = ({ title, border = true }) => {
  return (
    <>
      <h2
        className={`text-2xl xl:text-3xl font-bold   ${
          border && 'pb-3 border-b border-b-secondary-200 mb-6 md:mb-10'
        }`}
      >
        {title}
      </h2>
    </>
  );
};

export default PageHeading;
