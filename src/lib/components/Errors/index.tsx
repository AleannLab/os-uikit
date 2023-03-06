import { PropsWithChildren, FC } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';

type InputErrorProps = {
  helperText?: string;
  className?: string;
} & PropsWithChildren<any>;

export const InputError: FC<InputErrorProps> = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={classNames(
        'absolute -bottom-4 right-0 flex text-xs font-thin text-red-600 dark:text-red-600',
        className,
      )}
    >
      {children ? children : props.helperText}
      <Icon type="Info" className="ml-1 stroke-red-600" height="16" width="16" />
    </div>
  );
};
