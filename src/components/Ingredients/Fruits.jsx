import TextCommon from "../Texts/TextCommon";
import TextSecundary from "../Texts/TextSecundary";

export default function Fruits({image, title, descrition}) {
    return (
        <div className={image}>
            <div className="flex flex-col gap-5 text-center py-10 px-14">
                <TextSecundary classname="text-3xl font-extrabold text-cyan-800  mt-80 xl:text-4xl" text={title} />
                <TextCommon classname="text-cyan-800 font-medium xl:text-lg xl:px-32" text={descrition} />
            </div>
        </div>
    )
}