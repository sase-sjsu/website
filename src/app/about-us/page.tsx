"use client";

import SubH2Body from "../components/SubH2Body";
import SubH3Body from "../components/SubH3Body";
import BackgroundImage from "../components/BackgroundImage";
import ImageBioRow from "../components/ImageBioRow";
import ImageBioCol from "../components/ImageBioCol";
import DropdownText from "../components/AccordionText";

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
          
      </section>

      {/*SASE Values section*/}
      <section>
        <SubH3Body
          title="Community"
          body="We work to build strong bonds within our own SASE community, providing  opportunities for members to make contributions to each other and help  each other grow as a STEM student and professional."
          image="/about_us/president_img.jpg"
        />

        <SubH3Body
          title="Diversity"
          body="We celebrate the vast diversity of our members within the SASE community, as well as the diversity on campuses and the workplace."
          image="/about_us/president_img.jpg"
        />

        <SubH3Body
          title="Success"
          body="We facilitate engagement between students and companies through tours, workshops, and job/internship opportunities!"
          image="/about_us/president_img.jpg"
        />
      </section>

      {/* Testimonials section 
      @TODO add a blur bg to these
      this is a placeholder for the ClickThroughCarousel component
      component for a clickable testimonials carousel is in progress...*/}
      <section>
        <div className="flex flex-col mx-45 mb-5 mt-10">
          <h2 className="h-50">Testimonials</h2>
          <div className="flex flex-row mx-50">
            <p className="text-lg text-left w-120 mx-auto my-4 p-4 bg-transparent rounded-lg">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do ”
            </p>
            <ImageBioCol
              image="/about_us/president_img.jpg"
              name="Alan To"
              position="SJSU SASE President"
              profession="himself"
            /> 
          </div>
          
        </div>
      </section>

      {/*executive board 
      i think this would be better as a carousel too imo -jacob*/}
      <section>

        

        <div className="flex flex-col mx-45 mb-5 mt-10">
          <h2 className="h-50">Executive Board</h2>
          <div className="flex flex-row">
              <ImageBioRow
                image="/about_us/president_img.jpg"
                name="Alan To"
                position="SJSU SASE President"
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />

              <ImageBioRow
                image="/about_us/president_img.jpg"
                name="Alan To"
                position="SJSU SASE President"
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
          </div>
          <div className="flex flex-row">
              <ImageBioRow
                image="/about_us/president_img.jpg"
                name="Alan To"
                position="SJSU SASE President"
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />

              <ImageBioRow
                image="/about_us/president_img.jpg"
                name="Alan To"
                position="SJSU SASE President"
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
          </div>
        </div>
      </section>

      {/*FAQ*/}
      <section>
       <DropdownText
          question="What is SASE?"
          answer="SASE is dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential. In addition to professional development, SASE also encourages members to contribute to the enhancement of the communities in which they live."
        />

        <DropdownText
          question="How can I join SASE?"
          answer="You can join SASE by attending our general meetings, signing up on our website, or reaching out to us via email or social media."
        />

        <DropdownText
          question="What events does SASE host?"
          answer="SASE hosts a variety of events including workshops, networking events, and community service opportunities. Check our events page for more details."
        />
      </section>


    </>
  );
}
