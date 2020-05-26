import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import itemActions from 'src/store/item/actions';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';
import SearchToggler from 'src/components/atoms/SearchToggler';
import TabBar from 'src/components/molecules/TabBar';
import PlacemarkIcon from 'src/assets/images/icons/placemark.svg';
import { MapPageTypes } from './types';

function MapPage(props: MapPageTypes.IProps) {

  const isConsumer = () => {
    if (localStorage.getItem('userType') === 'consumer') {
      return places;
    }
    return placesRequests;
  };

  const { places, placesRequests, getRequests, getItems } = props;
  const [didMount, setDidMount] = useState(false);
  const [latitude, setLatitude] = useState(50.322687);
  const [longitude, setLongitude] = useState(57.131267);
  const coordinates = [latitude, longitude];
  const SEARCH_RADIUS_IN_METERS = 1000;

  const getMyLocation = () => {
    let location = null;
    if (window.navigator && window.navigator.geolocation) {
      location = window.navigator.geolocation;
    }
    if (location) {
      location.getCurrentPosition((position: any) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  };

  useEffect(() => {
    if (!didMount) {
      getMyLocation();
      setDidMount(true);
      getItems && getItems();
      getRequests && getRequests();
    }
  },
  [didMount, getItems, getRequests],
  );

  console.log(placesRequests);

  const mapState = { center: { ...coordinates }, zoom: 14 };

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
          <Circle
            geometry={[
              [latitude, longitude],
              SEARCH_RADIUS_IN_METERS,
            ]}
            options={{
              fillColor: '#00BBFF',
              strokeColor: '#00BBFF',
              fillOpacity: 0.1,
              strokeOpacity: 0.5,
              strokeWidth: 3,
            }}
          />
          { isConsumer().data.map((n: any) => <>
            <Placemark
              options={{
                iconLayout: 'default#image',
                iconImageHref: PlacemarkIcon,
                iconImageSize: [30, 42],
                iconImageOffset: [-3, -42],
              }}
              geometry={n.location}
              defaultProperties={{
                balloonContentBody: `
                  <b>${n.name} | ${n.price} ₸</b><br/>
                  <p>${n.description}</p>
                  <p>@${n.consumerName}</p>
                `,
              }}
            />
          </>,
          )}
        </Map>
      </YMaps>
    <TabBar />
  </>);
}

const mapStateToProps = (state: any) => {
  return ({
    places: state.itemReducer.places,
    placesRequests: state.itemReducer.placesRequests,
  });
};

const mapDispatchToProps = {
  getItems: itemActions.getItems,
  getRequests: itemActions.getRequests,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
