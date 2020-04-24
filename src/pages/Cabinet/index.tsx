import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import itemsActions from 'src/store/item/actions';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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

  const [didMount, setDidMount] = useState(false);
  const isConsumer = localStorage.getItem('userType') === 'consumer';
  const [btnUserType, setBtnUserType] = useState(isConsumer ? 'производителя' : 'потребителя');
  const { userInfo, myItems, myRequests, getMyRequests, getMyItems } = props;

  const changeType = () => {
    if (!isConsumer) {
      localStorage.setItem('userType', 'consumer');
      setBtnUserType('потребителя');
    } else {
      localStorage.setItem('userType', 'producer');
      setBtnUserType('производителя');
    }
    window.location.reload();
  };

  const isProducer = localStorage.getItem('userType') === 'consumer';

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      isProducer ? getMyItems && getMyItems() : getMyRequests && getMyRequests();
    }
  },
    [didMount, isProducer, getMyItems, getMyRequests],
  );

  return (
    <div>
      <div className="container bg-white base-shadow">
        <div className="cabinet__user d-flex flex-row justify-content-between">
          <div>
            <p className="f-17 my-15"><FontAwesomeIcon className="f-15 mr-16" icon={faUserAlt} />
              {userInfo && userInfo.name} {userInfo && userInfo.surname} ({userInfo.user_name})
            </p>
            <p className="f-15 pb-12">Кабинет №{userInfo.id}</p>
            <p className="f-15 pb-12">+7{userInfo.phone}</p>
          </div>
          <p onClick={logout} className="text-danger my-15 cursor-pointer">Выход</p>
        </div>
        <div className="d-flex justify-content-between flex-column">
        <NavLink className="text-decoration-none" to="/?my_items">
          <div className="d-flex flex-row justify-content-between text-main border-top cabinet__link f-15">
            <p className="my-20 cursor-pointer">Мои текущие предложения</p>
            <FontAwesomeIcon className="f-15 mr-20 align-self-center text-black" icon={faChevronRight} />
          </div>
        </NavLink>
        <NavLink className="text-decoration-none" to={
          (!isProducer && myItems.length === 0) ? '#' : (isProducer && myRequests.length === 0) ? '#' : '/detail'}>
          <div className="d-flex flex-row justify-content-between  border-top cabinet__link f-15">
            <p className={classNames(['my-20 cursor-pointer',
              (!isProducer && myItems.length === 0) ? 'text-grey' : (isProducer && myRequests.length === 0) ? 'text-grey' : 'text-main'])}
            > Редактировать { !isProducer ? 'предложения' : 'заказы'} (
              {!isProducer ? myItems.length : myRequests.length})</p>
              <FontAwesomeIcon className="f-15 mr-20 align-self-center text-black" icon={faChevronRight} />
          </div>
        </NavLink>
          <div className="d-flex flex-row justify-content-between  text-main border-top cabinet__link f-15">
            <p className="my-20 cursor-pointer text-grey">История</p>
            {/* <FontAwesomeIcon className="f-15 mr-20 align-self-center text-black" icon={faChevronRight} /> */}
          </div>
          <NavLink className="text-decoration-none" to="/cabinet/password">
            <div className="d-flex flex-row justify-content-between  text-main border-top cabinet__link f-15">
              <p className="my-20 cursor-pointer">Сменить пароль</p>
              <FontAwesomeIcon className="f-15 mr-20 align-self-center text-black" icon={faChevronRight} />
            </div>
          </NavLink>
          <div className="d-flex flex-row justify-content-between  text-main border-bottom border-top cabinet__link f-15" onClick={changeType}>
            <p className="my-20 cursor-pointer">Переключиться на {btnUserType}</p>
            <FontAwesomeIcon className="f-15 mr-20 align-self-center text-black" icon={faChevronRight} />
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
    myItems: state.itemReducer.myItems.data,
    myRequests: state.itemReducer.myRequests.data,
  });
};

const mapDispatchToProps = {
  getMyItems: itemsActions.getMyItems,
  getMyRequests: itemsActions.getMyRequests,
};

export default connect(mapStateToProps, mapDispatchToProps)(CabinetPage);
