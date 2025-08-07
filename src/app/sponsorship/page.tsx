"use client";

import { useState } from "react";
import SubHeaderBody from "../components/SubHeaderBody";
import BackgroundImage from "../components/BackgroundImage";

export default function SponsorshipPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Sponsorship Page Header */}
      <header>
        <BackgroundImage
          image="/about_us/about_us_header_img.jpg"
          title="interested in Sponsoring?"
        />
      </header>

      {/* CTA Buttons */}
      <section className="text-center my-12">
        <div className="mt-6 flex justify-center gap-6">
          <a href="/donate" className="button w-56 sm:w-44 text-center">
            Donate
          </a>
          <a href="/contact" className="button w-36 sm:w-44 text-center">
            Contact Us
          </a>
        </div>
      </section>

      {/* PDF Preview Left, Text Right */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 my-12 gap-8">
        {/* Left: Embedded PDF Preview */}
        <div
          className="md:w-1/2 w-full cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <iframe
            src="/SJSU%20SASE%20Sponsorship%20Package%202025-2026.pdf#view=FitH&toolbar=0"
            className="w-full h-[800px] rounded-lg shadow-md border-none pointer-events-none"
            title="Sponsorship Packet Preview"
          ></iframe>
          <p className="text-center text-sm mt-2 text-gray-600">
            Click to view fullscreen
          </p>
        </div>

        {/* Right: Sponsorship Details */}
        <div className="md:w-1/2 w-full">
          <p className="text-lg leading-relaxed">
            By sponsoring us, you’ll have a <strong>direct impact</strong> in
            supporting our:
          </p>
          <ul className="mt-4 space-y-4 text-lg list-disc list-inside">
            <li>
              <span className="text-[#5ca946] font-semibold">
                Conference Attendance
              </span>
            </li>
            <li>
              <span className="text-[#1864ab] font-semibold">
                Professional Events
              </span>
            </li>
            <li>
              <span className="text-[#5ca946] font-semibold">
                Cultural Programs
              </span>
            </li>
          </ul>
          <p className="mt-4 text-sm italic text-gray-600">
            *View sponsorship packet to learn more about our{" "}
            <span className="underline">sponsor benefits</span>.
          </p>
        </div>
      </section>

      {/* Our Sponsors Section */}
      <section>
        <SubHeaderBody title="Our Sponsors" body="Your Company Here" />
      </section>

      {/* Fullscreen Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-[90%] h-[90%] max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-white bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full w-9 h-9 text-xl font-bold flex items-center justify-center z-50"
            >
              ✕
            </button>

            {/* Fullscreen PDF */}
            <iframe
              src="/SJSU%20SASE%20Sponsorship%20Package%202025-2026.pdf#view=FitH"
              className="w-full h-full border-none"
              title="Sponsorship Packet Fullscreen"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
