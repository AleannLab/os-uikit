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

export const ModalHeader: FC<ModalHeaderProps> = ({ children, text, sizeIcon = 'md', className }) => {
  const { popup, onClose } = useModalContext();

  return (
    <div
      className={classNames(
        'flex items-start justify-between rounded-t',
        {
          'px-6 pt-4': popup,
          'border-b p-5': !popup,
        },
        className,
      )}
    >
      <h3 className="text-body-4 font-medium text-primary-900">{children}</h3>
      <button
        className="text-body-5 ml-auto flex items-center gap-2 rounded-lg bg-transparent p-1.5 font-normal
        text-neutral-800 hover:bg-gray-100 focus:border-0 focus:outline-0"
        type="button"
        onClick={onClose}
      >
        {text}
        <HiOutlineX className={classNames(sizeClassesICon[sizeIcon])} />
      </button>
    </div>
  );
};
