import { FC } from "react";

/**
 * ==> props interface
 */
interface IProps {
  title: string;
}

/**
 * ==> Component
 */
const SecTitle: FC<IProps> = ({ title }) => {
  return (
    <>
      <h3 className="text-3xl font-bold mb-12">{title}</h3>
    </>
  );
}

export default SecTitle;