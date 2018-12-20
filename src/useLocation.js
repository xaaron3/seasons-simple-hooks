import { useState, useEffect } from 'react';

export default () => {
     // first ele of array is value of state prop, 2nd is a function to change it. 
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);
  // empty array means only run once during entire lifecycle of component

  return [lat, errorMessage]; // array not best approach, but is community convention. objects better. 
}