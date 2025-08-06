"use client";

import SubHeaderBody from "../components/SubHeaderBody";
import SubH3Body from "../components/SubH3Body";
import BackgroundImage from "../components/BackgroundImage";

export default function ProgramsPage() {
  return (
    <main className="p-6">
      {/* Header Image */}
      <header>
        <BackgroundImage
          image = "/about_us/about_us_header_img.jpg"
          title="our programs"
        />
      </header>

      {/* Intro Paragraph */}
      <section className="text-center my-10">
        <h2 className="text-4xl font-extrabold text-gradient mb-4 lowercase">
          
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          SJSU SASE holds year-round programs for students to enjoy and gain new experiences.
          From our kickstarter, mentorship and internships programs, SASE provides many
          opportunities for members to deeply engage in club activities and events.
        </p>
      </section>

      {/* Program Sections */}
      <section className="space-y-12">
        <SubH3Body
          title={
            <span className="text-3xl font-bold lowercase text-gradient">
              kickstarter
            </span>
          }
          body="Our kickstarter event showcases teams of members who work together for months to create any project of their choosing. With a professional industry member to assist them, members build teamwork and work-balance skills as they present their work to SASE."
          image="/about_us/president_img.jpg"
        />

        <SubH3Body
          title={
            <span className="text-3xl font-bold lowercase text-gradient">
              mentorship
            </span>
          }
          body="The mentorship program pairs incoming freshman or transfer students with a long-standing SASE member. The program is a great place to make new friends as many social events take place to promote interactions through cooperative games and activities."
          image="/about_us/president_img.jpg"
        />

        <SubH3Body
          title={
            <span className="text-3xl font-bold lowercase text-gradient">
              sase internship
            </span>
          }
          body="To properly select the next executive board, SASE enacts an internship program where students are able to shadow different officer positions to learn how to do their roles. This includes planning events and programs for the members, as well as attending e-board meetings."
          image="/about_us/president_img.jpg"
        />
      </section>

    </main>
  );
}
