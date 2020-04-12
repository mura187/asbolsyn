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
                // hintContent: n.name,
                balloonContentBody: `
                  <b>${n.name} | ${n.price} ₸</b><br/>
                  <i>${n.location}</i>
                `,
              }}
            />,
          )}
          {/* <Placemark
            geometry={coordinates}
            // properties={{
              // hintContent: address || 'Location',
            // }}
          /> */}
          {/* <Placemark
            geometry={coordinate2}
            defaultProperties={{
              balloonContentBody: `
                                        <b>${'TITLE'}</b><br/>
                                        <i>${'ADDRESS'}</i>
                                      `,
            }}
            properties={{
              balloonContentBody: `
                <a href=/fitness/${'ID'}>
                </a><br />
                <a href=/fitness/${'ID'}>
                    <h4 class="font-weight-bold text-dark">${'TITLE'}</h4>
                </a>
                <p class="section-map__balloon-text">${'ADDRESS'}</p>
                <p class="section-map__balloon-text">${'BODY'}</p>
                <a class="d-flex align-items-center" href=/fitness/${'ID'}>
                  <h4 class="section-map__fitness-link pt-1 mr-1">Перейти к залу</h4>
                  <i class="text-primary fas fa-chevron-down fa-rotate-270"></i>
                </a>
              `,
            }} 
            options={{
              iconLayout: 'default#image',
              iconImageHref: 'images/icons/placemark.svg',
              iconImageSize: [36, 36],
              iconImageOffset: [-18, -36],
              // hasHint: true,
              // hasBaloon: true,
            }}
          />
          */}
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
