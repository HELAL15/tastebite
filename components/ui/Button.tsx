import { FC } from "react";

interface IProps {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  onClick?: () => void;
  cx?: string;
  disabled?: boolean;
}

const MainButton: FC<IProps> = ({
  title,
  icon,
  position,
  onClick,
  cx = '',
  disabled,
}) => {
  return (
    <button
      className={`btn main-btn group ${cx}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={`content ${disabled ? 'text-black/30' : 'group-hover:text-secondary-200'}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MainButton;
