import { NextPage } from "next"
import { About } from "../components/about"
import { NavBar } from "../components/nav-bar"
import { TravelCardLeft } from "../components/travelCardLeft"
import { TravelCardRight } from "../components/travelCardRight"
import styles from '../styles/travel.module.css'
import { dataTravel } from '../components/data'

const Travel: NextPage = () => {

  return (
    <div className={styles.container}>
      <About />
      <div className={styles.mainWrapper}>
        <NavBar />
        <div className={styles.contentsWrapper}>
          <div className={styles.cardsContainer}>
            {dataTravel.map((e, i) => {
              if (i % 2 == 0) return <TravelCardLeft title={e.title} time={e.time} image={e.image} />
              else return <TravelCardRight title={e.title} time={e.time} image={e.image} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Travel