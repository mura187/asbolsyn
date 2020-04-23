export namespace DetailPageTypes {
  export interface IProps{
    myItems: object[];
    onUpdateItem?(data: any, producerId: string, offerId: string): void;
    getMyItems?(): void;
  }
}
