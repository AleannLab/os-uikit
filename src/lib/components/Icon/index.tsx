import { FC } from 'react';
import { ArrowDown, ArrowUp } from '../Icons/Icons';

const includedIcons = {
  ArrowDown,
  ArrowUp,
};

export type IconType = keyof typeof includedIcons | string;

interface IconProps {
  type: IconType;
  className?: string;
}

export const Icon: FC<IconProps> = ({ type, className, ...props }) => {
  const IconSelected = (includedIcons as any)[type];

  if (!IconSelected) {
    console.error(`Icon with type ${type} is not included.`);
    return null;
  }

  return <IconSelected className={className} {...props} /> || null;
};
