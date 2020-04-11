import React from 'react';
import TabBar from 'src/components/molecules/TabBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

function CabinetPage() {
  const logout = () => {
    window.location.replace('/login');
    sessionStorage.removeItem('token');
  }
  return (
    <div>
      <div className="bg-white container">
        <div className="cabinet__user d-flex flex-row justify-content-between">
          <div>
            <p className="f-17 my-15"><FontAwesomeIcon className="f-15 mr-4" icon={faUserAlt} />
              Мурат
            </p>
            <p className="f-15 pb-12">Кабинет №228</p>
          </div>
          <p onClick={logout} className="text-danger my-15 cursor-pointer">Выход</p>
        </div>
        <div className="d-flex justify-content-between flex-column">
          <div className="text-main border-top cabinet__link f-15">
            <p className="my-20 px-12 cursor-pointer">История</p>
          </div>
          <div className="text-main border-top cabinet__link f-15">
            <p className="my-20 px-12 cursor-pointer">Сменить пароль</p>
          </div>
          <div className="text-main border-bottom border-top cabinet__link f-15">
            <p className="my-20 px-12 cursor-pointer">Переключиться на производителя</p>
          </div>
          <div className="text-main border-bottom cabinet__link f-15">
            <p className="my-20 px-12 cursor-pointer">История</p>
          </div>
        </div>
      </div>
      <TabBar />
    </div>
  );
}

export default CabinetPage;
