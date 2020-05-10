export namespace ModalTypes {
  export interface IProps {
    onCloseClick?(): void;
    width?: number;
    children?: JSX.Element;
  }
}
