//component for static background image used for all other pages EXCEPT home

"use client";

type pageProps = {
  image: string;
  title: string;
};

export default function BackgroundImage({ image, title }: pageProps) {
  return (
    <div>
      <div
        className="header-image"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(15,108,182,0) 26%,rgba(0,89,160,0.722) 100%), url(${image})`,
        }}
      ></div>

      <div className="w-full h-10 absolute z-3 flex gap-11">
        <h1 className="z-6 w-fit my-auto mr-auto leading-tight flex flex-col">
          {title}
        </h1>
      </div>
    </div>
  );
}
