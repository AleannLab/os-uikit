import { forwardRef } from 'react';
import classNames from 'classnames';

import { TextInput, TextInputProps } from './TextInput';

export type FileInputProps = Omit<TextInputProps, 'type'>;

export const FileInput: any = forwardRef<HTMLInputElement, FileInputProps>(({ className, ...props }, ref) => (
  <TextInput ref={ref} className={classNames('!p-0', className)} {...props} type="file" />
));
