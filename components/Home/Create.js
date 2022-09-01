import Styles from "../../styles/Create.module.css"

export default function Create() {
    return (
        <div className={Styles.createContainer}>
            <h1 className={Styles.title}>Create</h1>
            <p className={Styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo orci, vehicula id </p>
            <button className={Styles.startBtn}>Start</button>
        </div>
    )
}