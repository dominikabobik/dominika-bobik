import { NextPage } from "next"
import { About } from "../components/about"
import { NavBar } from "../components/nav-bar"
import { TravelCardLeft } from "../components/travelCardLeft"
import { TravelCardRight } from "../components/travelCardRight"
import styles from '../styles/travel.module.css'
import { dataTravel } from '../components/data'
import { useRef } from "react"
import Map, { MapRef, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Travel: NextPage = () => {


  const mapRef = useRef<MapRef>(null);

  return (
    <div className={styles.container}>
      <About />
      <div className={styles.mainWrapper}>
        <NavBar />
        <div className={styles.contentsWrapper}>
          <div className={styles.cardsContainer}>
            <div className={styles.mapWrapper}>
              <Map
                initialViewState={{
                  longitude: 40,
                  latitude: 50,
                  zoom: 0
                }}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/light-v10"
              >
                <Marker longitude={-100} latitude={40} anchor="bottom" color='black'>
                </Marker>
              </Map>
            </div>
            {dataTravel.map((e, i) => {
              if (i % 2 == 0) return <TravelCardLeft title={e.title} time={e.time} image={`/travel/${e.image}`} />
              else return <TravelCardRight title={e.title} time={e.time} image={`/travel/${e.image}`} />
            })}
          </div>
        </div>
      </div>
    </div >
  )
}
export default Travel