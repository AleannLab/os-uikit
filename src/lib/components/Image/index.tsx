import { FC } from 'react';

type ImageProps = {
  image?: string;
  alt?: string;
};

const Image: FC<ImageProps> = ({ image, alt }): JSX.Element | null => {
  if (!image) {
    return null;
  }
  return (
    <div className="flex items-center justify-center">
      <img src={image} alt={alt} />
    </div>
  );
};

export { Image };
