import Link from "../Texts/Link";
import TextCommon from "../Texts/TextCommon";
import TextSecundary from "../Texts/TextSecundary";

export default function Descrition({title, text}) {
    return (
        <div className="px-5 py-16 text-center flex flex-col gap-10">
            <TextSecundary classname="text-4xl font-bold" text={title} />
            <TextCommon classname="text-lg text-gray-600" text={text} />
            <Link classname="text-lg font-extrabold" text="LEARN MORE" />
        </div>
    )
}