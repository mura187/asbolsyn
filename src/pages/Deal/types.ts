export namespace DealPageTypes {
  export interface IProps{
    deals?: any;
    getDeals?(): void;
  }
}

export namespace HandleDealsPageTypes {
  export interface IProps{
    deals?: any;
    getProducerDeals?(): void;
  }
}
