import React from "react";
import Image from "next/image";

const ProgramDiv = ({ title, body, image }: { title: string; body: string; image: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gradient text-center">{title}</h1>

      <div className="flex flex-col py-10 gap-8 items-center md:flex-row md:items-center md:px-30">
        <div className="w-full md:basis-1/3">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full flex md:basis-2/3">
          <p className="text-gray-700 text-center">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramDiv;
