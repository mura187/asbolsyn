import React, { useState } from 'react';
import { YMaps, Map, Placemark, FullscreenControl } from 'react-yandex-maps';

function YandexMap() {
  const [coords, setCoords] = useState(null);
  const coordinates = [50.29760216600768, 57.16326105902972];
  const mapState = { center: { ...coordinates }, zoom: 11 };

  const onMapClick = (event: any) => {
    setCoords(event.get('coords'));
    sessionStorage.setItem('location', JSON.stringify(coords));
  };

  return (
    <YMaps>
      <Map onClick={onMapClick} state={mapState} style={{ width: '100%', height: '10vh', zIndex: 9 }}
        options={{
          suppressMapOpenBlock: true,
        }}
      >
        <Placemark
          geometry={coords || [50.322687, 57.131267]}
        />
        <FullscreenControl />
      </Map>
    </YMaps>
  );
}
export default YandexMap;
