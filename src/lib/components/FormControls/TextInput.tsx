import { ComponentProps, FC, ReactNode, forwardRef } from 'react';
import classNames from 'classnames';

type Size = 'sm' | 'md' | 'lg' | 'xs';
type Color = 'base' | 'dark' | 'transparent';
type Position = 'start' | 'middle' | 'end' | 'normal';

export type TextInputProps = ComponentProps<'input'> & {
  sizing?: Size;
  shadow?: boolean;
  helperText?: ReactNode;
  addon?: ReactNode;
  icon?: FC<ComponentProps<'svg'>>;
  color?: Color;
  position?: Position;
  full?: boolean;
  element?: ReactNode;
};

const colorClasses: Record<Color, { input: string; helperText: string }> = {
  base: {
    input: 'bg-white border-gray-200 text-gray-900 placeholder-gray-700 focus:border-blue-600',
    helperText: 'text-red-600 dark:text-red-600',
  },
  dark: {
    input:
      'bg-white border-black-200 text-black-900 placeholder-black-700 focus:border-gray-900 focus-visible:border-gray-900',
    helperText: 'text-red-600 dark:text-red-600',
  },
  transparent: {
    input: 'border-transparent focus:border-transparent focus:ring-0',
    helperText: '',
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

export const TextInput: any = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      sizing = 'md',
      full,
      shadow,
      helperText,
      position = 'normal',
      icon: Icon,
      color = 'base',
      element,
      ...props
    },
    ref,
  ) => (
    <div className="relative flex w-full flex-col">
      <div className="relative flex w-full items-center justify-center">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
        )}
        <input
          ref={ref}
          className={classNames(
            'block rounded border text-base font-normal outline-none disabled:cursor-not-allowed disabled:opacity-50',
            colorClasses[color].input,
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
        />
        {element}
      </div>
      {helperText && (
        <p className={classNames('absolute -bottom-4 text-xs', colorClasses[color].helperText)}>{helperText}</p>
      )}
    </div>
  ),
);
