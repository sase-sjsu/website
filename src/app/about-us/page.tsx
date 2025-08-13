import SubH2Body from "../components/SubH2Body";
import SubH3Body from "../components/SubH3Body";
import BackgroundImage from "../components/BackgroundImage";
import ClickThroughCarousel from "../components/ClickThroughCarousel";
import AccordionText from "../components/AccordionText";
import ImageBioRow from "../components/ImageBioRow";
import ImageBioCol from "../components/ImageBioCol";

const images = [
  "/home/1_home_header_img.jpg", "/home/2_home_header_img.jpg", "/home/3_home_header_img.jpg", "/home/4_home_header_img.jpg", "/home/5_home_header_img.jpg"
];

export default function AboutPage() {


  return (
    <>
    {/* About Us Page Header */}
      <header>
         <BackgroundImage
          image = "/about_us/about_us_header_img.jpg"
          title = "About Us"
        />
      </header>

      {/* President Message */}
      <section className="flex flex-col items-center">
        <div className="text-left w-4xl mx-auto my-20 p-10 bg-opacity-50 rounded-lg">
          <p className="text-2xl mb-4">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit,  
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut Lorem ipsum dolor sit amet, consectetur adipiscing elit,  
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed”
          </p>
        
          <div className="flex flex-row gap-10 items-center h-1">
            <img className="z-6 h-45 mt-45" src="/about_us/president_img.jpg"/>
              <div className="flex flex-col gap-2 mt-45">
                <p><b>Alan To</b></p>
                <p>SJSU SASE President</p>
                <p>25-26</p>
              </div>
          </div>
        </div>
      </section>

      {/* Our mission section*/}
      <section>
        <SubH2Body
          title="Our Mission"
          body="SASE is dedicated to the advancement of Asian heritage scientists and  engineers in education and employment so that they can achieve their full career potential. In addition to professional development, SASE  also encourages members to contribute to the enhancement of the  communities in which they live."
        />
        <div className="flex flex-col mx-100 text-center">
          <p>Click <a className="text-sase-blue" href="https://www.saseconnect.org/" target="_blank" rel="noopener noreferrer">here ↗</a> to learn more about SASE!</p>
        </div>

      </section>

      {/*SASE Values section*/}
      <section>
        <div className="blue-blur mt-2 -mx-37"></div>
        <SubH3Body
          title="Community"
          body="We work to build strong bonds within our own SASE community, providing  opportunities for members to make contributions to each other and help  each other grow as a STEM student and professional."
          image="/about_us/president_img.jpg"
        />
        <div className="green-blur mt-5 -mx-37"></div>
        <SubH3Body
          title="Diversity"
          body="We celebrate the vast diversity of our members within the SASE community, as well as the diversity on campuses and the workplace."
          image="/about_us/president_img.jpg"
        />

        <div className="blue-blur mt-5 -mx-37"></div>
        <SubH3Body
          title="Success"
          body="We facilitate engagement between students and companies through tours, workshops, and job/internship opportunities!"
          image="/about_us/president_img.jpg"
        />
      </section>

      {/* Testimonials section*/}
      <section>
        <SubH2Body
          title="Testimonials"
          body="Hear what previous members of SASE SJSU think about the club!"
        />
        <div className="flex justify-center my-10">
          <ClickThroughCarousel
            height="400"
            width="600"
            images={images}
          />
        </div>
      </section>

      {/*executive board */}
      <section>
        <SubH2Body
          title="Executive Board"
          body="Meet our dedicated team of leaders who drive SASE SJSU forward!"
        />
        <div className="max-w-7xl mx-auto px-4">
          {/* First Row */}
          <div className="flex flex-row justify-center gap-4 mb-8">
            <ImageBioRow
              name="Alan To"
              image="/about_us/president_img.jpg"
              position="President '25-'26"
              quote="Leading SASE SJSU with passion and dedication to create opportunities for all our members."
            />
            <ImageBioRow
              name="Vincent Tran"
              image="/about_us/president_img.jpg"
              position="Vice President '25-'26"
              quote="Supporting our president and working to enhance member engagement through innovative programs."
            />
            <ImageBioRow
              name="Sarah Lou"
              image="/about_us/president_img.jpg"
              position="Secretary '25-'26"
              quote="Keeping our organization organized and ensuring clear communication between all board members."
            />
            <ImageBioRow
              name="Raghav Gautam"
              image="/about_us/president_img.jpg"
              position="Treasurer '25-'26"
              quote="Managing our finances responsibly to maximize the value and impact of every event we offer."
            />
          </div>
          
          {/* Second Row */}
          <div className="flex flex-row justify-center gap-4 mb-8">
            <ImageBioRow
              name="Kevin Lam"
              image="/about_us/president_img.jpg"
              position="Events Coordinator '25-'26"
              quote="Planning and executing memorable events that bring our community together and provide valuable experiences."
            />
            <ImageBioRow
              name="Winston Li"
              image="/about_us/president_img.jpg"
              position="Events Coordinator '25-'26"
              quote="Working alongside our team to create engaging activities and workshops that benefit all SASE members."
            />
            <ImageBioRow
              name="Amy Okuma"
              image="/about_us/president_img.jpg"
              position="Marketing Director '25-'26"
              quote="Spreading awareness about SASE and our mission while building our brand presence on campus."
            />
            <ImageBioRow
              name="Jacob Atanacio"
              image="/about_us/president_img.jpg"
              position="Marketing Director '25-'26"
              quote="Developing creative marketing strategies to promote SASE events and increase member participation."
            />
          </div>
          
          {/* Third Row */}
          <div className="flex flex-row justify-center gap-4">
            <ImageBioRow
              name="Brandon Estigoy"
              image="/about_us/president_img.jpg"
              position="Program Director '25-'26"
              quote="Developing educational and professional development programs that help our members grow in their careers."
            />
            <ImageBioRow
              name="Lucas Tolentino"
              image="/about_us/president_img.jpg"
              position="Program Director '25-'26"
              quote="Creating innovative workshops and seminars that provide valuable skills and networking opportunities."
            />
            <ImageBioRow
              name="Ethan Ho"
              image="/about_us/president_img.jpg"
              position="Philanthropy Director '25-'26"
              quote="Organizing community service initiatives that allow SASE members to give back and make a positive impact."
            />
            <ImageBioRow
              name="Ashley Roman"
              image="/about_us/president_img.jpg"
              position="Webmaster '25-'26"
              quote="Maintaining our digital presence and ensuring our website serves as an effective platform for our community."
            />
          </div>
        </div>
      </section>

      {/*FAQ*/}
      <section>
       <AccordionText
          question="What is SASE?"
          answer="SASE is a nationwide organization run by a hard-working board of people of various"
        />
        <AccordionText
            question="How can I join SASE?"
            answer="You can join SASE by attending our meetings and signing up on our website."
        />
        <AccordionText
            question="What events does SASE host?"
            answer="SASE hosts a variety of events including workshops, networking events, and community service activities."
        />

      </section>


    </>
  );
}
