import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import itemActions from 'src/store/item/actions';

import SearchToggler from 'src/components/atoms/SearchToggler';
import TabBar from 'src/components/molecules/TabBar';
import CardItemGroup from 'src/components/molecules/CardItem/CardItemGroup';
import { MainPageTypes } from './types';

function MainPage(props: MainPageTypes.IProps) {
  const { items, requests, getItems, getRequests } = props;
  const [didMount, setDidMount] = useState(false);

  const isConsumer = localStorage.getItem('userType') === 'consumer';

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      getItems && getItems();
      getRequests && getRequests();
    }
  },
  [didMount, getItems, getRequests, isConsumer],
  );

  const getParams = new URLSearchParams(`${window.location.search}`);
  const paramsUser = getParams.get('user') || '';
  const myId = sessionStorage.getItem('userId') || '';
  const urlParams = window.location.search.substr(1).split('=')[0];

  const fromUser = (x: number) => {
    return items.filter((n: any) => n.producerId === x);
  };

  return (
    <div>
      <SearchToggler link="/map" title="На карте" />
      <CardItemGroup title={isConsumer ? 'Предложения' : 'Заявки'}
        items={ urlParams === 'my_items' ? fromUser(parseInt(myId, 10)) :
          isConsumer ? urlParams === 'user' ? fromUser(parseInt(paramsUser, 10)) :
            items && items :
            requests && requests
        }
      />
      <TabBar />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return ({
    items: state.itemReducer?.items?.data,
    requests: state.itemReducer?.requests?.data,
  });
};

const mapDispatchToProps = {
  getItems: itemActions.getItems,
  getRequests: itemActions.getRequests,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
