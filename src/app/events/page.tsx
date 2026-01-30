import BackgroundImage from "../components/BackgroundImage";
export default function EventsPage() {
  return (
    <>
      <header>
        <BackgroundImage image="/events/events_header_img.jpg" title="Events" />
      </header>

      <section className="w-4xl mx-auto text-center">
        <p className="my-20">
          Throughout the school year, SJSU SASE hosts a variety of events. These
          events may be professional, social, or even a mix of both! Follow our
          Instagram and join our Discord server to get updates on events and
          other club activities right away!
        </p>
      </section>
{/* 
      <section className="flex flex-col items-center">
        <div className="text-left w-4xl mx-auto  p-10 bg-opacity-50 rounded-lg">
          <p className="text-2xl mb-4">
          Welcome to SJSU’s Society of Asian Scientists and Engineers (SASE)!<br></br><br></br>
          We are a fully free to join organization open to all students on campus, regardless of background, offering a wide range of professional development and social opportunities to help you grow, connect, and develop a sense of community on campus!
          </p>
        
          <div className="flex flex-row gap-10 items-center h-1">
            <img className="z-6 h-45 mt-45" src="/about_us/eboard-alan.jpg"/>
              <div className="flex flex-col gap-2 mt-45">
                <p><b>Alan To</b></p>
                <p>SJSU SASE President</p>
                <p>25-26</p>
              </div>
          </div>
        </div>
      </section> */}

      <section>
        <h2>Upcoming Events</h2>
        <div className="pt-16 max-w-2xl mx-auto text-left">
          <ol className="list-decimal list-inside font-bold text-xl">
            <li>
              <span className="font-bold">Date:</span>{" "}
              <span className="font-normal">
                Event Name loream loreamloreamloreamloreamloreamloream
              </span>
            </li>
            <li>
              <span className="font-bold">Date:</span>{" "}
              <span className="font-normal">
                Event Name loream loreamloreamloreamloreamloreamloream
              </span>
            </li>
            <li>
              <span className="font-bold">Date:</span>{" "}
              <span className="font-normal">
                Event Name loream loreamloreamloreamloreamloreamloream
              </span>
            </li>
            <li>
              <span className="font-bold">Date:</span>{" "}
              <span className="font-normal">
                Event Name loream loreamloreamloreamloreamloreamloream
              </span>
            </li>
          </ol>
        </div>
      </section>
      <section>
        <h2>Recent Events</h2>
        <p className="text-center pt-10">Coming soon!</p>
      </section>
      <section className="px-20">
        <iframe
          src="https://embed.styledcalendar.com/#dH12e7pjpSoQTADB9h69"
          title="Styled Calendar"
          className="w-full h-[42rem] border-0"
          data-cy="calendar-embed-iframe"
        ></iframe>

        <script
          async
          type="module"
          src="https://embed.styledcalendar.com/assets/parent-window.js"
        ></script>
      </section>
    </>
  );
}
