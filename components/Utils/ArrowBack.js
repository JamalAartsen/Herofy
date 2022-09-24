import Image from "next/image"
import Styles from "../../styles/ArrowBack.module.css"
import BackArrow from "../../public/images/BackArrow.svg"
import Link from "next/link"

export default function ArrowBack(props) {
    return (
        <div className={Styles.arrowBackContainer}>
            <Link href={props.link}>
                <Image height="50" width="50" src={BackArrow} alt="Back arrow" />
            </Link>
        </div>
    )
}