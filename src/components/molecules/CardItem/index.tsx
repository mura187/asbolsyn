import * as React from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import { CardItemTypes } from 'src/components/molecules/CardItem/types';
import './index.scss';
import { NavLink } from 'react-router-dom';

function CardItem(props: CardItemTypes.IProps) {
  const {
    id,
    producerName,
    producerId,
    consumerName,
    foodName,
    price,
    description,
    availableQuantity,
    quantity,
    location,
    created,
  } = props;
  return (
    <>
      <div className="card-item base-shadow d-flex flex-column container my-10">
        <div className="d-flex flex-row justify-content-between p-12">
          <h2 className="card-item__price">{price} ₸</h2>
          <NavLink to={`/?user=${producerId}`}>
            <p className="card-item__username text-grey text-right f-12">@{producerName || consumerName}</p>
          </NavLink>
        </div>
        <div className="d-flex flex-column p-12">
          <h3 className="card-item__title my-4">{foodName}<br/></h3>
          <h3 className="card-item__quantity">порции: {availableQuantity || quantity} </h3>
          <p className="my-8 text-black">{description}</p>
        </div>
        <hr className="card-item__divider px-12" />
        <div className="card-item__created-info d-flex flex-row p-12 justify-content-between">
          {created && <Moment fromNow>{created}</Moment>}
          <p>{location.join(', ')}</p>
        </div>
      </div>

    </>
  );
}

export default CardItem;
