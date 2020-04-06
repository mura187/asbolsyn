import * as React from 'react';
import { CardItemTypes } from 'src/components/molecules/CardItem/types';
// import classNames from 'classNames';
import './index.scss';

function CardItem(props: CardItemTypes.IProps) {
  const {
    producerId,
    name,
    price,
    initialQuantity,
    availableQuantity,
    location,
    created,
  } = props;
  return (
    <>
      <div className="card-item d-flex flex-column container my-10">
        <div className="d-flex flex-row justify-content-between p-12">
          <h2 className="card-item__price">{price} ₸</h2>
          <p>Пользователь #{producerId}</p>
        </div>
        <div className="d-flex flex-column p-12">
          <h3 className="card-item__title my-4">{name}<br/></h3>
          <h3 className="card-item__quantity">порции: {initialQuantity} <br/> осталось: {availableQuantity}</h3>
        </div>
        <hr className="card-item__divider px-12" />
        <div className="card-item__created-info d-flex flex-row p-12 justify-content-between">
          <p>{created}</p>
          <p>{location.join(', ')}</p>
        </div>
      </div>

    </>
  );
}

export default CardItem;
