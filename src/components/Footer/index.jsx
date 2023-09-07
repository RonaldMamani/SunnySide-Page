import Link from "../Texts/Link";
import Social from "./Social";

import logo from "../../assets/logo.svg"

import Facebook from "../../assets/icon-facebook.svg"
import Instagram from "../../assets/icon-instagram.svg"
import Twitter from "../../assets/icon-twitter.svg"
import Pinterest from "../../assets/icon-pinterest.svg"

export default function Footer() {
    return (
        <footer className="bg-[#90D4C6] py-20 px-10 flex flex-col gap-10">
            <div className="flex justify-center">
                <img src={logo} alt="Sunnyside" />
            </div>
            <div className="flex justify-between">
                <Link classname="text-teal-700 text-lg font-semibold" text="About" />
                <Link classname="text-teal-700 text-lg font-semibold" text="Services" />
                <Link classname="text-teal-700 text-lg font-semibold" text="Projects" />
            </div>
            <div className="flex justify-center gap-6 py-8">
                <Social image={Facebook} name="facebook" />
                <Social image={Instagram} name="instagram" />
                <Social image={Twitter} name="twitter" />
                <Social image={Pinterest} name="pinterest" />
            </div>
        </footer>
    )
}