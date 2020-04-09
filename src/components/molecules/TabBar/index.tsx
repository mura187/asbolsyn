import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faHome, faStar, faPlusSquare, faHistory, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

function TabBar() {
  return(
    <div className="tabbar d-flex flex-row justify-content-between pt-12 pb-20 fill_w">
      <NavLink to="/" activeClassName="tabbar__activeLink">
        <div className="tabbar__item text-center pb-8 px-8">
          <FontAwesomeIcon className="tabbar__item--icon pb-4" icon={faHome} color="" />
          <p>
            Главная
          </p>
        </div>
      </NavLink>
      <NavLink to="/detail" activeClassName="tabbar__activeLink">
        <div className="tabbar__item text-center pb-8 px-8">
          <FontAwesomeIcon className="tabbar__item--icon pb-4" icon={faStar} color="" />
          <p>
            Сделки
          </p>
        </div>
      </NavLink>
      <NavLink to="/" activeClassName="tabbar__activeLink">
        <div className="tabbar__item text-center pb-8 px-8">
          <FontAwesomeIcon className="tabbar__item--icon pb-4" icon={faPlusSquare} color="#00BBFF" />
          <p className="tabbar__item--center">
            Создать
          </p>
        </div>
      </NavLink>
      <NavLink to="/" activeClassName="tabbar__activeLink">
        <div className="tabbar__item text-center pb-8 px-8">
          <FontAwesomeIcon className="tabbar__item--icon pb-4" icon={faHistory} color="" />
          <p>
            История
          </p>
        </div>
      </NavLink>
      <NavLink to="/cabinet" activeClassName="tabbar__activeLink">
        <div className="tabbar__item text-center pb-8 px-8">
          <FontAwesomeIcon className="tabbar__item--icon pb-4" icon={faUserCircle} color="" />
          <p>
            Кабинет
          </p>
        </div>
      </NavLink>

    </div>
  )
}

export default TabBar;
