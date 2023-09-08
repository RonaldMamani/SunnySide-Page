export default function Social({image, name}) {
    return (
        <a href="#">
            <img src={image} alt={name} />
        </a>
    )
}