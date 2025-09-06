import { eventInfoProps } from "./types"

export default function HomeEventsDisplay({flyerURL, eventDate, eventName}:eventInfoProps) {
  return (
    <div className="">
      <div 
      style={{backgroundImage: `url(${flyerURL})`}}
      className="m-auto h-90 aspect-[8.5/11] bg-no-repeat bg-contain bg-center ">
      </div>
      <p className="w-fit m-auto mt-8"> {eventName}  </p>
      <p className="w-fit m-auto mt-1"> {eventDate}  </p>
      
    </div>
  )
}