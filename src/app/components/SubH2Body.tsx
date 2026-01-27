/**
 * we have a lot of <h2>... style content so heres a component for it
 *                  <p>...
 */

import { ReactNode } from "react";

type pageProps = {
    title: string;
    children: ReactNode;
}

export default function SubH2Body({title, children}:pageProps) {

    return (
        <div className="flex flex-col mx-100 mb-5 mt-5 text-center">
          <h2 className="h-50">{title}</h2>
          <p className="">
            {children}
          </p>
        </div>
    )
}