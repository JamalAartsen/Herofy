import Styles from "../../styles/Introduction.module.css"
import ArrowDown from "../Utils/ArrowDown"

export default function Introduction() {
    return (
        <section id="introduction-section" className={Styles.introductionContainer}>
            <div className={Styles.textContainer}>
                <h1 className={Styles.title}>Welcome to Herofy</h1>
                <p className={Styles.description}>The website that generate your own superhero or supervillian!</p>
            </div>
            <ArrowDown />
        </section>
    )
}