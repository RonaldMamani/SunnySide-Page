import TextCommon from "../Texts/TextCommon";
import TextSecundary from "../Texts/TextSecundary";

export default function Fruits({image, title, descrition}) {
    return (
        <div className={image}>
            <div className="flex flex-col gap-5 text-center py-8 ">
                <TextSecundary classname="text-3xl font-extrabold text-cyan-800  mt-80" text={title} />
                <TextCommon classname="text-cyan-800 font-medium" text={descrition} />
            </div>
        </div>
    )
}