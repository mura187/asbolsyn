import React, { useReducer, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import itemsActions from 'src/store/item/actions';
import TabBar from 'src/components/molecules/TabBar';
import { DetailPageTypes } from './types';
import './index.scss';

function DetailPage(props: DetailPageTypes.IProps) {
  const [didMount, setDidMount] = useState(false);
  const [curItem, setCurItem] = useState('');
  const { onUpdateItem, getMyItems, myItems } = props;

  const userId = sessionStorage.getItem('userId') || '';
  const offerId = curItem;
  const [userInput, setUserInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      foodName: '',
      price: null,
      availableQuantity: null,
    },
  );

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      getMyItems && getMyItems();
    }
  },
    [getMyItems, didMount],
  );

  const handleChange = (e: any) => {
    const { name } = e.target;
    const newValue = e.target.value;
    setUserInput({ [name]: newValue });
  };

  const updateItem = () => {
    onUpdateItem && onUpdateItem(
      {
        food_name: userInput.foodName,
        price: parseInt(userInput.price, 10),
        available_quantity: parseInt(userInput.availableQuantity, 10),
      },
      userId,
      offerId,
    );
  };
  console.log('a', myItems);

  const onHandleChangeType = (e: any) => {
    setCurItem(e.target.value);
    console.log('newvalue', curItem);
  };

  return (<>
    <h1 className="main-logo text-center f-32">As Bolsyn</h1>
    <div className="edit-page container bg-white base-shadow mt-180">
      <div className="text-left">
        <p className="f-14 py-20">{myItems.length === 0 ? 'У вас нет активных предложений' : 'Обновите своё блюдо :)'} </p>
      </div>
      <div className={myItems.length === 0 ? 'blured' : ''}>
        <select className="edit-page__select my-8" onChange={onHandleChangeType}>
          <option value="" disabled selected>Выберите для ред.</option>
          {myItems.map((n: any) =>
            <option value={n.id}>#{n.id} {n.food_name} {n.price}₸ ({n.available_quantity} порции)</option>,
          )}
        </select>
        <input required type="text"
          className="container create-offer__input my-8"
          placeholder="Изменить название блюда"
          name="foodName" value={userInput.foodName} onChange={handleChange}
        />
        <input required type="number"
          className="container create-offer__input my-8"
          placeholder="Изменить цену"
          name="price" value={userInput.price} onChange={handleChange}
        />
        <input required type="number"
          className="container create-offer__input my-8"
          placeholder="Изменить кол-во"
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
  });
};

const mapDispatchToProps = {
  onUpdateItem: itemsActions.updateItem,
  getMyItems: itemsActions.getMyItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
