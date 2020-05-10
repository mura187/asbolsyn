import { useEffect } from 'react';

export const useOutsideClick = (ref: any, callback: any) => {
  const handleClick = (event: any) => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    callback(event);
  };

  useEffect(
    () => {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('touchstart', handleClick);

      return () => {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('touchstart', handleClick);
      };
    },
  );
};
