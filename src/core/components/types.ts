import { CSSProperties, DOMAttributes } from 'react';

export type ClassNames = string | boolean | object | any[];

/**
 * Base attributes of any tag.
 */
export interface IBaseAttributes {
    /**
     * Tags id.
     */
  id?: string;
    /**
     * Tags role.
     */
  role?: string;
    /**
     * Tags style.
     */
  style?: CSSProperties;
    /**
     * Tags class name.
     */
  className?: string;
    /**
     * data-tip is necessary, because <ReactTooltip /> finds the tooltip via this attribute
     */
  'data-tip'?: boolean;
    /**
     * data-for corresponds to the id of <ReactTooltip />
     */
  'data-for'?: string;
}

/**
 * Props of the component that supports ripples.
 */
export interface IRippleProps {
    /**
     * Indicates if component needs to be rippled.
     */
  ripple?: boolean;
}

/**
 * Props of the component that supports covers.
 */
export interface ICoverProps {
    /**
     * Indicates if component needs to be covered.
     */
  covered?: boolean;
    /**
     * Indicates if component needs to be disabled.
     */
  disabled?: boolean;
}

export interface IBaseProps extends IBaseAttributes {
  classNames?: ClassNames;
}
export interface IBaseAttributeProps<T extends Element> extends DOMAttributes<T>, IBaseProps {
}
