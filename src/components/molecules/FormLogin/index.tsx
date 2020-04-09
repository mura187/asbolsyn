import * as React from 'react';
import './index.scss';

function FormLogin() {
  return (<>
    <h1 className="main-logo text-center f-32">As Bolsyn</h1>
    <div className="row align-items-center justify-content-center mt-180">
      <div className="form-login">
        <div className="text-left">
          <p className="container px-36 my-20 f-14">Вход в личный кабинет</p>
        </div>
        <div className="d-flex flex-column">
          <input className="container form-login__input" type="text" placeholder="Введите номер телефона" />
          <button className="container form-login__submit my-16" type="submit">Продолжить</button>
        </div>
      </div>
    </div>
  </>);
}

export default FormLogin;
