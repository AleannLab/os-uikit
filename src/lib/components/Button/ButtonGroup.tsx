import { Children, cloneElement, FC, PropsWithChildren, ReactElement, useMemo } from 'react';

import { ButtonComponentProps } from '.';

export type ButtonGroupProps = PropsWithChildren<{
  pill?: boolean;
  ring?: boolean;
}>;

const ButtonGroup: FC<ButtonGroupProps> = ({ children, pill, ring }) => {
  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonComponentProps>[], (child, index) =>
        cloneElement(child, {
          pill,
          ring,
          positionInGroup:
            index === 0
              ? 'start'
              : index === (children as ReactElement<ButtonComponentProps>[]).length - 1
              ? 'end'
              : 'middle',
        }),
      ),
    [children, ring, pill],
  );

  return (
    <div className="inline-flex" role="group">
      {items}
    </div>
  );
};

ButtonGroup.displayName = 'Button.Group';
export default ButtonGroup;
