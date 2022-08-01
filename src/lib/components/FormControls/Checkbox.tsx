import { ComponentProps, forwardRef } from 'react';
import classNames from 'classnames';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type'>;

export const Checkbox: any = forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => (
  <>
    <input
      ref={ref}
      className={classNames(
        'h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600',
        className,
      )}
      type="checkbox"
      {...props}
    />
  </>
));
