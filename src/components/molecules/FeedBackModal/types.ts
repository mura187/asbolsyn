export namespace FeedBackModalTypes {
  export interface IProps {
    dealId: string;
    createFeedback?(data: any, dealId: string): void;
    onCloseClick?(): void;
  }
}
