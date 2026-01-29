/**
 * used for the about me page listing sase mission for community, diversity, culture
 */

import { ReactNode } from "react";


type pageProps = {
    title: string;
    children: ReactNode;
    image: string;
}

export default function SubH3Body({title, children, image}:pageProps) {

    return (
        <div className="flex flex-row gap-9 mx-auto mb-10 w-5xl text-left ">
          <div className="w-80">
            <img className="ml-auto h-50" src={image}/>
          </div>
          {/* <div className="w-80 bg-contain bg-no-repeat" style={{backgroundImage: `url(${image})`}}/> */}
          <div className="flex flex-col w-7/12 justify-center">
            <h3 className="h-15"><u>{title}</u></h3>
            <p>
                {children}
            </p>
          </div>
        </div>
    )
}