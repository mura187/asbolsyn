import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import itemActions from 'src/store/item/actions';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import SearchToggler from 'src/components/atoms/SearchToggler';
import TabBar from 'src/components/molecules/TabBar';
import { MapPageTypes } from './types';

function MapPage(props: MapPageTypes.IProps) {
  const { places, getItems } = props;
  const coordinates = [50.322687, 57.131267];
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      getItems && getItems();
    }
  },
  [didMount, getItems],
  );

  const mapState = { center: { ...coordinates }, zoom: 11 };

  const mapModules = [
    'templateLayoutFactory',
    'layout.ImageWithContent',
    'geoObject.addon.hint',
    'geoObject.addon.balloon',
    'control.ZoomControl',
  ];

  return (<>
      <SearchToggler link="/" title="К списку" />
      <YMaps>
        <Map modules={mapModules} state={mapState} style={{ width: '100%', height: '100vh', zIndex: 9 }}
          options={{
            suppressMapOpenBlock: true,
          }}
        >
          {places && places.data.map((n: any) =>
            <Placemark
              geometry={n.location}
              defaultProperties={{
                balloonContentBody: `
                  <b>${n.name} | ${n.price} ₸</b><br/>
                  <i>${n.location}</i>
                `,
              }}
            />,
          )}
        </Map>
      </YMaps>
    <TabBar />
  </>);
}

const mapStateToProps = (state: any) => {
  return ({
    places: state.itemReducer.places,
  });
};

const mapDispatchToProps = {
  getItems: itemActions.getItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
