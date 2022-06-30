import classNames from 'classnames';

export type BadgeConnectorColor = 'blue' | 'gray';

export type BadgeConnectorProps = {
  color?: BadgeConnectorColor;
  size?: 'xs' | 'sm';
  className?: string;
  show?: boolean;
};

const colorClasses: Record<BadgeConnectorProps['color'] & string, string> = {
  blue: 'border-blue-500',
  gray: 'border-gray-200',
};

const sizeClasses: Record<BadgeConnectorProps['size'] & string, string> = {
  xs: 'border-4',
  sm: 'border-8',
};

export const BadgeConnector = ({ color = 'blue', size = 'sm', className, show = true }: BadgeConnectorProps) => {
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
