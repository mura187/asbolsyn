import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import dealActions from 'src/store/deal/actions';
import 'moment/locale/ru';
import { CardItemTypes } from 'src/components/molecules/CardItem/types';
import FeedBackModal from 'src/components/molecules/FeedBackModal';
import './index.scss';
import Typography from 'src/components/atoms/Typography';

function CardItem(props: CardItemTypes.IProps) {
  const userId = sessionStorage.getItem('userId');
  const [dealQuantity, setDealQuantity] = useState('1');
  const [showModal, setShowModal] = useState(false);
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
    onCreateDeal,
    onCompleteDeal,
    complete,
    isComplete,
    isDeal,
    rating,
  } = props;

  const createDeal = () => {
    onCreateDeal && onCreateDeal({ quantity: parseInt(dealQuantity, 10) }, id.toString());
  };

  const completeDeal = () => {
    onCompleteDeal && onCompleteDeal(id.toString());
  };

  const userType = window.localStorage.getItem('userType');


  const onChangeHandler = (e: any) => {
    setDealQuantity(e.target.value);
  };

  const onFeedbackModalShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="card-item base-shadow d-flex flex-column container my-10">
        <div className="d-flex flex-row justify-content-between p-12">
          <h2 className="card-item__price">{price} ₸</h2>
          <div className="d-flex align-items-center">
            <Typography variant="subtext" className="mr-8">{rating || 5}/5</Typography>
            <NavLink to={`/?user=${producerId}`}>
              <p className="card-item__username text-grey text-right f-12">@{producerName || consumerName}</p>
            </NavLink>
          </div>
        </div>
        <div className="d-flex flex-column p-12">
          <h3 className="card-item__title my-4">{foodName}<br /></h3>
          <h3 className="card-item__quantity">порции: {availableQuantity || quantity} </h3>
          <p className="my-8 text-black">{description}</p>
        </div>
        <hr className="card-item__divider px-12" />
        <div className="card-item__created-info d-flex flex-row p-12 justify-content-between">
          {created && <Moment fromNow>{created}</Moment>}
          {location && <p>{location.join(', ')}</p>}
        </div>
        {!consumerName && <div className={classNames(['container d-flex flex-row justify-content-start my-16'])}>
          <input onChange={onChangeHandler} value={dealQuantity}
            className="mr-4 p-8 w-25" type="text" placeholder="Кол-во"
          />
          <button disabled={userId === producerId.toString() ||
            parseInt(dealQuantity, 10) > availableQuantity ||
            !sessionStorage.hasOwnProperty('token')}
            className="ml-24 fill_w" onClick={createDeal}
          >
              Купить
          </button>
        </div>
        }
        {isDeal && userType === 'producer' && !isComplete &&
          <div className="d-flex flex-row justify-content-start my-16">
            <button className="p-8" onClick={completeDeal}>Завершить сделку</button>
          </div>
        }
        {isDeal && userType === 'consumer' && isComplete &&
        <div className="d-flex flex-row justify-content-start my-16">
            <button className="p-8" onClick={onFeedbackModalShow}>Оставить отзыв</button>
        </div>
        }
        {showModal && (
          <FeedBackModal dealId={`${id}`} onCloseClick={() => setShowModal(false)}/>
        )}
      </div>
    </>
  );
}

const mapDispatchToProps = {
  onCreateDeal: dealActions.createDeal,
  onCompleteDeal: dealActions.completeDeal,
};

export default connect(null, mapDispatchToProps)(CardItem);
