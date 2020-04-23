import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyBill, faPlusSquare, faHistory, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

function TabBar() {
  const createLink = () => {
    const userType = localStorage.getItem('userType');
    if (userType === 'consumer') {
      return '/request';
    } return '/offer';
  };

  return (
    <div className="container tabbar d-flex flex-row justify-content-between pt-10 pb-20 fill_w">
      <div className="tabbar__item text-center pb-8">
        <NavLink to="/" activeClassName="tabbar__activeLink text-decoration-none ">
          <FontAwesomeIcon className="tabbar__item--icon text-grey pb-4" icon={faHome} color="" />
          <p className="text-grey">
            Главная
          </p>
        </NavLink>
      </div>
      <div className="tabbar__item text-center pb-8">
        <NavLink to="/deal" activeClassName="tabbar__activeLink text-decoration-none">
          <FontAwesomeIcon className="tabbar__item--icon text-grey pb-4" icon={faMoneyBill} color="" />
          <p className="text-grey">
            Сделки
          </p>
        </NavLink>
      </div>
      <div className="tabbar__item text-center pb-8">
        <NavLink to={createLink()} activeClassName="tabbar__activeLink text-decoration-none">
          <FontAwesomeIcon className="tabbar__item--icon pb-4" icon={faPlusSquare} color="#00BBFF" />
          <p className="tabbar__item--center">
            Создать
          </p>
        </NavLink>
      </div>
      <div className="tabbar__item text-center pb-8 blured">
        <NavLink to="" activeClassName="tabbar__activeLink text-decoration-none">
          <FontAwesomeIcon className="tabbar__item--icon text-grey pb-4" icon={faHistory} color="" />
          <p className="text-grey">
            История
          </p>
        </NavLink>
      </div>
      <div className="tabbar__item text-center pb-8">
        <NavLink to="/cabinet" activeClassName="tabbar__activeLink text-decoration-none">
          <FontAwesomeIcon className="tabbar__item--icon text-grey pb-4" icon={faUserCircle} color="" />
          <p className="text-grey">
            Кабинет
          </p>
        </NavLink>
      </div>

    </div>
  );
}

export default TabBar;
