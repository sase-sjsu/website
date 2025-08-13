import BackgroundImage from "../components/BackgroundImage";
export default function EventsPage() {
  return (
    <>
      <header>
        <BackgroundImage image="/events/events_header_img.jpg" title="Events" />
      </header>
      <section className="pt-20 px-96 text-center">
        <p>
          Throughout the school year, SJSU SASE hosts a variety of events. These
          events may be professional, social, or even a mix of both! Follow our
          Instagram and join our Discord server to get updates on events and
          other club activities right away!
        </p>
      </section>
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
        <h2>Past Events</h2>
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
