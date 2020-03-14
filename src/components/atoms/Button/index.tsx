import * as React from 'react';
import { ButtonTypes } from 'src/components/atoms/Button/types';
import 'src/components/atoms/Button/index.scss';

/**
 * Button represents default html <button>, <a> tags and
 * react router Link component, but with styled and Cover/Ripple
 */
export default class Button extends React.Component<ButtonTypes.IProps> {
  public render(): React.ReactNode {
    const {
      children,
    } = this.props;

    return (
      <button>{children}</button>
    );
  }
}
