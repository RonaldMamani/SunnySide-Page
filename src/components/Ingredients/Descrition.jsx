import Link from "../Texts/Link";
import TextCommon from "../Texts/TextCommon";
import TextSecundary from "../Texts/TextSecundary";

export default function Descrition({title, text,classnameLink}) {
    return (
        <div className="
            sm:px-5 py-16 flex flex-col gap-10
            xl:px-32
            ">
            <TextSecundary classname="text-4xl font-bold xl:text-5xl xl:pr-3" text={title} />
            <TextCommon classname="text-lg text-gray-600 xl:text-xl" text={text} />
            <div className="">
                <Link classname={classnameLink} text="LEARN MORE" />
            </div>
        </div>
    )
}