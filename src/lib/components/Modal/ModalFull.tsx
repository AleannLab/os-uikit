import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalContext } from './ModalContext';
import windowExists from '../../helpers/window-exists';
import { ModalProps, placementClasses } from './index.type';

const ModalFullComponent: FC<ModalProps> = ({
  children,
  root = windowExists() ? document.body : undefined,
  show,
  popup,
  placement = 'center',
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
              'fixed inset-0 z-50 overflow-x-hidden overflow-y-scroll',
              placementClasses[placement],
              {
                'bg-gray-900 bg-opacity-50 dark:bg-opacity-80': show,
                hidden: !show,
              },
            )}
            data-testid="modal"
          >
            <div className="h-screen overflow-auto bg-white shadow">{children}</div>
          </div>
        </ModalContext.Provider>,
        container,
      )
    : null;
};

ModalFullComponent.displayName = 'ModalFull';
ModalHeader.displayName = 'ModalFull.Header';
ModalBody.displayName = 'ModalFull.Body';
ModalFooter.displayName = 'ModalFull.Footer';

export const ModalFull = Object.assign(ModalFullComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
