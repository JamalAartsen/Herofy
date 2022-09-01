import Image from "next/image";
import ArrowDownSVG from "../../public/images/ArrowDown.svg"
import Styles from "../../styles/ArrowDown.module.css"

export default function ArrowDown() {
    return (
        <div className={Styles.arrowDown}>
            <Image src={ArrowDownSVG} width="75" height="75" alt="Arrow down" />
        </div>
    )
}