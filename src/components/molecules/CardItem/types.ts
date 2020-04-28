export namespace CardItemTypes {
  export interface IProps {
    id: number;
    producerId: number;
    producerName?: string;
    consumerName?: string;
    foodName: string;
    price: number;
    initialQuantity: number;
    availableQuantity: number;
    quantity?: number;
    description?: number;
    location: number[];
    created: string;
    complete?: string;
    onCreateDeal?(data: any, offerId?: string): void;
    onCompleteDeal?(dealId: string): void;
  }
}

export namespace CardItemGroupTypes {
  export interface IProps {
    title: string;
    extraTitle?: any;
    items?: CardItemTypes.IProps[];
  }
}
