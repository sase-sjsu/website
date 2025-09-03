/**
 * used for the about me page listing sase mission for community, diversity, culture
 */

"use clinet";

type pageProps = {
    title: string;
    body: string;
    image: string;
}

export default function SubH3Body({title, body, image}:pageProps) {

    return (
        <div className="flex flex-row mx-100 mb-10 mt-50 text-left ">
          <img className="w-65 h-50 mx-10" src={image}/>
          <div className="flex flex-col">
            <h3 className="h-15"><u>{title}</u></h3>
            <p className="">
                {body}
            </p>
          </div>
        </div>
    )
}