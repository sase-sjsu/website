import { eventInfoProps } from "./types"

export default function HomeEventsPrograms({flyerURL, eventDate, eventName}:eventInfoProps) {
  return (
    <div className="">
      <div 
      style={{backgroundImage: `url(${flyerURL})`}}
      className="m-auto h-90 aspect-[8.5/11] bg-no-repeat bg-contain bg-center ">
      </div>
      <p className="w-fit m-auto font-bold mt-8"> {eventName}  </p>
      <p className="text-center w-[278px] m-auto mt-2"> {eventDate}  </p>
      
    </div>
  )
}