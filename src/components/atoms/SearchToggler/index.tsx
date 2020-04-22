import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import { SearchTogglerTypes } from './types';

function SearchToggler(props: SearchTogglerTypes.IProps) {
  const { link, title } = props;
  return (
    <div className="search-toggler container mb-8">
      <div className="d-flex flex-row justify-content-between text-main">
        <div className="search-toggler__item p-12 fill_w text-center">
          <NavLink className="text-main text-decoration-none" to={link}>
            <p className="fill_w">
              {title}
            </p>
          </NavLink>
        </div>
        <div className="p-12 fill_w text-center">
          <p className="fill_w text-grey">
            Фильтры
              <FontAwesomeIcon className="ml-8" color="#888888" icon={faFilter} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchToggler;
