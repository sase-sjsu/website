/**
 * we have a lot of <h2>... style content so heres a component for it
 *                  <p>...
 */

import { ReactNode } from "react";

type pageProps = {
    title: string;
    children?: ReactNode;
}

export default function SubH2Body({title, children}:pageProps) {

    return (
        <div className="flex flex-col w-4xl mx-auto text-center">
          <h2 className="lowercase mb-15">{title}</h2>
          {children && (
            <p className="mb-25">
              {children}
            </p>
          )}
        </div>
    )
}