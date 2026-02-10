
"use client"

type pageProps = {
    image: string;
    name: string;
    position: string;
    quote: string;
}

export default function ImagerBioRow({image, name, position, quote}: pageProps) {
    return (
        <div className="flex flex-col items-center p-4 max-w-xs mx-2" >
            <img className="h-32 w-32 object-cover rounded-lg mb-3" src={image} alt={`${name}'s picture`} />
            <div className="flex flex-col items-center text-center">
                <p className="text-lg font-bold mb-1">{name}</p>
                <p className="text-sm font-medium text-gray-700 mb-2">{position}</p>
                <p className="text-xs italic text-gray-600 leading-tight">{quote}</p>
            </div>
        </div>
    )
}
