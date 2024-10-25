import { FC, memo } from "react";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Footer: FC<IProps> = ({  }) => {
  return (
    <>
    <footer>
      <h1>footer</h1>
    </footer>
    </>
  );
}

export default memo(Footer);