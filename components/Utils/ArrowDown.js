import Image from "next/image";
import Link from "next/link";
import ArrowDownSVG from "../../public/images/ArrowDown.svg"
import Styles from "../../styles/ArrowDown.module.css"

export default function ArrowDown() {
    return (
        <div className={Styles.arrowDown}>
            <Link href="#create-section">
                <Image src={ArrowDownSVG} width="75" height="75" alt="Arrow down" />
            </Link>

        </div>
    )
}