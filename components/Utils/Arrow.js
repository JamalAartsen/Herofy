import Image from "next/image";
import Styles from "../../styles/Arrow.module.css"

export default function Arrow(props) {
    return (
        <div>
            <Image src={props.image} height="50" width="50" alt={props.alt} />
        </div>
    )
}