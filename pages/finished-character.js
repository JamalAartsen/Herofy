import Styles from "../styles/FinishedCharacter.module.css"
import ArrowBack from "../components/Utils/ArrowBack"
import PowerLevel from "../components/Utils/PowerLevel"

export default function FinishedCharacter() {
    return (
        <div className={Styles.container}>
            <ArrowBack link="/" />
            <div className={Styles.insideContainer}>
                <div className={Styles.leftContainer}>
                    <h1 className={Styles.name}>Jamsz</h1>
                    <h3 className={Styles.alias}>King in black</h3>
                    <h4 className={Styles.h4}>History</h4>
                    <p className={Styles.history}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis enim quis turpis tincidunt scelerisque eu sed arcu. Nunc mollis arcu et faucibus finibus. Maecenas leo enim, euismod non cursus a, porttitor in diam. Curabitur nec odio vel velit egestas faucibus. Sed convallis posuere dui, tristique interdum tellus convallis et. Fusce laoreet libero vitae venenatis blandit.</p>
                    <PowerLevel title="Average Power Level" level="7"/>
                </div>
                <div className={Styles.rightContainer}>

                </div>
            </div>
        </div>
    )
}