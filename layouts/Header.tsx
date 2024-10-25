import { FC, memo } from "react";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Header: FC<IProps> = ({  }) => {
  return (
    <>
    <header>
      <h1>header</h1>
    </header>
    </>
  );
}

export default memo(Header);