import { ComponentProps, FC, ReactNode, forwardRef } from 'react';
import classNames from 'classnames';

type Size = 'sm' | 'md' | 'lg' | 'xs';
type Color = 'base' | 'green';
type Position = 'start' | 'middle' | 'end' | 'normal';

export type SelectProps = ComponentProps<'select'> & {
  sizing?: Size;
  shadow?: boolean;
  helperText?: ReactNode;
  icon?: FC<ComponentProps<'svg'>>;
  position?: Position;
  color?: Color;
  full?: boolean;
};

const colorClasses: Record<Color, { select: string; helperText: string }> = {
  base: {
    select: 'bg-white border-gray-200 text-gray-900 placehilder-gray-700 focus:border-blue-600',
    helperText: 'text-gray-500 dark:text-gray-400',
  },
  green: {
    select:
      'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
    helperText: 'text-green-600 dark:text-green-500',
  },
};

const inputBorderClasses: Record<Position, string> = {
  start: 'rounded-r-none',
  middle: '!rounded-none border-l-0 pl-0',
  end: 'rounded-l-none border-l-0 pl-0',
  normal: 'rounded',
};

const sizeClasses: Record<Size, string> = {
  xs: 'p-2 text-xs',
  sm: 'p-2.5 text-sm',
  md: 'p-3 text-md',
  lg: 'p-4 text-lg',
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      className,
      sizing = 'md',
      shadow,
      helperText,
      position = 'normal',
      icon: Icon,
      color = 'base',
      full,
      ...props
    },
    ref,
  ) => (
    <>
      <div className=" relative flex w-full items-center justify-center">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
        )}
        <select
          ref={ref}
          className={classNames(
            'block rounded border text-base font-normal outline-none disabled:cursor-not-allowed disabled:opacity-50',
            colorClasses[color].select,
            sizeClasses[sizing],
            inputBorderClasses[position],
            full ? 'w-fit' : 'w-full',
            {
              'pl-10': Icon,
              'shadow-sm dark:shadow-sm-light': shadow,
            },
            className,
          )}
          {...props}
        >
          {children}
        </select>
        {helperText && <p className={classNames('mt-2 text-sm', colorClasses[color].helperText)}>{helperText}</p>}
      </div>
    </>
  ),
);
