
"use client"

type pageProps = {
    image: string;
    name: string; //ex: "Jacob"
    position: string; //ex: "SASE Member '24-'26" 
    profession: string; //ex: "unemployed LOL"
}

export default function ExecImgBio({image, name, position, profession}: pageProps) {
    return (
        <div className="flex flex-col items-left my-5 mx-20" >
            <img className="h-55" src={image} alt={`${name}'s picture`} />
            <div className="flex flex-col items-left">
                <p className="text-xl font-bold">{name}</p>
                <p className="text-lg">{position}</p>
                <p className="text-md text-left">{profession}</p>
            </div>
        </div>
    )
}
