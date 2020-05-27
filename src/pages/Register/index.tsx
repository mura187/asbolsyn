import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import authActions from 'src/store/auth/actions';

import { LoginPageTypes } from './types';
import './index.scss';

function Register(props:LoginPageTypes.IProps) {

  const [validPhone, setValidPhone] = useState(false);
  const [requiredField, setRequiredField] = useState(false);
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [phone, setPhone] = useState('');
  const [smsSent, setSmsSent] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [userInput, setUserInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      phone: '',
      code: '',
      userName: '',
      password: '',
      checkedPassword: '',
    },
  );

  const { onCheckPhone, onCheckCode, onRegister } = props;

  const handleChange = (e: any) => {
    const { name } = e.target;
    const newValue = e.target.value;
    const formattedNumber = e.target.value.replace(/\D/g, '').substr(1);
    setUserInput({ [name]: newValue });
    setPhone(formattedNumber);
  };
  const submitPhone = () => {
    onCheckPhone && onCheckPhone(
      { phone },
      {
        onError: () => (setError(true)),
      },
      );
  };

  const submitUser = () => {
    onRegister && onRegister(
      { user_name: userInput.userName,
        password: userInput.password,
      },
      {
        onSuccess: () => window.location.replace('/cabinet'),
        onError: () => (setError(true)),
      },
      );
  };

  const submitCode = (e: any) => {
    e.preventDefault();
    onCheckCode && onCheckCode(
      { code: userInput.code },
      {
        onSuccess: () => (setProceed(true)),
      },
      );
  };
  // pseudo-validation
  const validInput = () => {
    if (phone.length === 10) {
      setValidPhone(true);
      setRequiredField(false);
      submitPhone();
      setSmsSent(true);
    } else setRequiredField(true);
  };

  return (
    <div>
      <h1 className="main-logo text-center f-32">Fresta</h1>
      <div className="row align-items-center justify-content-center mt-180">
        <div className="form-login container px-20">
          <div className="text-left">
            <p className="my-20 f-14">Регистрация</p>
          </div>

          <div className="d-flex flex-column">
            {/* <input type="text"
              className="container form-login__input my-8"
              placeholder="Введите телефон"
              name="phone" value={userInput.phone} onChange={handleChange}
            /> */}
            {!proceed ? <>
              <InputMask
                id="phone"
                name="phone"
                className="container form-login__input my-8 f-15"
                alwaysShowMask={true}
                onChange={(e: any) => handleChange(e)}
                placeholder="Введите телефон"
                mask="+7 (799) 999-99-99"
                maskChar="_"
                value={userInput.phone}
              />
              {requiredField &&
                <div className="text-left text-danger">
                  <p className="my-4 f-14">Это поле обязательно</p>
                </div>
              }
              {validPhone && <>
                <input type="number"
                  className="container form-login__input my-8"
                  placeholder="Введите код"
                  name="code" value={userInput.code} onChange={handleChange}
                />
                <button onClick={submitCode}
                  className="container form-login__submit my-16" type="submit">Подтвердить
                </button>
              </>}
              {!smsSent &&
                <button onClick={validPhone ? submitPhone : () => validInput()}
                  className="container form-login__submit my-16" type="submit">Отправить SMS
                </button>
              }
            </>
            : <>
              <input type="text"
                className="container form-login__input my-8"
                placeholder="Придумайте никнейм"
                name="userName" value={userInput.userName} onChange={handleChange}
              />
              <div className="container align-self-start text-grey cursor-pointer mt-18 position-absolute r-72"
                onClick={showPass ? () => (setShowPass(false)) : () => (setShowPass(true))}>
                { showPass ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} /> }
              </div>
              <input type="password"
                className="container form-login__input my-8"
                placeholder="Придумайте пароль"
                name="password" value={userInput.password} onChange={handleChange}
              />
              <input type="password"
                className="container form-login__input my-8"
                placeholder="Повторите пароль"
                name="checkedPassword" value={userInput.checkedPassword} onChange={handleChange}
              />
              <button onClick={submitUser}
                disabled={userInput.password !== userInput.checkedPassword}
                className="container form-login__submit my-16" type="submit">Зарегистрироваться
              </button>
            </>}

            {error &&
              <div className="text-left text-danger">
                <p className="container px-36 mb-16 f-14">Неверный логин или пароль</p>
              </div>
            }
            {!validPhone && <>
              <p className="text-center f-12 my-4">Уже зарегистрированы?</p>
              <NavLink className="text-main text-center mt-8 mb-16 f-13" to="/login">Авторизоваться</NavLink>
            </>
            }
          </div>

        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  onCheckPhone: authActions.checkPhone,
  onCheckCode: authActions.checkCode,
  onRegister: authActions.register,
};

export default connect(null, mapDispatchToProps)(Register);
