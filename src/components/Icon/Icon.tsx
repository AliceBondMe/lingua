import { FC } from "react";
import icons from "../../assets/images/symbol-defs.svg";

interface IconProps {
  name: string;
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};
