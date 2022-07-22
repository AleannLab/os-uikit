import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { HiOutlineX } from 'react-icons/hi';
import { useModalContext } from './ModalContext';

type Size = 'sm' | 'md';

type ModalHeaderProps = PropsWithChildren<{
  text?: string;
  sizeIcon?: Size;
  className?: string;
}>;


const sizeClassesICon: Record<Size, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
};

export const ModalHeader: FC<ModalHeaderProps> = ({ children, text, sizeIcon = "md", className }) => {
  const { popup, onClose } = useModalContext();

  return (
    <div
      className={classNames('flex items-start justify-between rounded-t', {
        'pt-4 px-6': popup,
        'border-b p-5': !popup,
      }, className)}
    >
      <h3 className="text-primary-900 text-body-4 font-medium">{children}</h3>
      <button
        className="ml-auto flex gap-2 items-center rounded-lg bg-transparent font-normal p-1.5 text-body-5 text-neutral-800"
        type="button"
        onClick={onClose}
      >
        {text}
        <HiOutlineX className={classNames(sizeClassesICon[sizeIcon])} />
      </button>
    </div>
  );
};
