import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import ButtonGroup from './ButtonGroup';
import { Icon } from '../Icon';

type Color =
  | 'blue'
  | 'gray'
  | 'gray200'
  | 'gray400'
  | 'lightGreen'
  | 'transparent'
  | 'mainRed'
  | 'primary800'
  | 'primary900'
  | 'neutral425'
  | 'uplift700';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
type PositionInGroup = 'start' | 'middle' | 'end' | 'normal' | 'rounded';
type PositionText = 'start' | 'center' | 'end';

export type ButtonComponentProps = Omit<ComponentProps<'button'>, 'color'> & {
  pill?: boolean;
  ring?: boolean;
  color?: Color;
  size?: Size;
  iconName?: string;
  iconClass?: string;
  full?: boolean;
  ptx?: PositionText;
  pty?: PositionText;
  positionInGroup?: PositionInGroup;
  classButton?: string;
};

const colorClasses: Record<Color, string> = {
  blue: 'text-white bg-blue-600 hover:bg-blue-800 text-base font-medium disabled:hover:bg-blue-700',
  gray: 'text-black bg-gray-600 hover:bg-gray-800 text-base font-medium disabled:hover:bg-gray-700',
  gray200: 'text-white bg-gray-200 hover:bg-gray-300 text-base font-medium disabled:hover:bg-gray-300',
  gray400: 'text-white bg-gray-400 hover:bg-gray-500 text-base font-medium disabled:hover:bg-gray-500',
  lightGreen: 'text-white bg-green-400 hover:bg-green-500 text-base font-medium disabled:hover:bg-green-500',
  transparent: 'bg-transparent border-none hover:bg-none',
  mainRed: 'text-white bg-fall-700 hover:opacity-90 text-base font-medium disabled:hover:opacity-70',
  primary800: 'text-white bg-primary-800 hover:opacity-90 text-base font-medium disabled:hover:opacity-70',
  primary900: 'text-white bg-primary-900 hover:opacity-90 text-base font-medium disabled:hover:opacity-70',
  neutral425: 'text-white bg-neutral-425 hover:opacity-90 text-base font-medium disabled:hover:opacity-70',
  uplift700: 'text-white bg-uplift-700 hover:opacity-90 text-base font-medium disabled:hover:opacity-70',
};

const ringClasses: Record<Color, string> = {
  blue: 'text-blue-600 text-base font-medium bg-white border-blue-600 border-2 hover:bg-blue-600 hover:text-white ',
  gray: 'text-black bg-white border-gray-700 border hover:bg-gray-700 hover:text-white',
  gray200: 'text-black bg-white border-gray-200 border hover:bg-gray-300 hover:text-white',
  gray400: 'text-black bg-white border-gray-400 border hover:bg-gray-500 hover:text-white',
  lightGreen: 'text-black bg-white border-green-400 border hover:bg-green-400 hover:text-white',
  transparent: 'text-black bg-white border-black-700 border hover:bg-black-700 hover:text-white',
  mainRed: 'text-black bg-white border-fall-700 border hover:bg-fall-700 hover:text-white',
  primary800: 'text-black bg-white border-primary-800 border hover:bg-primary-800 hover:text-white',
  primary900: 'text-black bg-white border-primary-900 border hover:bg-primary-800 hover:text-white',
  neutral425: 'text-black bg-white border-neutral-425 border hover:bg-primary-800 hover:text-white',
  uplift700: 'text-black bg-white border-uplift-700 border hover:bg-primary-800 hover:text-white',
};

const sizeClasses: Record<Size, string> = {
  none: 'text-xs p-0',
  xs: 'text-xs px-2 py-0.5',
  sm: 'text-sm px-3 py-1',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-4 py-2',
  xl: 'text-base px-6 py-2.5',
};

const iconSizeClasses: Record<Size, string> = {
  none: '!px-0',
  xs: '!px-1',
  sm: '!px-1.5',
  md: '!px-2',
  lg: '!p-2.5',
  xl: '!p-3',
};

const positionTextY: Record<PositionText, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
};

const positionTextX: Record<PositionText, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
};

const buttonBorderClasses: Record<PositionInGroup, string> = {
  start: 'rounded-r-none',
  middle: '!rounded-none border-l-0 pl-0',
  end: 'rounded-l-none border-l-0 pl-0',
  normal: 'rounded-lg',
  rounded: 'rounded-full',
};

const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  className,
  classButton,
  pill = false,
  ring = false,
  disabled = false,
  size = 'sm',
  iconName,
  iconClass,
  color = 'blue',
  full,
  ptx = 'center',
  pty = 'center',
  positionInGroup = 'normal',
  type = 'button',
  ...props
}) => (
  <button
    data-testid="button-element"
    disabled={disabled}
    className={classNames(
      'flex cursor-pointer !outline-none',
      positionTextY[pty],
      positionTextX[ptx],
      buttonBorderClasses[positionInGroup],
      pill ? 'rounded-full' : 'rounded-lg',
      full ? 'w-full' : 'w-fit',
      {
        [colorClasses[color]]: color && !ring,
        [ringClasses[color]]: color && ring,
        'cursor-not-allowed opacity-50': disabled,
      },
      className,
    )}
    type={type}
    {...props}
  >
    <span
      className={classNames(
        'flex cursor-pointer',
        sizeClasses[size],
        pill ? 'rounded-full' : 'rounded-md',
        positionTextY[pty],
        positionTextX[ptx],
        {
          'rounded-r-none': positionInGroup === 'start',
          '!rounded-none': positionInGroup === 'middle',
          'rounded-l-none': positionInGroup === 'end',
          [iconSizeClasses[size]]: !!iconName,
          'cursor-not-allowed opacity-50': disabled,
        },
        className,
        classButton,
      )}
    >
      {iconName ? <Icon type={iconName} className={iconClass} /> : <>{children}</>}
    </span>
  </button>
);

ButtonComponent.displayName = 'Button';
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
