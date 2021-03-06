import { CardItemTypes } from 'src/components/molecules/CardItem/types';

export const exampleCardItems: CardItemTypes.IProps[] = [
  {
    id: 1,
    producerId: 1,
    producerName: 'examplename',
    foodName: 'Лагман',
    price: 1300,
    initialQuantity: 20,
    availableQuantity: 15,
    location: [53.333, 43.332],
    created: '5 мин назад',
  },
  {
    id: 2,
    producerId: 31,
    producerName: 'examplename',
    foodName: 'Гуйру цомян',
    price: 1500,
    initialQuantity: 22,
    availableQuantity: 13,
    location: [53.333, 43.332],
    created: '1 ч назад',
  },
  {
    id: 3,
    producerId: 23,
    producerName: 'examplename',
    foodName: 'Суйру',
    price: 500,
    initialQuantity: 12,
    availableQuantity: 11,
    location: [53.333, 43.332],
    created: '2 ч назад',
  },
  {
    id: 4,
    producerId: 21,
    producerName: 'examplename',
    foodName: 'Мошуру',
    price: 400,
    initialQuantity: 15,
    availableQuantity: 15,
    location: [53.333, 43.332],
    created: '2 ч назад',
  },
  {
    id: 5,
    producerId: 33,
    producerName: 'examplename',
    foodName: 'Плов',
    price: 1100,
    initialQuantity: 5,
    availableQuantity: 2,
    location: [53.333, 43.332],
    created: '3 ч назад',
  },
  {
    id: 6,
    producerId: 36,
    producerName: 'examplename',
    foodName: 'Салатик',
    price: 1900,
    initialQuantity: 9,
    availableQuantity: 7,
    location: [53.333, 43.332],
    created: '3 ч назад',
  },
];
