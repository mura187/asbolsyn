import * as React from 'react';
import { NavLink } from 'react-router-dom';
import CardItem from 'src/components/molecules/CardItem';
import { CardItemTypes, CardItemGroupTypes } from 'src/components/molecules/CardItem/types';

function CardItemGroup(props: CardItemGroupTypes.IProps): JSX.Element {
  const { items, title } = props;
  return (
    <>
      <h4 className="container mt-40 mb-16">{title} ({items?.length})</h4>
      {
        items && items.map((n: CardItemTypes.IProps) => {
          return (<React.Fragment key={n.id}>
            <NavLink to={`/?user=${n.producerId}`}>
            <CardItem
              {...n}
            />
            </NavLink>
          </React.Fragment>
          );
        })}
    </>
  );
}

export default CardItemGroup;
