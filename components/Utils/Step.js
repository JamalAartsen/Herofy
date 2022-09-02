import Styles from "../../styles/Step.module.css"

export default function Step(props) {
    return (
        <div className={Styles.stepContainer}>
            <h2 className={Styles.title}>{props.title}</h2>
            <p className={Styles.description}>{props.description}</p>
        </div>
    )
}