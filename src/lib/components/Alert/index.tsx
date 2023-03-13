import { FC } from 'react';
import classNames from 'classnames';
import { HiX } from 'react-icons/hi';
import { AlertProps } from './index.types';
import { colorClasses } from './index.constants';

export const Alert: FC<AlertProps> = ({
  children,
  color = 'blue',
  icon: Icon,
  rounded = true,
  withBorderAccent,
  additionalContent,
  onDismiss,
}) => {
  return (
    <div
      className={classNames('flex flex-col gap-2 p-4 text-sm', colorClasses[color], {
        'rounded-lg': rounded,
        'border-t-4': withBorderAccent,
      })}
      role="alert"
    >
      <div className="flex items-center">
        {Icon && <Icon className="mr-3 inline h-5 w-5 flex-shrink-0" />}
        <div>{children}</div>
        {typeof onDismiss === 'function' && (
          <button
            aria-label="Close"
            className={classNames('-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2', {
              'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300':
                color === 'blue',
              'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300':
                color === 'red',
              'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300':
                color === 'green',
              'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300':
                color === 'yellow',
              'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white':
                color === 'gray',
            })}
            data-testid="alert-dismiss"
            onClick={onDismiss}
            type="button"
          >
            <span className="sr-only">Close</span>
            <HiX className="h-5 w-5" />
          </button>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  );
};
