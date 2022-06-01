import classNames from 'classnames';

type BadgeLabelColor = 'blue' | 'gray';

type BadgeLabelProperty = {
  color?: BadgeLabelColor;
  size?: 'xs' | 'sm';
  text: string;
  className?: string;
};

const colorClasses: Record<BadgeLabelProperty['color'] & string, string> = {
  blue: 'text-blue-500',
  gray: 'text-gray-500',
};

const sizeClasses: Record<BadgeLabelProperty['size'] & string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
};

export const BadgeLabel = ({ color = 'blue', size = 'xs', text, className }: BadgeLabelProperty) => {
  return <div className={classNames(colorClasses[color], sizeClasses[size], className)}>{text}</div>;
};
