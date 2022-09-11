import Link from "next/link"
import Styles from "../../styles/Create.module.css"

export default function Create() {
    return (
        <section id="create-section" className={Styles.createContainer}>
            <h1 className={Styles.title}>Create</h1>
            <p className={Styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo orci, vehicula id </p>
            <Link href="/create-character"><button className={Styles.startBtn}>Start</button></Link>
        </section>
    )
}