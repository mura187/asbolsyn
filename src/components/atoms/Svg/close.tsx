import React from 'react';
import { SvgTypes } from 'src/components/atoms/Svg/types';

function CloseIcon(props: SvgTypes.IProps) {
  const { className, color, onClick } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <path
        stroke={color || '#7A7B82'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 6L6 18M6 6l12 12"
      />
    </svg>
  );
}

export default CloseIcon;
