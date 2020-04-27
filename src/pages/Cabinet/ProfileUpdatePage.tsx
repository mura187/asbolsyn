import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import authActions from 'src/store/auth/actions';

import TabBar from 'src/components/molecules/TabBar';

import { ProfilePageTypes } from 'src/pages/Cabinet/types';
import './index.scss';

function ProfileUpdate(props: ProfilePageTypes.IProps) {
  const [userInput, setUserInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      userName: '',
      name: '',
      surname: '',
      city: '',
    },
  );

  const { onUpdateProfile, userInfo } = props;

  const handleChange = (e: any) => {
    const { name } = e.target;
    const newValue = e.target.value;
    setUserInput({ [name]: newValue });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    onUpdateProfile && onUpdateProfile(
      {
        user_name: userInput.userName,
        name: userInput.name,
        surname: userInput.surname,
        city: userInput.city,
      },
      {
        onError: () => alert('error occured'),
      },
    );
  };

  return (
    <div>
      <h1 className="main-logo text-center f-32">As Bolsyn</h1>
      <div className="row align-items-center justify-content-center mt-180">
        <div className="profile-update container bg-white base-shadow">
          <div className="text-left">
            <p className="container my-20 f-14">Обновить данные</p>
          </div>

          <div className="d-flex flex-column container ">
            <div className="d-flex flex-column my-4">
              <p className="text-black f-14">Никнейм</p>
              <input required type="text"
                className="container my-8"
                placeholder={userInfo?.user_name}
                name="userName" value={userInput.userName} onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-column my-4">
              <p className="text-black f-14">Имя</p>
              <input required type="text"
                className="container my-8"
                placeholder={userInfo?.name}
                name="name" value={userInput.name} onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-column my-4">
              <p className="text-black f-14">Фамилия</p>
              <input required type="text"
                className="container my-8"
                placeholder={userInfo?.surname}
                name="surname" value={userInput.surname} onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-column my-4">
              <p className="text-black f-14">Город</p>
              <input required type="text"
                className="container my-8"
                placeholder={userInfo?.city}
                name="city" value={userInput.city} onChange={handleChange}
              />
            </div>
            <button
              onClick={submitForm}
              className="container update-password__submit mt-16 mb-40" type="submit">Сохранить
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
    userInfo: state.authReducer.userInfo,
  });
};

const mapDispatchToProps = {
  onUpdateProfile: authActions.updateProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdate);
