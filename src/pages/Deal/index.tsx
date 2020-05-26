import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import dealActions from 'src/store/deal/actions';

import TabBar from 'src/components/molecules/TabBar';
import CardItemGroup from 'src/components/molecules/CardItem/CardItemGroup';
import { DealPageTypes } from './types';

function DealPage(props: DealPageTypes.IProps) {
  const { deals, getDeals, getProducerDeals, producerDeals } = props;
  const userType = window.localStorage.getItem('userType');

  useEffect(
    () => {
      if (userType === 'producer') {
        getProducerDeals && getProducerDeals(true);
      } else {
        getDeals && getDeals(true);
      }
    },
    [],
  );
  return (
    <>
      <CardItemGroup
        extraTitle={{ link: '/deal/handle', title: 'Завершенные сделки' }}
        title="Активные сделки" items={userType === 'producer' ? producerDeals : deals}
        isDeal={true}
      />
      <TabBar />
    </>
  );
}

const mapStateToProps = (state: any) => {
  return ({
    deals: state.dealReducer?.myDeals?.data,
    producerDeals: state.dealReducer?.producerDeals?.data,
  });
};

const mapDispatchToProps = {
  getDeals: dealActions.getActiveDeals,
  getProducerDeals: dealActions.getProducerDeals,
};

export default connect(mapStateToProps, mapDispatchToProps)(DealPage);
