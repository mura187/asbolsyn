import * as React from 'react';
// import { Link } from 'react-router-dom';
import CardItem from 'src/components/molecules/CardItem';
import { CardItemTypes, CardItemGroupTypes } from 'src/components/molecules/CardItem/types';

function CardItemGroup(props: CardItemGroupTypes.IProps): JSX.Element {
  const { items } = props;
  return (
    <>
    <h4 className="container mt-40 mb-16">Предложения ({items?.length})</h4>
      {
        items && items.map((n: CardItemTypes.IProps) => {
          return (<React.Fragment key={n.id}>
            {/* <Link key={n.id} to={`/detail/${n.id}`} className="card-group__link"> */}
              <CardItem
                {...n}
              />
            {/* </Link> */}
          </React.Fragment>
          );
        })}
    </>
  );
}

export default CardItemGroup;
