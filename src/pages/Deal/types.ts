export namespace DealPageTypes {
  export interface IProps{
    deals?: any;
    producerDeals?: any;
    getDeals?(active: boolean): void;
    getProducerDeals?(active: boolean): void;
  }
}

export namespace HandleDealsPageTypes {
  export interface IProps{
    consumerDeals?: any;
    producerDeals?: any;
    getProducerDeals?(active: boolean): void;
    getConsumerDeals?(active: boolean): void;
  }
}
