import Descrition from "./Descrition";

import Fruits from "./Fruits";

export default function Ingredients() {
    return (
        <section className="grid grid-rows-6">
            <Fruits image="bg-eggMob bg-cover bg-center bg-no-repeat" />
            <div className="">
                <Descrition 
                    title="Transform your brand" 
                    text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you." 
                />
            </div>
            <Fruits image="bg-shakeMob bg-cover bg-center bg-no-repeat" />
            <div>
                <Descrition 
                    title="Stand out to the right audience" 
                    text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. " 
                />
            </div>
            <Fruits 
                image="bg-cherryMob bg-cover bg-no-repeat "
                title="Photography"
                descrition="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."    
            />
            <Fruits 
                image="bg-orangeMob bg-cover bg-top bg-no-repeat "
                title="Photography"
                descrition="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."    
            />
            
        </section>
    )
}