import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authActions from 'src/store/auth/actions';

import { LoginPageTypes } from './types';
import './index.scss';

function Login(props:LoginPageTypes.IProps) {

  const [validUsername, setValidUsername] = useState(false);
  const [requiredField, setRequiredField] = useState(false);
  const [error, setError] = useState(false);
  const [userInput, setUserInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      login: '',
      password: '',
    },
  );

  const { onLogin } = props;

  const handleChange = (e: any) => {
    const { name } = e.target;
    const newValue = e.target.value;
    setUserInput({ [name]: newValue });
  };
  const submitForm = (e: any) => {
    e.preventDefault();
    onLogin && onLogin(
      { login: userInput.login, password: userInput.password },
      {
        onError: () => (setError(true)),
      },
      );
  };

  // pseudo-validation
  const validInput = () => {
    if (userInput.login.length > 0) {
      setValidUsername(true);
      setRequiredField(false);
    } else setRequiredField(true);
  };

  return (
    <div>
      <h1 className="main-logo text-center f-32">As Bolsyn</h1>
      <div className="row align-items-center justify-content-center mt-180">
        <div className="form-login container px-20">
          <div className="text-left">
            <p className="my-20 f-14">Вход в личный кабинет</p>
          </div>

          <div className="d-flex flex-column">
            <input type="text"
              className="container form-login__input my-8"
              placeholder="Введите никнейм"/*  или телефон" */
              name="login" value={userInput.login} onChange={handleChange}
            />
            {requiredField &&
              <div className="text-left text-danger">
                <p className="my-4 f-14">Это поле обязательно</p>
              </div>
            }
            {validUsername &&
              <input type="password"
                className="container form-login__input my-8"
                placeholder="Введите пароль"
                name="password" value={userInput.password} onChange={handleChange}
              />
            }
            <button onClick={validUsername ? submitForm : () => validInput()}
              className="container form-login__submit my-16" type="submit">Продолжить
            </button>
            {error &&
              <div className="text-left text-danger">
                <p className="container px-36 mb-16 f-14">Неверный логин или пароль</p>
              </div>
            }
            {!validUsername && <>
              <NavLink className="text-main text-center mt-8 mb-16 f-13" to="/login/forgot">Забыли пароль?</NavLink>
              <p className="text-center f-12 my-4">Ещё не зарегистрированы?</p>
              <NavLink className="text-main text-center mt-8 mb-16 f-13" to="/register">Зарегистрироваться</NavLink>
            </>
            }
          </div>

        </div>
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
  onLogin: authActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);