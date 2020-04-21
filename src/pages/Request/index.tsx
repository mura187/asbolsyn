import React, { useState, useEffect, useReducer } from 'react';
import { connect } from 'react-redux';

import TabBar from 'src/components/molecules/TabBar';
import YandexMap from 'src/components/molecules/YandexMap';

import { RequestPageTypes } from './types';
import './index.scss';

function CreateRequest(props: RequestPageTypes.IProps) {
  const token = sessionStorage.getItem('token');
  const [error, setError] = useState(false);
  const [userInput, setUserInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      foodName: '',
      price: null,
      initialQuantity: null,
      location: '',
    },
  );
  const getLocation = sessionStorage.getItem('location') || '';
  useEffect(() => {
    if (token === null) {
      window.location.replace('/login');
    }
  });
  const { onCreateRequest } = props;

  const handleChange = (e: any) => {
    const { name } = e.target;
    const newValue = e.target.value;
    setUserInput({ [name]: newValue });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    onCreateRequest && onCreateRequest(
      {
        food_name: userInput.foodName,
        price: parseInt(userInput.price),
        initial_quantity: parseInt(userInput.initialQuantity),
        location: JSON.parse(getLocation),
      },
      {
        onError: () => (setError(true)),
      },
    );
  };

  return (
    <div>
      <h1 className="main-logo text-center f-32">As Bolsyn</h1>
      <div className="row align-items-center justify-content-center mt-180">
        <div className="create-offer container">
          <div className="text-left">
            <p className="container my-20 f-14">Закажите блюдо :)</p>
          </div>

          <div className="d-flex flex-column container ">
            <input required type="text"
              className="container create-offer__input my-8"
              placeholder="Введите название блюда"
              name="foodName" value={userInput.foodName} onChange={handleChange}
            />
            <input required type="number"
              className="container create-offer__input my-8"
              placeholder="Цена"
              name="price" value={userInput.price} onChange={handleChange}
            />

            <input required type="number"
              className="container create-offer__input my-8"
              placeholder="Кол-во"
              name="initialQuantity" value={userInput.initialQuantity} onChange={handleChange}
            />
            <p className="mt-8 mb-4 f-14 text-grey">Адрес</p>
            <YandexMap />
            <button onClick={submitForm}
              className="container create-offer__submit mt-16 mb-40" type="submit">Создать
            </button>
            {error &&
              <div className="text-left text-danger">
                <p className="container px-36 mb-16 f-14">Произошла ошибка, повторите еще раз или позже</p>
              </div>
            }
          </div>
        </div>
        <TabBar />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return ({
    login: state.login,
  });
};

const mapDispatchToProps = {
  // onCreateRequest: itemsActions.CreateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRequest);
