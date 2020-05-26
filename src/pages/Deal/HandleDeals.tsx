import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import dealActions from 'src/store/deal/actions';

import TabBar from 'src/components/molecules/TabBar';
import CardItemGroup from 'src/components/molecules/CardItem/CardItemGroup';
import { HandleDealsPageTypes } from './types';

function HandleDealsPage(props: HandleDealsPageTypes.IProps) {
  const { consumerDeals, getProducerDeals, getConsumerDeals, producerDeals } = props;
  const userType = window.localStorage.getItem('userType');

  useEffect(
    () => {
      if (userType === 'producer') {
        getProducerDeals && getProducerDeals(false);
      } else {
        getConsumerDeals && getConsumerDeals(false);
      }
    },
    [],
  );
  console.log(consumerDeals);

  return (
    <>
      <CardItemGroup
        isDeal
        isComplete
        title="Завершенные сделки" items={userType === 'producer' ?
        producerDeals.filter((item:any) => item.complete === 'true') :
        consumerDeals.filter((item:any) => item.complete === 'true')} />
      <TabBar />
    </>
  );
}

const mapStateToProps = (state: any) => {
  return ({
    consumerDeals: state.dealReducer?.myDeals?.data,
    producerDeals: state.dealReducer?.producerDeals?.data,
  });
};

const mapDispatchToProps = {
  getProducerDeals: dealActions.getProducerDeals,
  getConsumerDeals: dealActions.getActiveDeals,
};

export default connect(mapStateToProps, mapDispatchToProps)(HandleDealsPage);
