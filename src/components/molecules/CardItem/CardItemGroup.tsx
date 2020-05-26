import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CardItem from 'src/components/molecules/CardItem';
import { CardItemTypes, CardItemGroupTypes } from 'src/components/molecules/CardItem/types';
import authActions from 'src/store/auth/actions';
import { connect } from 'react-redux';

function CardItemGroup(props: CardItemGroupTypes.IProps): JSX.Element {
  const { items, title, extraTitle, isDeal, isComplete, getAllUsers, users = [] } = props;
  useEffect(
    () => {
      getAllUsers && getAllUsers();
    },
    [],
  );

  const getRating = (producerId: number) => {
    if (!users) return;
    if (!Array.isArray(users)) return;
    return users.find((item:any) => item.id === producerId).rating || 5;
  };
  return (
    <>
      <div className="container d-flex flex-row justify-content-between">
        <h4 className="mt-40 mb-16">{items?.length === 0 ? 'Ничего не найдено' : `${title} (${items?.length})` } </h4>
        { extraTitle &&
          <NavLink to={extraTitle.link}>
            <h4 className="mt-40 mb-16 text-main white-space-pre">{extraTitle.title}</h4>
          </NavLink>
        }
      </div>
      {
        items && items.map((n: CardItemTypes.IProps) => {
          return (<React.Fragment key={n.id}>
            <CardItem
              isComplete={isComplete}
              isDeal={isDeal}
              rating={getRating(n.producerId)}
              {...n}
            />
          </React.Fragment>
          );
        })}
    </>
  );
}

const mapStateToProps = (state: any) => {
  return ({
    users: state.authReducer.users.data,
  });
};

const mapDispatchToProps = {
  getAllUsers: authActions.getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardItemGroup);
