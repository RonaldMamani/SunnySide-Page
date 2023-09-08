import Descrition from "./Descrition";

import Fruits from "./Fruits";

export default function Ingredients() {
    return (
        <section className="
            grid grid-rows-6 items-center
            md:grid-cols-2 md:grid-rows-3
            ">
            <Fruits image="
                bg-eggMob bg-cover bg-center bg-no-repeat
                md:bg-egg md:order-2 h-full
                " />
            <div className="md:order-1 max-[1024px]:text-center">
                <Descrition 
                    title="Transform your brand" 
                    text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you." 
                    classnameLink="text-lg font-extrabold hover:border-8 hover:border-b-yellow-400 hover:border-transparent transition-colors"
                />
            </div>
            <Fruits image="
                bg-shakeMob bg-cover bg-center bg-no-repeat
                md:bg-shake md:order-3 h-full
                " />
            <div className="md:order-4 max-[1024px]:text-center">
                <Descrition 
                    title="Stand out to the right audience" 
                    text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. " 
                    classnameLink="text-lg font-extrabold hover:border-8 hover:border-b-red-400 hover:border-transparent transition-colors"
                />
            </div>
            <Fruits 
                image="
                    bg-cherryMob bg-cover bg-no-repeat
                    md:bg-cherry bg-center md:order-5
                    "
                title="Graphic Design"
                descrition="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."    
            />
            <Fruits 
                image="
                    bg-orangeMob bg-cover bg-top bg-no-repeat
                    md:bg-orange bg-center md:order-6
                "
                title="Photography"
                descrition="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."    
            />
            
        </section>
    )
}