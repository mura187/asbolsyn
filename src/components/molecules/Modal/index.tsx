import React, { useEffect, useRef } from 'react';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import { ModalTypes } from 'src/components/molecules/Modal/types';
import './index.scss';
import CloseIcon from 'src/components/atoms/Svg/close';

function Modal(props: ModalTypes.IProps) {
  const {
    onCloseClick: propsOnCloseClick,
    children,
    width,
  } = props;

  const ref = useRef<HTMLDivElement>(null);
  const onCloseClick = () => propsOnCloseClick && propsOnCloseClick();

  const modalContentStyles = {
    width: `${width || 400}px`,
  };

  useEffect(
    () => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'visible';
      };
    },
    [],
  );

  useOutsideClick(ref, () => {
    propsOnCloseClick && propsOnCloseClick();
  });

  return (
    <div className="modal d-flex align-items-center justify-content-center pos_fixed vh_100 vw_100">
      <div
        ref={ref}
        style={modalContentStyles}
        className="modal__content position-relative"
      >
        <CloseIcon
          className="modal__close-icon"
          onClick={onCloseClick}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
