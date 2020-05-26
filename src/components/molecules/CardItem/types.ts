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
    isDeal?: boolean;
    isComplete?: boolean;
    rating?: number;
    onCreateDeal?(data: any, offerId?: string): void;
    onCompleteDeal?(dealId: string): void;
  }
}

export namespace CardItemGroupTypes {
  export interface IProps {
    users?: any;
    getAllUsers?(): void;
    title: string;
    isDeal?: boolean;
    isComplete?: boolean;
    extraTitle?: any;
    items?: CardItemTypes.IProps[];
  }
}
