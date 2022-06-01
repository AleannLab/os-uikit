import { ComponentProps, FC } from 'react';
import classNames from 'classnames';

type Color = 'gray' | 'green' | 'red';

export type LabelProps = ComponentProps<'label'> & {
  color?: Color;
  isRequired?: boolean;
  isUp?: boolean;
  text?: string;
};

const colorClasses: Record<Color, string> = {
  gray: 'text-gray-400 dark:text-gray-300',
  green: 'text-green-700 dark:text-green-500',
  red: 'text-red-700 dark:text-red-500',
};

export const Label: FC<LabelProps> = ({
  children,
  text,
  color = 'gray',
  className,
  isUp = false,
  isRequired,
  ...props
}) => (
  <label className={classNames('text-sm', colorClasses[color], className, { 'uppercase': isUp })} {...props}>
    {text}
    {isRequired && <span className="ml-1 inline-flex align-middle text-red-600">*</span>}
    {children}
  </label>
);
