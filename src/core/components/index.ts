import classNames from 'classnames';
import { ClassNames, IBaseAttributes, IBaseProps, ICoverProps, IRippleProps } from 'src/core/components/types';

/**
 * Maps BaseAttribute props into object that can be attached to the jsx component.
 * @param baseClassNames - component class names that will be joined to the className string.
 * @param props - components base props.
 */
export const mapPropsToAttributes = <P extends IBaseProps>(props: P, ...baseClassNames: ClassNames[]): IBaseAttributes => {
  const { id, role, style, classNames: otherClassNames } = props as IBaseProps;
  const { covered, disabled } = props as ICoverProps;
  const { ripple } = props as IRippleProps;
  return {
    id, role, style,
    'data-tip': true,
    'data-for': id,
    className: `${
        props.className || ''} ${
        classNames(...baseClassNames)} ${
        classNames(otherClassNames)} ${
        classNames({ ripple, covered, disabled })
    }`,
  };
};
