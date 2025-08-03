
"use client"

import { useState} from "react";

type pageProps = {
  question: string;
  answer: string;
}

export default function AccordionText({ question, answer }: pageProps) {

const [isOpen, setIsOpen] = useState(false);

function toggleAccordion() {
  setIsOpen(!isOpen);
}

function handleOnClick() {
  toggleAccordion();
}
  return (
    <div className="w-full max-w-4xl mx-auto my-4 p-4 bg-transparent rounded-lg">
      <button
        onClick={handleOnClick}
        className="w-full text-left text-lg font-semibold text-gray-800 
                focus:outline-none gap-2 flex items-center p-2 rounded-lg shadow-md"
      >
        {question}
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""} 
              ml-auto borde p-1 w-6 h-6 flex items-center justify-center`}>
          ^
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700 bg-gray-100 p-4 rounded-lg">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}