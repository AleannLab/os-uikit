import { ComponentProps, forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { InputError } from '../Errors';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type'> & PropsWithChildren<any>;

export const Checkbox: any = forwardRef<HTMLInputElement, CheckboxProps>(({ className, children, ...props }, ref) => (
  <div className={classNames('form-check relative', className)}>
    <label className="m-0 inline-flex cursor-pointer items-center text-gray-700">
      <input
        ref={ref}
        className="h-4 w-4 !rounded-full border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700"
        // defaultChecked={props.checked}
        {...props}
        type="checkbox"
      />
      <div className="text-body-1 ml-2 mt-0.5 text-neutral-800">{children ? children : props.title}</div>
    </label>
    {props.tooltip && <InputError className="mb-1">{props.tooltip}</InputError>}
  </div>
));
