import Image from "next/image"
import Styles from "../../styles/ImageStep.module.css"

export default function ImageStep(props) {
    return (
        <div className={Styles.imageContainer}>
            <Image src={props.image} alt={props.alt} />
        </div>
    )
}