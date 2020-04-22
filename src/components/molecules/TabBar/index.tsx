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

  return(
    <div className="container tabbar d-flex flex-row justify-content-between pt-12 pb-20 fill_w">
      <NavLink to="/" activeClassName="tabbar__activeLink text-decoration-none ml-14">
        <div className="tabbar__item text-center pb-8 px-8">
          <FontAwesomeIcon className="tabbar__item--icon ml-6 pb-4" icon={faHome} color="" />
          <p>
            Главная
          </p>
        </div>
      </NavLink>
      <NavLink to="/deal" activeClassName="tabbar__activeLink text-decoration-none">
        <div className="tabbar__item text-center pb-8 px-8">
          <FontAwesomeIcon className="tabbar__item--icon pb-4" icon={faMoneyBill} color="" />
          <p>
            Сделки
          </p>
        </div>
      </NavLink>
      <NavLink to={createLink()} activeClassName="tabbar__activeLink text-decoration-none">
        <div className="tabbar__item text-center pb-8 px-8">
          <FontAwesomeIcon className="tabbar__item--icon ml-8 pb-4" icon={faPlusSquare} color="#00BBFF" />
          <p className="tabbar__item--center">
            Создать
          </p>
        </div>
      </NavLink>
      <NavLink to="" activeClassName="tabbar__activeLink text-decoration-none blured">
        <div className="tabbar__item text-center pb-8 px-8">
          <FontAwesomeIcon className="tabbar__item--icon ml-8 pb-4" icon={faHistory} color="" />
          <p>
            История
          </p>
        </div>
      </NavLink>
      <NavLink to="/cabinet" activeClassName="tabbar__activeLink text-decoration-none">
        <div className="tabbar__item text-center pb-8 px-8">
          <FontAwesomeIcon className="tabbar__item--icon ml-8 pb-4" icon={faUserCircle} color="" />
          <p>
            Кабинет
          </p>
        </div>
      </NavLink>

    </div>
  );
}

export default TabBar;
