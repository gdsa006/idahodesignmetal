import React, { useEffect, useState } from 'react';

const Location = () => {
  const [location, setLocation] = useState('Idaho');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCf_NYKpAnQhhXqtbkUOMdA_cxAHcrnY0c`
        )
          .then((response) => response.json())
          .then((data) => {
            const locality = data.results[0].address_components.find(
              (component) => component.types.includes('locality')
            );
            if (locality) {
              setLocation(locality.long_name);
            }
          })
          .catch((error) => console.error('Error fetching location:', error));
      });
    }
  }, []);

  return <span>{location}</span>;
};

export default Location;
