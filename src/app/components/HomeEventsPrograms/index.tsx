import { eventInfoProps } from "./types"
import styles from "./HomeEventsPrograms.module.css"

export default function HomeEventsPrograms({flyerURL, eventDate, eventName}:eventInfoProps) {
  return (
    <div className={styles.container}>

      <div 
      style={{backgroundImage: `url(${flyerURL})`}}
      className={styles.flyer}>
      </div>

      <p className="w-fit m-auto font-bold mt-8"> {eventName}  </p>
      <p className="text-center w-[278px] m-auto mt-2"> {eventDate}  </p>
      
    </div>
  )
}