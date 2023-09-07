import Emily from "../../assets/image-emily.jpg"
import Thomas from "../../assets/image-thomas.jpg"
import Jennie from "../../assets/image-jennie.jpg"
import Comentary from "./Comentary"
import Title from "../Texts/TitleText"

export default function SectionComentaries() {
    return (
        <section className="px-4 py-10 flex flex-col gap-5">
            <Title classname="text-center text-gray-400 text-xl font-extrabold uppercase" text="Client Testimontals" />
            <Comentary
                avatar={Emily}
                comment="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                name="Emily R."
                job="Marketing Director"
            />
            <Comentary
                avatar={Thomas}
                comment="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
                name="Thomas S.."
                job="Chief Operating Officer"
            />
            <Comentary
                avatar={Jennie}
                comment="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                name="Jennie F."
                job="Business Owner"
            />
        </section>
    )
}