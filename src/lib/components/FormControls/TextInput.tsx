import { ComponentProps, FC, ReactNode, forwardRef } from 'react';
import classNames from 'classnames';

type Size = 'sm' | 'md' | 'lg' | 'xs' | 'xl';
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
  xs: 'p-2 !text-xs',
  sm: 'p-2.5 !text-sm',
  md: 'p-3 !text-md',
  lg: 'p-4 !text-lg',
  xl: 'px-3 py-3.5 !text-body-1'
};

export const TextInput: any = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      sizing = 'md',
      full = true,
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
    <div className={classNames('relative flex flex-col', {'w-full':full} )}>
      <div className={classNames('relative flex items-center justify-center', {'w-full':full})}>
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4">
            <Icon />
          </div>
        )}
        <input
          ref={ref}
          className={classNames(
            'block rounded border text-base font-normal outline-none disabled:cursor-not-allowed disabled:opacity-50',
            colorClasses[color].input,
            sizeClasses[sizing],
            inputBorderClasses[position],
            {'w-full':full},
            {
              'pr-10': Icon,
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
