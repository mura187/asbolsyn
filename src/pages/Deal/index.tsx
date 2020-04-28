import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import dealActions from 'src/store/deal/actions';

import TabBar from 'src/components/molecules/TabBar';
import CardItemGroup from 'src/components/molecules/CardItem/CardItemGroup';
import { DealPageTypes } from './types';

function DealPage(props: DealPageTypes.IProps) {
  const { deals, getDeals } = props;
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      getDeals && getDeals();
    }
  },
  [didMount, getDeals],
  );
  console.log(deals && deals);
  return (
    <>
      <CardItemGroup
        extraTitle={{ link: '/deal/handle', title: 'Управление моими сделками' }}
        title="Активные сделки" items={deals}
      />
      <TabBar />
    </>
  );
}

const mapStateToProps = (state: any) => {
  return ({
    deals: state.dealReducer?.myDeals?.data,
  });
};

const mapDispatchToProps = {
  getDeals: dealActions.getActiveDeals,
};

export default connect(mapStateToProps, mapDispatchToProps)(DealPage);
