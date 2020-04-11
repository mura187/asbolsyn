import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import authActions from 'src/store/auth/actions';

import TabBar from 'src/components/molecules/TabBar';

import { PasswordPageTypes } from 'src/pages/Cabinet/types';

function Password(props: PasswordPageTypes.IProps) {
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [userInput, setUserInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      oldPassword: '',
      newPassword: '',
      checkedPassword: '',
    },
  );

  const { onUpdatePassword } = props;

  const handleChange = (e: any) => {
    const { name } = e.target;
    const newValue = e.target.value;
    setUserInput({ [name]: newValue });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    if (userInput.newPassword.length > 8 && userInput.newPassword === userInput.checkedPassword) {
      onUpdatePassword && onUpdatePassword(
        {
          old_password: userInput.oldPassword,
          new_password: userInput.checkedPassword,
        },
        {
          // onError: () => (setError(true)),
        },
      );
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h1 className="main-logo text-center f-32">As Bolsyn</h1>
      <div className="row align-items-center justify-content-center mt-180">
        <div className="update-password container bg-white base-shadow">
          <div className="text-left">
            <p className="container my-20 f-14">Смена пароля</p>
          </div>

          <div className="d-flex flex-column container ">
            <input required type={showPass ? 'text' : 'password'}
              className="container my-8"
              placeholder="Введите старый пароль"
              name="oldPassword" value={userInput.oldPassword} onChange={handleChange}
            />
            <div className="text-grey cursor-pointer my-8"
              onClick={showPass ? () => (setShowPass(false)) : () => (setShowPass(true))}>
              показать пароль
            </div>
            <input required type={showPass ? 'text' : 'password'}
              className="container my-8"
              placeholder="Введите новый пароль"
              name="newPassword" value={userInput.newPassword} onChange={handleChange}
            />
            <input required type={showPass ? 'text' : 'password'}
              className="container my-8"
              placeholder="Повторите новый пароль"
              name="checkedPassword" value={userInput.checkedPassword} onChange={handleChange}
            />
            {error &&
              <p className="text-danger">
                Введенные новые пароли не совпадают либо неправильный старый пароль
              </p>
            }
            <button
              onClick={submitForm}
              className="container update-password__submit mt-16 mb-40" type="submit">Сменить
            </button>
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
  onUpdatePassword: authActions.updatePassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(Password);
