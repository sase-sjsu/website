
"use client"

type pageProps = {
    image: string;
    name: string;
    position: string;
    quote: string;
}

export default function ImagerBioRow({image, name, position, quote}: pageProps) {
    return (
        <div className="flex flex-row items-center my-5 mx-20" >
            <img className="h-70 mx-5" src={image} alt={`${name}'s picture`} />
            <div className="flex flex-col items-left mt-4 gap-2">
                <p className="text-xl font-bold">{name}</p>
                <p className="text-lg">{position}</p>
                <p className="text-md italic text-left mt-2">“{quote}”</p>
            </div>
        </div>
    )
}
