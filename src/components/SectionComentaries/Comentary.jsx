import Subtitle from "../Texts/Subtitle";
import TextCommon from "../Texts/TextCommon";

export default function Comentary({avatar, name, job, comment}) {
    return (
        <div className="py-5 flex flex-col gap-10 text-center">
            <div className="flex justify-center">
                <img className="rounded-full w-20" src={avatar} alt="" />
            </div>
            <TextCommon classname="px-5 text-gray-700 font-medium" text={comment} />
            <div className="flex flex-col gap-2">
                <Subtitle classname="text-xl font-extrabold" text={name} />
                <TextCommon classname="text-gray-400 font-semibold" text={job} />
            </div>
        </div>
    )
}