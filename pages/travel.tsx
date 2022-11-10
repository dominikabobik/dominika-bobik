import { NextPage } from "next"
import { About } from "../components/about"
import { NavBar } from "../components/nav-bar"
import { TravelCardLeft } from "../components/travelCardLeft"
import { TravelCardRight } from "../components/travelCardRight"
import styles from '../styles/travel.module.css'
import { dataTravel, travelMarkers } from '../components/data'
import { useRef, useState } from "react"
import Map, { MapRef, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Travel: NextPage = () => {

  const mapRef = useRef<MapRef>(null);
  return (
    <div className={styles.container}>
      <About />
      <div className={styles.mainWrapper}>
        <NavBar />
        <div className={styles.contentsWrapper}>
          <div className={styles.cardsContainer}>
            <div className={styles.text}>
              I love trvelling and exploring new cultures. Checkout places I have visited so far!
            </div>
            <div className={styles.mapWrapper}>
              <Map
                initialViewState={{
                  longitude: 0,
                  latitude: 30,
                  zoom: 1
                }}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/light-v10"
                renderWorldCopies={false}
                attributionControl={false}
              >
                {
                  travelMarkers.map(marker => {

                    return (
                      <Marker
                        key={`${marker.lon}+${marker.lat}`}
                        longitude={marker.lon}
                        latitude={marker.lat}
                        color='black'>

                        {/* <Popup
                          onClose={() => setShowPopup(false)}
                          longitude={marker.lon}
                          latitude={marker.lat}
                          anchor="center"
                          closeButton={true}
                          style={{ backgroundColor: 'red', width: '50px', height: '50px' }}
                        >
                          {marker.city}
                        </Popup> */}

                      </Marker>)
                  })
                }
              </Map>
            </div>
            <div className={styles.text}>
              Here are some shots from my adventures:
            </div>
            {dataTravel.map((e, i) => {
              if (i % 2 == 0) return <TravelCardLeft key={e.title} title={e.title} time={e.time} image={`/travel/${e.image}`} />
              else return <TravelCardRight key={e.title} title={e.title} time={e.time} image={`/travel/${e.image}`} />
            })}
          </div>
        </div>
      </div>
    </div >
  )
}
export default Travel