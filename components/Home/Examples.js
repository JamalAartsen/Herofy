import Styles from "../../styles/Examples.module.css"
import ExampleSlider from "../Utils/ExampleSlider"

export default function Examples() {
    return (
        <section id="examples-section" className={Styles.examplesContainer}>
            <h1 className={Styles.title}>Examples</h1>
            <ExampleSlider />
        </section>
    )
}