import { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';

type AlertProps = PropsWithChildren<{
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'gray';
  icon?: FC<ComponentProps<'svg'>>;
  rounded?: boolean;
  withBorderAccent?: boolean;
  additionalContent?: ReactNode;
  onDismiss?: boolean | (() => void);
}>;

export type { AlertProps };
