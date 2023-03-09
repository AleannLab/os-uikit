import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalContext } from './ModalContext';
import windowExists from '../../helpers/window-exists';
import { ModalProps, placementClasses, sizeClasses } from './index.type';

const ModalComponent: FC<ModalProps> = ({
  children,
  root = windowExists() ? document.body : undefined,
  show,
  popup,
  size = '2xl',
  placement = 'center',
  rounded = true,
  indent = true,
  onClose,
}): JSX.Element | null => {
  const [container] = useState<HTMLDivElement | undefined>(windowExists() ? document.createElement('div') : undefined);

  useEffect(() => {
    if (!container || !root || !show) {
      return;
    }

    root.appendChild(container);

    return () => {
      root.removeChild(container);
    };
  }, [container, root, show]);

  if (root) {
    if (show) {
      root.style.overflow = 'hidden';
    } else {
      root.style.overflow = 'unset';
    }
  }
  return container
    ? createPortal(
        <ModalContext.Provider value={{ popup, onClose }}>
          <div
            aria-hidden={!show}
            className={classNames(
              'fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
              placementClasses[placement],
              {
                'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80': show,
                hidden: !show,
              },
            )}
            data-testid="modal"
          >
            <div className={classNames('relative h-full w-full', { 'p-4 md:h-auto': indent }, sizeClasses[size])}>
              <div
                className={classNames('relative bg-white shadow ', {
                  'rounded-lg': rounded,
                  'h-full': !rounded,
                })}
              >
                {children}
              </div>
            </div>
          </div>
        </ModalContext.Provider>,
        container,
      )
    : null;
};

ModalComponent.displayName = 'Modal';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

export const Modal = Object.assign(ModalComponent, { Header: ModalHeader, Body: ModalBody, Footer: ModalFooter });
