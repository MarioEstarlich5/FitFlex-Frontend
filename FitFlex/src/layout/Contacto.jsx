import { useState, useEffect } from 'react';
import '../App.css';
import "leaflet/dist/leaflet.css";
import { Marker, Popup, useMapEvents, MapContainer, TileLayer } from "react-leaflet";
import  Footer  from './Footer';

export const Contacto = () => {

  const [position, setPosition] = useState({lat: 41.231391, lng: 1.728118});
  
  
  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        map.flyTo(position, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>Nosotros estamos aquí</Popup>
      </Marker>
    )
  }  

  return (
    <>
    
      <div className='d-flex justify-content-center align-items-center mb-5'>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
        <Footer className='mt-5'/>
      </div>
    </>
  )
}