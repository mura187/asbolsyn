import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import dealActions from 'src/store/deal/actions';

import TabBar from 'src/components/molecules/TabBar';
import CardItemGroup from 'src/components/molecules/CardItem/CardItemGroup';
import { HandleDealsPageTypes } from './types';

function HandleDealsPage(props: HandleDealsPageTypes.IProps) {
  const { deals, getProducerDeals } = props;
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      getProducerDeals && getProducerDeals();
    }
  },
  [didMount, getProducerDeals],
  );
  console.log(deals && deals.length);
  return (
    <>
      <CardItemGroup title="Активные сделки" items={deals} />
      <TabBar />
    </>
  );
}

const mapStateToProps = (state: any) => {
  return ({
    deals: state.dealReducer?.producerDeals?.data,
  });
};

const mapDispatchToProps = {
  getProducerDeals: dealActions.getProducerDeals,
};

export default connect(mapStateToProps, mapDispatchToProps)(HandleDealsPage);
