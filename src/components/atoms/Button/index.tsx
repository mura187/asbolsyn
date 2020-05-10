import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
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
      href, target, to,
      onClick,
      disabled = false,
      fullWidth,
    } = this.props;

    return (
      to ? (
        <Link
          className={classNames([
            `btn ${this.props.classNames}`,
            { 'fill_w justify-content-center': fullWidth },
          ])}
          to={to}
          style={{textDecoration: 'none'}}
        >
          {children}
        </Link>
      ) : (
        href ? (
          <a
            className={classNames([
              `btn ${this.props.classNames}`,
              { 'fill_w justify-content-center': fullWidth },
            ])}
            href={href}
            target={target}
          >
            {children}
          </a>
        ) : (
          <button
            className={classNames([
              `btn ${this.props.classNames}`,
              { 'fill_w justify-content-center': fullWidth },
            ])}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </button>
        )
      )
    );
  }
}
