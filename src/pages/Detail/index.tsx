import React, { useReducer, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import itemsActions from 'src/store/item/actions';
import TabBar from 'src/components/molecules/TabBar';
import { DetailPageTypes } from './types';
import './index.scss';

function DetailPage(props: DetailPageTypes.IProps) {
  const [didMount, setDidMount] = useState(false);
  const [curItem, setCurItem] = useState('');
  const [curKey, setCurKey] = useState('');
  const [userInput, setUserInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      foodName: '',
      price: null,
      description: '',
      availableQuantity: null,
    },
  );

  const { onUpdateItem, onUpdateRequest, getMyItems, myItems, myRequests, getMyRequests } = props;

  const isProducer = localStorage.getItem('userType') === 'producer';
  const userId = sessionStorage.getItem('userId') || '';
  const offerId = curItem;

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      isProducer ? getMyItems && getMyItems() : getMyRequests && getMyRequests();
    }
  },
    [didMount, isProducer, getMyItems, getMyRequests],
  );

  const handleChange = (e: any) => {
    const { name } = e.target;
    const newValue = e.target.value;
    setUserInput({ [name]: newValue });
  };

  const updateItem = () => {
    isProducer ?
    onUpdateItem && onUpdateItem(
      {
        food_name: userInput.foodName,
        price: parseInt(userInput.price, 10),
        available_quantity: parseInt(userInput.availableQuantity, 10),
      },
      userId,
      offerId,
    ) : onUpdateRequest && onUpdateRequest(
      {
        food_name: userInput.foodName,
        price: parseInt(userInput.price, 10),
        quantity: parseInt(userInput.availableQuantity, 10),
        description: userInput.description,
      },
      userId,
      offerId,
    );
  };

  const onHandleChangeType = (e: any) => {
    const data = e.target.value;
    setCurItem(data.split(' ')[1]);
    setCurKey(data.split(' ')[0]);
  };

  return (<>
    <h1 className="main-logo text-center f-32">As Bolsyn</h1>
    <div className="edit-page container bg-white base-shadow mt-180">
      <div className="text-left">
        <p className="f-14 py-20">
          Редактировать {isProducer ? 'предложение' : 'заказ'}
        </p>
      </div>
      <div className={myItems.length === 0 ? 'blured' : ''}>
        <select className="edit-page__select my-8 fill_w" onChange={onHandleChangeType}>
          <option value="" disabled selected>Выберите для ред.</option>
          {isProducer && myItems.map((n: any, i: any) =>
            <option value={`${i} ${n.id}` }>#{n.id} {n.food_name} {n.price} ₸ ({n.available_quantity} порции)</option>,
          )}
          {!isProducer && myRequests.map((n: any, i: any) =>
            <option value={`${i} ${n.id}` } key={i}>#{n.id} {n.food_name} {n.price} ₸ ({n.quantity} порции)</option>,
          )}
        </select>
        <input required type="text"
          className="container create-offer__input my-8"
          placeholder={curItem.length === 0 ? 'Изменить название блюда' :
          !isProducer ? myRequests[parseInt(curKey, 10)].food_name : myItems[parseInt(curKey, 10)].food_name }
          name="foodName" value={userInput.foodName} onChange={handleChange}
        />
        {!isProducer &&
          <input required type="text"
            className="container create-offer__input my-8"
            placeholder={curItem.length === 0 ? 'Изменить описание' : myRequests[parseInt(curKey, 10)].description}
            name="description" value={userInput.description} onChange={handleChange}
        />
        }
        <input required type="number"
          className="container create-offer__input my-8"
          placeholder={curItem.length === 0 ? 'Изменить цену' :
          `${!isProducer ? myRequests[parseInt(curKey, 10)].price : myItems[parseInt(curKey, 10)].price} ₸` }
          name="price" value={userInput.price} onChange={handleChange}
        />
        <input required type="number"
          className="container create-offer__input my-8"
          placeholder={curItem.length === 0 ? 'Изменить кол-во' :
          `${!isProducer ? myRequests[parseInt(curKey, 10)].quantity : myItems[parseInt(curKey, 10)].available_quantity} порции` }
          name="availableQuantity" value={userInput.availableQuantity} onChange={handleChange}
        />
        <button disabled={curItem.length === 0} onClick={updateItem}
          className="container create-offer__submit mt-16 mb-40" type="submit">Обновить
      </button>
      </div>
    </div>
    <TabBar />
  </>);
}

const mapStateToProps = (state: any) => {
  return ({
    myItems: state.itemReducer.myItems.data,
    myRequests: state.itemReducer.myRequests.data,
  });
};

const mapDispatchToProps = {
  onUpdateItem: itemsActions.updateItem,
  onUpdateRequest: itemsActions.updateRequest,
  getMyItems: itemsActions.getMyItems,
  getMyRequests: itemsActions.getMyRequests,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
