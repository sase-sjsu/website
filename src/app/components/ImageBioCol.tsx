
"use client"

type pageProps = {
    image: string;
    name: string; //ex: "Jacob"
    position: string; //ex: "SASE Member '24-'26" 
    profession: string; //ex: "unemployed LOL"
}

export default function ExecImgBio({image, name, position, profession}: pageProps) {
    return (
        <div className="flex flex-col items-center w-full max-w-xs" >
            <img className="h-55 w-55 object-cover rounded-lg mb-4" src={image} alt={`${name}'s picture`} />
            <div className="flex flex-col items-center text-center">
                <p className="text-xl font-bold">{name}</p>
                <p className="text-lg">{position}</p>
                <p className="text-md">{profession}</p>
            </div>
        </div>
    )
}
