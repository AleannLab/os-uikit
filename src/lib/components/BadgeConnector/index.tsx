import classNames from 'classnames';

export type BadgeConnectorColor = 'blue' | 'gray';

export type BadgeConnectorProps = {
  color?: BadgeConnectorColor;
  size?: 'xs' | 'sm';
  className?: string;
  show?: boolean;
};

const colorClasses: Record<BadgeConnectorProps['color'] & string, string> = {
  blue: 'bg-blue-600 text-white',
  gray: 'bg-gray-200 text-gray-500',
};

const sizeClasses: Record<BadgeConnectorProps['size'] & string, string> = {
  xs: 'w-full h-3',
  sm: 'w-full h-5',
};

export const BadgeConnector = ({ color = 'blue', size = 'xs', className, show = true }: BadgeConnectorProps) => {
  return (
    <>
      {show && (
        <div
          className={classNames('flex items-center justify-center', colorClasses[color], sizeClasses[size], className)}
        />
      )}
    </>
  );
};
