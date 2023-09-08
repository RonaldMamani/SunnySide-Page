import TextPrincipal from "../Texts/TextPrinicipal";

import Arrow from "../../assets/icon-arrow-down.svg"
import NavBar from "../Header/Navbar";
import Header from "../Header";

export default function Introduction() {
    return (
        <section className="
            bg-headerMob bg-cover bg-center bg-no-repeat h-screen
            md:bg-header
            ">
            <NavBar />
            <div className="flex flex-col mt-20 items-center gap-16">
                <TextPrincipal classname="
                    text-center text-6xl text-white font-extrabold uppercase
                    xl:text-8xl
                    " text="We Are Creatives" />
                <div>
                    <img src={Arrow} alt="" />
                </div>
            </div>
        </section>
    )
}