import * as React from 'react';
import { NavLink } from 'react-router-dom';
import CardItem from 'src/components/molecules/CardItem';
import { CardItemTypes, CardItemGroupTypes } from 'src/components/molecules/CardItem/types';

function CardItemGroup(props: CardItemGroupTypes.IProps): JSX.Element {
  const { items, title, extraTitle } = props;
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
              {...n}
            />
          </React.Fragment>
          );
        })}
    </>
  );
}

export default CardItemGroup;
