import { FC } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Camera,
  Checked,
  ChevronDown,
  ChevronUp,
  Crm,
  Cross,
  Dashboard,
  EyeClosed,
  EyeOpen,
  Info,
  Itinerary,
  Link,
  Pencil,
  Plus,
  School,
  Trash,
} from '../Icons/Icons';

const includedIcons = {
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Camera,
  Checked,
  ChevronDown,
  ChevronUp,
  Crm,
  Cross,
  Dashboard,
  EyeClosed,
  EyeOpen,
  Info,
  Itinerary,
  Link,
  Pencil,
  Plus,
  School,
  Trash,
};

export type IconType = keyof typeof includedIcons | string;

interface IconProps {
  type: IconType;
  className?: string;
  onClick?: () => void;
}

export const Icon: FC<IconProps> = ({ type, className, onClick, ...props }) => {
  const IconSelected = (includedIcons as any)[type];

  if (!IconSelected) {
    console.error(`Icon with type ${type} is not included.`);
    return null;
  }

  return <IconSelected className={className} onClick={onClick} {...props} /> || null;
};
