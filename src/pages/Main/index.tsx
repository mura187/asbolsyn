import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import itemActions from 'src/store/item/actions';

import SearchToggler from 'src/components/atoms/SearchToggler';
import TabBar from 'src/components/molecules/TabBar';
import CardItemGroup from 'src/components/molecules/CardItem/CardItemGroup';

import { exampleCardItems } from 'src/components/molecules/CardItem/mock';
import { MainPageTypes } from './types';

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

function MainPage(props: MainPageTypes.IProps) {
  const { items, getItems } = props;
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if(!didMount){
      setDidMount(true);
      getItems && getItems();
    }
  },
  );

  return (
    <div>
      <SearchToggler link="/map" title="На карте" />
      <CardItemGroup items={items} />
      <TabBar />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return ({
    items: state.itemReducer.items.data,
  });
};

const mapDispatchToProps = {
  getItems: itemActions.getItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
