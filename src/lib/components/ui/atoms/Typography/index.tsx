import { FC } from 'react';
import { TypographyProps } from './index.types';
import { createComponent } from '../../../../helpers/createComponent.helper';

const Typography: FC<TypographyProps> = ({ text, tag = 'h2', className }) => {
  const Component = createComponent<HTMLHeadingElement>();
  return (
    <Component tag={tag} className={className}>
      {text}
    </Component>
  );
};

export { Typography as Typography };
