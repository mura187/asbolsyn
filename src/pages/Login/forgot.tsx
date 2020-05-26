import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import authActions from 'src/store/auth/actions';

import { ForgotPageTypes } from './types';
import './index.scss';

function Forgot(props: ForgotPageTypes.IProps) {

  const [validPhone, setValidPhone] = useState(false);
  const [requiredField, setRequiredField] = useState(false);
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [recoverByUsername, setRecoverByUsername] = useState(false);
  const [phone, setPhone] = useState('');
  const [smsSent, setSmsSent] = useState(false);
  const [showUserNumber, setShowUserNumber] = useState(false);
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

  const { onCheckLogin, onCheckCode, onPasswordSet, userNumber } = props;

   // pseudo-validation
  const validInput = () => {
    if (phone.length === 10 || userInput.userName.length !== 0) {
      setValidPhone(true);
      setRequiredField(false);
      submitLogin();
      setSmsSent(true);
    } else setRequiredField(true);
  };

  const handleChange = (e: any) => {
    const { name } = e.target;
    const newValue = e.target.value;
    const formattedNumber = e.target.value.replace(/\D/g, '').substr(1);
    setUserInput({ [name]: newValue });
    setPhone(formattedNumber);
  };

  const submitLogin = () => {
    onCheckLogin && onCheckLogin(
      recoverByUsername ? { login: userInput.userName } : { login: phone },
      {
        onSuccess: () => (setShowUserNumber(true)),
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

  const submitPassword = () => {
    onPasswordSet && onPasswordSet(
      {
        password: userInput.checkedPassword,
      },
      {
        onSuccess: () => window.location.replace('/login'),
        onError: () => (setError(true)),
      },
    );
  };

  return (
    <div>
      <h1 className="main-logo text-center f-32">As Bolsyn</h1>
      <div className="row align-items-center justify-content-center mt-180">
        <div className="form-login container px-20">
          <div className="text-left">
            <p className="my-20 f-14">Восстановление пароля</p>
          </div>

          <div className="d-flex flex-column">
            {!proceed ? <>
              {!showUserNumber &&
                <p onClick={() => !recoverByUsername ? setRecoverByUsername(true) : setRecoverByUsername(false)}
                  className="text-main cursor-pointer f-14">
                  По {!recoverByUsername ? 'нику' : 'телефону'}
                </p>
              }
              { showUserNumber && <p className="text-danger f-14 mb-4">SMS отправлено на +7{userNumber}</p>}
              {!recoverByUsername ?
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
                :
                <input type="text"
                  className="container form-login__input my-8"
                  placeholder="Введите никнейм"
                  name="userName" value={userInput.userName} onChange={handleChange}
                />
              }
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
                <button onClick={validPhone ? submitLogin : () => validInput()}
                  className="container form-login__submit my-16" type="submit">Отправить SMS
                </button>
              }
            </>
              : <>
                <div className="container align-self-start text-grey cursor-pointer mt-18 position-absolute r-72"
                  onClick={showPass ? () => (setShowPass(false)) : () => (setShowPass(true))}>
                  {showPass ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
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
                <button onClick={submitPassword}
                  disabled={userInput.password !== userInput.checkedPassword}
                  className="container form-login__submit my-16" type="submit">Восстановить
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

const mapStateToProps = (state: any) => {
  return ({
    userNumber: state.authReducer.userNumber,
  });
};

const mapDispatchToProps = {
  onCheckLogin: authActions.recoverCheckLogin,
  onCheckCode: authActions.recoverCheckCode,
  onPasswordSet: authActions.recoverNewPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);
