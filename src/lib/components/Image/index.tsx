import { FC } from 'react';
import classNames from 'classnames';

type ImageProps = {
  image?: string;
  alt?: string;
  className?: string;
};

const Image: FC<ImageProps> = ({ image, alt, className }): JSX.Element | null => {
  if (!image) {
    return null;
  }
  return (
    <div className="flex items-center justify-center">
      <img className={classNames('', className)} src={image} alt={alt} />
    </div>
  );
};

export { Image };
