export namespace ButtonTypes {
  export interface IProps {
    onClick?(params?: any): void;
    to?: string;
    href?: string;
    target?: string;
    classNames?: string;
    disabled?: boolean;
    fullWidth?: boolean;
  }
}
