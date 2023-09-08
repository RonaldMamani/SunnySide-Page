import Image1 from "../../assets/desktop/image-gallery-milkbottles.jpg"
import Image2 from "../../assets/desktop/image-gallery-orange.jpg"
import Image3 from "../../assets/desktop/image-gallery-cone.jpg"
import Image4 from "../../assets/desktop/image-gallery-sugarcubes.jpg"

export default function GridSugar() {
    return (
        <section className="
            grid grid-cols-2 grid-rows-2
            md:grid-cols-4 md:grid-rows-1
            ">
            <div className="">
                <img className="" src={Image1} alt="" />
            </div>
            <div>
                <img src={Image2} alt="" />
            </div>
            <div>
                <img src={Image3} alt="" />
            </div>
            <div>
                <img src={Image4} alt="" />
            </div>
        </section>
    )
}