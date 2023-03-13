import { AlertProps } from './index.types';

const colorClasses: Record<AlertProps['color'] & string, string> = {
  blue: 'text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800',
  red: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
  green: 'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
  yellow: 'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
  gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
};

export { colorClasses };
