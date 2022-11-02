import {
      GoogleMap, Marker, useJsApiLoader
} from '@react-google-maps/api';
import React from 'react';
// Autocomplete,
// DirectionsRenderer,
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// Api key = AIzaSyBB-vUWByWsubtn5vExr3fZuMc08srdHzo
// AIzaSyBB-vUWByWsubtn5vExr3fZuMc08srdHzo 22.33551136777172, 91.81273833914804
const center = { lat: 22.33551136777172, lng: 91.81273833914804 }
const GoogleMapCom = () => {
      const {isLoaded} = useJsApiLoader({
            googleMapsApiKey: process.env.NEXT_APP_GOOGLE_MAPS_API_KEY
      })
      return (
            <div className='gap'>
                  <div className="container">
                        <div style={{ height: '60vh', width: '100%' }}>
                        {
                              isLoaded && 
                                    <GoogleMap center={center} zoom={17} mapContainerStyle={{width:'100%', height:'100%', borderRadius:'10px'}}>
                                          <Marker position={center}/>
                                    </GoogleMap>
                        }
                        </div>
                  </div>
            </div>
      );
};

export default GoogleMapCom;