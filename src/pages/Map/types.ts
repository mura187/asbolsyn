export namespace MapPageTypes {
  export interface IProps{
    places? : any;
    placesRequests?: any;
    getItems?(): void;
    getRequests?(): void;
  }
}