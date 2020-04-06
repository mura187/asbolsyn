import React from 'react';
import Button from 'src/components/atoms/Button';
import CardItem from 'src/components/molecules/CardItem';
import CardItemGroup from 'src/components/molecules/CardItem/CardItemGroup';
import { exampleCardItems } from 'src/components/molecules/CardItem/mock';
import TabBar from 'src/components/molecules/TabBar';

const cardItem = {
  id: 1,
  producerId: 1,
  name: 'Лагман',
  price: 1300,
  initialQuantity: 20,
  availableQuantity: 15,
  location: [53.333, 43.332],
  created: 'Today',
};

function MainPage() {
  return (
    <div>
      <CardItemGroup items={exampleCardItems} />
      <TabBar />
    </div>
  );
}

export default MainPage;
