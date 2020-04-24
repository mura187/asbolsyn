export namespace DetailPageTypes {
  export interface IProps{
    myItems: any;
    myRequests: any;
    onUpdateItem?(data: any, producerId: string, offerId: string): void;
    onUpdateRequest?(data: any, consumerId: string, requestId: string): void;
    onDeleteItem?(producerId: string, offerId: string): void;
    onDeleteRequest?(consumerId: string, requestId: string): void;
    getMyItems?(): void;
    getMyRequests?(): void;
  }
}
