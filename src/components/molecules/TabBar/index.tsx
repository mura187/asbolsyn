import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faPlusSquare, faHistory, faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import { TabBarTypes } from './types';
import './index.scss';

function TabBar() {
  return(
    <div className="tabbar d-flex flex-row justify-content-between pt-12 pb-20 fill_w">
      <div className="tabbar__item text-center">
        <FontAwesomeIcon className="tabbar__item--icon" icon={faHome} color="" />
        <p>
          Главная
        </p>
      </div>
      <div className="tabbar__item text-center">
        <FontAwesomeIcon className="tabbar__item--icon" icon={faStar} color="" />
        <p>
          Главная
        </p>
      </div>
      <div className="tabbar__item text-center">
        <FontAwesomeIcon className="tabbar__item--icon" icon={faPlusSquare} color="#00BBFF" />
        <p>
          Создать
        </p>
      </div>
      <div className="tabbar__item text-center">
        <FontAwesomeIcon className="tabbar__item--icon" icon={faHistory} color="" />
        <p>
          История
        </p>
      </div>
      <div className="tabbar__item text-center">
        <FontAwesomeIcon className="tabbar__item--icon" icon={faUserCircle} color="" />
        <p>
          Кабинет
        </p>
      </div>

    </div>
  )
}

export default TabBar;
