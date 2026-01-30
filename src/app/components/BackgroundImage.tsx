//component for static background image used for all other pages EXCEPT home

type pageProps = {
  image: string;
  title: string;
};

export default function BackgroundImage({image,title}: pageProps) {

    return (
        <header className="w-full">
            <div
                className="h-75 mb-25 bg-center bg-cover max-h-75"
                style={{
                    backgroundImage: `linear-gradient(180deg,rgba(15,108,182,0) 26%,rgba(0,89,160,0.722) 100%), url(${image})`
                }}
            />

            <h1 className="w-fit my-auto mr-auto leading-tight flex flex-col">
                {title}
            </h1>
        </header>
    )
}
