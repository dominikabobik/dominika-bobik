import { NextPage } from "next"
import { About } from "../components/about"
import { NavBar } from "../components/nav-bar"
import { TravelCardLeft } from "../components/travelCardLeft"
import { TravelCardRight } from "../components/travelCardRight"
import styles from '../styles/travel.module.css'
import { dataTravel, travelMarkers } from '../components/data'
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { NextPageContext } from 'next'
import { MpSharp } from "@mui/icons-material"
import mapboxgl from 'mapbox-gl';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

interface Marker {
  lon: number
  lat: number
}

interface Body {
  q: string
  limit: number
  // proximity: string
}

Travel.getInitialProps = async (ctx: NextPageContext) => {
  let markers: Marker[] = []
  let reqBody: Body[] = []

  travelMarkers.forEach(el => {
    reqBody.push({ q: el.city + ', ' + el.country, limit: 1 })
  })

  const res = await fetch(`https://api.mapbox.com/search/geocode/v6/batch?access_token=${process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}`, {
    method: 'POST',
    body: JSON.stringify(reqBody)
  })
  const json = await res.json()

  console.log(json.batch)
  json.batch.forEach((el: { features: { geometry: { coordinates: any } }[] }) => {
    const coordinates = el.features[0].geometry.coordinates
    markers.push({ lon: coordinates[0], lat: coordinates[1] })
  })

  return { markers: markers }
}

export default function Travel({ markers }: { markers: Marker[] }) {

  // useEffect(() => {
  //   mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

  //   const monument = [-77.0353, 38.8895];
  //   mapRef.current = new mapboxgl.Map({
  //     container: mapContainerRef.current,
  //     style: 'mapbox://styles/mapbox/light-v11',
  //     center: monument,
  //     zoom: 15
  //   });

  //   const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  //     'Construction on the Washington Monument began in 1848.'
  //   );

  //   new mapboxgl.Marker(markerRef.current)
  //     .setLngLat(monument)
  //     .setPopup(popup)
  //     .addTo(mapRef.current);

  //   return () => mapRef.current.remove();
  // }, []);

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.mainWrapper}>
        <div className={styles.aboutWrapper}><About /></div>
        <div className={styles.contentsWrapper}>
          <div className={styles.cardsContainer}>
            <div className={styles.text}>
              I love travelling and exploring new cultures. Checkout places I have visited so far!
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
                  markers.map(marker => {

                    return (
                      <Marker
                        key={`${marker.lon}+${marker.lat}`}
                        longitude={marker.lon}
                        latitude={marker.lat}
                        color='black'>

                        {/* <Popup

                          // onClose={() => setShowPopup(false)}
                          longitude={marker.lon}
                          latitude={marker.lat}
                          anchor="center"
                          closeButton={true}
                          style={{ backgroundColor: 'red', width: '50px', height: '50px' }}
                        >
                          {marker.lon}
                        </Popup> */}

                      </Marker>)
                  })
                }
              </Map>
            </div>
            <div className={styles.text}>
              Here are some of my favourite shots:
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