import Image from "next/image"
import Styles from "../../styles/ArrowBack.module.css"
import BackArrow from "../../public/images/BackArrow.svg"

export default function ArrowBack() {
    return (
        <div className={Styles.arrowBackContainer}>
            <Image height="50" width="50" src={BackArrow} alt="Back arrow" />
        </div>
    )
}