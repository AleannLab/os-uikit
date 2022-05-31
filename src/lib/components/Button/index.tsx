import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import ButtonGroup from './ButtonGroup';

type Color = 'blue' | 'gray' | 'lightGray' | 'lightGreen' | 'transparent';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
type PositionInGroup = 'start' | 'middle' | 'end' | 'normal';
type PositionText = 'start' | 'center' | 'end';

export type ButtonComponentProps = Omit<ComponentProps<'button'>, 'color'> & {
  pill?: boolean;
  ring?: boolean;
  color?: Color;
  size?: Size;
  icon?: FC<ComponentProps<'svg'>>;
  full?: boolean;
  ptx?: PositionText;
  pty?: PositionText;
  positionInGroup?: PositionInGroup;
};

const colorClasses: Record<Color, string> = {
  blue: 'text-white bg-blue-600 hover:bg-blue-800 rounded-md text-base font-medium focus:bg-blue-300 disabled:hover:bg-blue-700',
  gray: 'text-black bg-gray-600 hover:bg-gray-800 rounded-md  text-base font-medium focus:bg-gray-300 disabled:hover:bg-gray-700',
  lightGray: 'text-blue-600 bg-gray-200 hover:bg-gray-400 rounded-md text-base font-medium disabled:hover:bg-gray-300',
  lightGreen: 'text-white bg-green-400 hover:bg-green-500 rounded-md text-base font-medium disabled:hover:bg-green-500',
  transparent: 'bg-transparent border-none text-black hover:bg-none',
};

const ringClasses: Record<Color, string> = {
  blue: 'text-blue-600 text-base font-medium bg-white border-blue-600 border-2 hover:bg-blue-600 hover:text-white ',
  gray: 'text-black bg-white border-gray-700 border hover:bg-gray-700 hover:text-white',
  lightGray: 'text-black bg-white border-gray-400 border hover:bg-gray-200 hover:text-white',
  lightGreen: 'text-black bg-white border-green-400 border hover:bg-green-400 hover:text-white',
  transparent: 'text-black bg-white border-black-700 border hover:bg-black-700 hover:text-white',
};

const sizeClasses: Record<Size, string> = {
  none: 'text-xs p-0',
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-2.5',
  xl: 'text-base px-6 py-3',
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
};

const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  className,
  pill = false,
  ring = false,
  disabled = false,
  size = 'sm',
  icon: Icon,
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
          [iconSizeClasses[size]]: !!Icon,
        },
        className,
      )}
    >
      {Icon ? <Icon className="h-5 w-5" /> : <>{children}</>}
    </span>
  </button>
);

ButtonComponent.displayName = 'Button';
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
