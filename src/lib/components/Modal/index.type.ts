import { PropsWithChildren } from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
type Placement = `${'top' | 'bottom'}-${'left' | 'center' | 'right'}` | `center${'' | '-left' | '-right'}` | 'none';

export type ModalProps = PropsWithChildren<{
  onClose?: () => void;
  placement?: Placement;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: Size;
  rounded?: boolean;
  indent?: boolean;
}>;

export const sizeClasses: Record<Size, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
};

export const placementClasses: Record<Placement, string> = {
  'top-left': 'items-start justify-start',
  'top-center': 'items-start justify-center',
  'top-right': 'items-start justify-end',
  'center-left': 'items-center justify-start',
  center: 'items-center justify-center',
  'center-right': 'items-center justify-end',
  'bottom-right': 'items-end justify-end',
  'bottom-center': 'items-end justify-center',
  'bottom-left': 'items-end justify-start',
  none: '',
};
