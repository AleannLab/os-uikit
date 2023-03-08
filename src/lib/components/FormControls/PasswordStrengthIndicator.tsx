import { FC } from 'react';
import classNames from 'classnames';

export type StrengthText = 'Poor' | 'Average' | 'Strong' | '';

type PasswordStrengthIndicatorProps = {
  strength?: StrengthText;
};

const barClass: Record<StrengthText, string> = {
  Poor: 'bg-red-500 w-2/12',
  Average: 'bg-orange-500 w-8/12',
  Strong: 'bg-green-700 w-full',
  '': '',
};

const fontClass: Record<StrengthText, string> = {
  Poor: 'text-red-500',
  Average: 'text-orange-500',
  Strong: 'text-green-700',
  '': '',
};

export const PasswordStrengthIndicator: FC<PasswordStrengthIndicatorProps> = ({ strength }) => {
  if (!strength) {
    return null;
  }

  return (
    <div>
      <div className={classNames('h-0.5 rounded', barClass[strength])} />
      <span className={classNames('text-xs', fontClass[strength])}>{strength}</span>
    </div>
  );
};
