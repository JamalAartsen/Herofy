import Styles from "../../styles/PowerLevel.module.css"

export default function PowerLevel(props) {
    return (
        <div>
            <h4 className={Styles.title}>{props.title}</h4>
        </div>
    )
}