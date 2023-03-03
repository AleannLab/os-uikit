import { FC } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  BankCard,
  Box,
  Calendar,
  Camera,
  Cart,
  Checked,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Crm,
  Cross,
  Dashboard,
  EyeClosed,
  EyeOpen,
  Filter,
  Info,
  Itinerary,
  Link,
  Logo,
  Pen,
  Pencil,
  Pinion,
  Plus,
  Magnifier,
  Module,
  Receipt,
  Report,
  School,
  Snowflake,
  Student,
  Tent,
  Trash,
  AppleIcon,
  GoogleIcon,
} from '../Icons/Icons';

const includedIcons = {
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  BankCard,
  Box,
  Calendar,
  Camera,
  Cart,
  Checked,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Crm,
  Cross,
  Dashboard,
  EyeClosed,
  EyeOpen,
  Filter,
  Info,
  Itinerary,
  Link,
  Logo,
  Pen,
  Pencil,
  Pinion,
  Plus,
  Magnifier,
  Module,
  Receipt,
  Report,
  School,
  Snowflake,
  Student,
  Tent,
  Trash,
  AppleIcon,
  GoogleIcon,
};

export type IconType = keyof typeof includedIcons | string;

interface IconProps {
  type: IconType;
  className?: string;
  onClick?: () => void;
  viewheight?: string;
  viewwidth?: string;
}

export const Icon: FC<IconProps> = ({ type, className, onClick, viewheight, viewwidth, ...props }) => {
  const IconSelected = (includedIcons as any)[type];

  if (!IconSelected) {
    console.error(`Icon with type ${type} is not included.`);
    return null;
  }

  return (
    <IconSelected className={className} onClick={onClick} viewheight={viewheight} viewwidth={viewwidth} {...props} /> ||
    null
  );
};
