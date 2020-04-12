import React from 'react';
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

  const { userInfo } = props;

  console.log(userInfo);

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
          <div className="text-main border-top cabinet__link f-15">
            <p className="my-20 px-12 cursor-pointer">Мои текущие заявки</p>
          </div>
          <div className="text-main border-top cabinet__link f-15">
            <p className="my-20 px-12 cursor-pointer">История</p>
          </div>
          <NavLink className="text-decoration-none" to="/cabinet/password">
            <div className="text-main border-top cabinet__link f-15">
              <p className="my-20 px-12 cursor-pointer">Сменить пароль</p>
            </div>
          </NavLink>
          <div className="text-main border-bottom border-top cabinet__link f-15">
            <p className="my-20 px-12 cursor-pointer">Переключиться на производителя</p>
          </div>
        </div>
      </div>
      <TabBar />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return ({
    // items: state.itemReducer.items.data,
    userInfo: state.authReducer.userInfo,
  });
};

const mapDispatchToProps = {
  // getItems: itemActions.getItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(CabinetPage);
