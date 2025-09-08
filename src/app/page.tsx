import Link from "next/link";
import FadeInCarousel from "./components/FadeInCarousel";
import HomeEventsPrograms from "./components/HomeEventsPrograms";
import styles from "./page.module.css"

// images for header carousel
const headerImages = [
  "/home/header/1_home_header_img.jpg", "/home/header/2_home_header_img.jpg", "/home/header/3_home_header_img.jpg", "/home/header/4_home_header_img.jpg", "/home/header/5_home_header_img.jpg"
];

export default function HomePage() {

  return (
    <>

      <header>
        {/* Page Title */}
        <div className={styles.headerContainer}>
          <img className={styles.headerLogo} src="/sase_logo.png"></img>
          <h1 className={styles.headerTitle}>
          
            <span className={styles.headerTitleWhiteText}>
              society of
            </span>

            <span className={`${styles.headerAsian} text-gradient`}>
              asian
            </span>

            <span className={`${styles.headerTitleWhiteText} ${styles.headerScientistAndEngineers}`}>
              scientists <span className="text-gradient"> & </span> engineers
            </span>

            <span className={`ml-auto ${styles.headerAtSJSU}`}> 
              at <span className={`text-gradient ml-auto`}> sjsu </span>
            </span>

          </h1>
        </div>

        
        {/* Header Background Image */}
        <div className={styles.headerImageBlueGradient}></div>
        <div className={styles.headerImageBlackBackground}></div>
        <FadeInCarousel images={headerImages}/>

      </header>

      {/* What is SASE section */}
      <section className={styles.aboutSASEContainer}>

        <div className={styles.aboutSASEOrg}> 
          <h3 className={styles.question}> what is SASE? </h3>
          <div className={`blue-blur ${styles.blueBlur}`}></div>
          <p className={styles.description}> SASE is a nationwide organization run by a hard-working board of people of  various ethnicities and backgrounds. Ten Proctor and Gamble interns  founded SASE in 2007; these interns were the first members of SASE!  Between 2007 and 2008, they made SASE into a 501(c)3 organization and  began to give back to their community. Throughout the years, SASE  collegiate chapters were created and provided for their community and a  place for their community to come together. ​</p>
        </div>

        {/* 
        <div className="flex justify-center gap-12">
          <h3 className="basis-xs text-right"> what is SASE <strong> at SJSU? </strong> </h3>
          <div className="green-blur mt-5 -mx-37"></div>
          <p className="leading-relaxed basis-7xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          <br/><br/>
          
          Link to About Us Page
          Click <Link className="text-sase-blue" href="/about-us">here ↗</Link> to learn more about SASE at SJSU!</p>
        </div> */}

      </section>

      {/* Upcoming Events section */}
      <section>

        <h2>upcoming events</h2>
        {/* <p className="w-fit mt-2 mx-auto"> (Click on a flyer to learn more!) </p> */}

        <div className={styles.eventsContainer}>
          <HomeEventsPrograms flyerURL={"/home/events/event1.png"} eventName={"7th Street Tabling"} eventDate={"September 8th-9th"}/>
          <HomeEventsPrograms flyerURL={"/home/events/event2.png"} eventName={"Lockheed Martin Insights"} eventDate={"September 11th"}/>
          <HomeEventsPrograms flyerURL={"/home/events/event3.png"} eventName={"1st General Meeting"} eventDate={"September 12th"}/>
        </div>

        {/* <p className="flex h-80 w-fit items-center mx-auto"> Come back soon for more events!</p> */}
        
        {/* Link to Events Page */}
        <p className={styles.eventsLink}>
          Check out our <Link className="text-sase-blue" href="/events">events calendar ↗</Link> for additional events!
        </p>

      </section>
      

      {/* Our Programs section */}
      <section>

        <h2>our programs</h2>

        <div className={styles.programsContainer}>
          <HomeEventsPrograms flyerURL={"/home/programs/kickstarter.png"} eventName={"Kickstarter"} eventDate={"Collaborate with an industry professional to build and showcase a group project!"}/>
          <HomeEventsPrograms flyerURL={"/home/programs/mentorship.png"} eventName={"Mentorship"} eventDate={"Our official Big/Little program. Volunteer as a mentor, or pair up as a mentee, and join our social events!"}/>
          <HomeEventsPrograms flyerURL={"/home/programs/internship.png"} eventName={"Internship"} eventDate={"Interested in running for a board position? Experience it yourself with our SASE Intern program!"}/>        
        </div>

      </section>

      {/* Let's connect section */}
      <section>

        <h2>let's connect</h2>

        <div className={styles.socialsContainer}>
          
          <a href="https://www.instagram.com/sase.sjsu">
            <img src="/home/socials/instagram_logo.png"></img>
            <p className="hover:underline"> Instagram ↗ </p>
          </a>

          <a href="https://discord.com/invite/PgzQkRu">
            <img src="/home/socials/discord_logo.png"></img>
            <p> Discord ↗ </p>
          </a>

          <a href="https://www.linkedin.com/company/society-of-asian-scientists-and-engineers-sase-san-jose-state-university-chapter/">
            <img src="/home/socials/LinkedIn_logo.png"></img>
            <p className="hover:underline"> LinkedIn ↗ </p>
          </a>

          <a href="https://weebly.us17.list-manage.com/subscribe?u=65b8f622bdb334aaf390e488d&id=043b01ba62">
            <img className={'scale-115'} src="/home/socials/newsletter.png"></img>
            <p className="hover:underline"> Newsletter ↗ </p>
          </a>

        </div>

      </section>

    </>
  );
}
