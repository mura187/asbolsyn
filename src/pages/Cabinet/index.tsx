import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import TabBar from 'src/components/molecules/TabBar';
import { CabinetPageTypes } from './types';
import { NavLink } from 'react-router-dom';

function CabinetPage(props: CabinetPageTypes.IProps) {
  !sessionStorage.hasOwnProperty('userId') && window.location.replace('/login');

  const logout = () => {
    window.location.replace('/');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
  };

  const isConsumer = localStorage.getItem('userType') === 'consumer';
  const [btnUserType, setBtnUserType] = useState(isConsumer ? 'производителя' : 'потребителя');
  const { userInfo } = props;

  const changeType = () => {
    if (!isConsumer) {
      localStorage.setItem('userType', 'consumer');
      setBtnUserType('потребителя');
    } else {
      localStorage.setItem('userType', 'producer');
      setBtnUserType('производителя');
    }
    window.location.replace('/');
  };

  return (
    <div>
      <div className="container bg-white base-shadow">
        <div className="cabinet__user d-flex flex-row justify-content-between">
          <div>
            <p className="f-17 my-15"><FontAwesomeIcon className="f-15 mr-4" icon={faUserAlt} />
              {userInfo && userInfo.name} {userInfo && userInfo.surname} ({userInfo.user_name})
            </p>
            <p className="f-15 pb-12">Кабинет №{userInfo.id}</p>
            <p className="f-15 pb-12">+7{userInfo.phone}</p>
          </div>
          <p onClick={logout} className="text-danger my-15 cursor-pointer">Выход</p>
        </div>
        <div className="d-flex justify-content-between flex-column">
        <NavLink className="text-decoration-none" to="/?my_items">
          <div className="text-main border-top cabinet__link f-15">
            <p className="my-20 px-12 cursor-pointer">Мои текущие предложения</p>
          </div>
        </NavLink>
          <div className="text-main border-top cabinet__link f-15">
            <p className="my-20 px-12 cursor-pointer text-grey">История</p>
          </div>
          <NavLink className="text-decoration-none" to="/cabinet/password">
            <div className="text-main border-top cabinet__link f-15">
              <p className="my-20 px-12 cursor-pointer">Сменить пароль</p>
            </div>
          </NavLink>
          <div className="text-main border-bottom border-top cabinet__link f-15" onClick={changeType}>
            <p className="my-20 px-12 cursor-pointer">Переключиться на {btnUserType}</p>
          </div>
        </div>
      </div>
      <TabBar />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return ({
    userInfo: state.authReducer.userInfo,
  });
};

export default connect(mapStateToProps)(CabinetPage);
