export namespace CardItemTypes {
  export interface IProps {
    id: number;
    producerId: number;
    name: string;
    price: number;
    initialQuantity: number;
    availableQuantity: number;
    location: number[];
    created: string;
  }
}

export namespace CardItemGroupTypes {
  export interface IProps {
    items?: CardItemTypes.IProps[];
  }
}