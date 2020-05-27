import React, { useReducer, useState, useEffect } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import itemsActions from 'src/store/item/actions';
import Button from 'src/components/atoms/Button';
import TabBar from 'src/components/molecules/TabBar';
import { DetailPageTypes } from './types';
import './index.scss';

function DetailPage(props: DetailPageTypes.IProps) {
  const [didMount, setDidMount] = useState(false);
  const [curItem, setCurItem] = useState('');
  const [curKey, setCurKey] = useState('');
  const [modal, showModal] = useState(false);
  const [userInput, setUserInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      foodName: '',
      price: null,
      description: '',
      availableQuantity: null,
    },
  );

  const { onUpdateItem, onUpdateRequest,
    onDeleteItem, onDeleteRequest,
    getMyItems, getMyRequests,
    myItems, myRequests } = props;

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

  const deleteItem = () => {
    isProducer ? onDeleteItem && onDeleteItem(userId, offerId) : onDeleteRequest && onDeleteRequest(userId, offerId);
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
    <h1 className="main-logo text-center f-32">Fresta</h1>
    <div className="edit-page container bg-white base-shadow mt-180">
      <div className="d-flex flex-row justify-content-between text-left">
        <p className="f-14 py-20">
          Редактировать {isProducer ? 'предложение' : 'заказ'}
        </p>
        {modal &&
          <div className="show-modal-wrap">
            <div className="show-modal">
              <div className="show-modal__content mb-90">
                <div className="container d-flex flex-column bg-white base-radius">
                  <div className="d-flex flex-row justify-content-between border-bottom">
                    <h3 className="my-16 f-16">Подтвердить удаление</h3>
                    <button onClick={() => showModal(false)} className="show-modal_close f-17">
                      <FontAwesomeIcon className="text-grey align-self-center" icon={faTimes} />
                    </button>
                  </div>
                  <p className="f-14 text-grey my-32">Хотите удалить предложение?</p>
                  <button onClick={deleteItem} disabled={curItem.length === 0} className="fill_w px-12 mb-32 btn-lg btn-danger text-danger text-center cursor-pointer">
                    <p className="text-center">Удалить</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        }

        <Button onClick={() => showModal(true)} disabled={curItem.length === 0} classNames="p-12 btn-danger text-danger text-decoration-underline align-self-center cursor-pointer">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
      <div className={classNames([(
        isProducer && myItems.length === 0) && 'blured',
        !isProducer && myRequests.length === 0 && 'blured'],
      )}>
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
  onDeleteItem: itemsActions.deleteItem,
  onDeleteRequest: itemsActions.deleteRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
