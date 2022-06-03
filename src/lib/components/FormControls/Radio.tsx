import { ComponentProps, forwardRef } from 'react';
import classNames from 'classnames';

export type RadioProps = Omit<ComponentProps<'input'>, 'type'>;

export const Radio: any = forwardRef<HTMLInputElement, RadioProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={classNames(
      'h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600',
      className,
    )}
    type="radio"
    {...props}
  />
));
