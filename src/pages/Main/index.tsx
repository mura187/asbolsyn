import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import itemActions from 'src/store/item/actions';

import SearchToggler from 'src/components/atoms/SearchToggler';
import TabBar from 'src/components/molecules/TabBar';
import CardItemGroup from 'src/components/molecules/CardItem/CardItemGroup';
import { MainPageTypes } from './types';

function MainPage(props: MainPageTypes.IProps) {
  const { items, getItems } = props;
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      getItems && getItems();
    }
  },
  [didMount, getItems],
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
