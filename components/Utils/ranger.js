import Styles from "../../styles/Ranger.module.css"
import Form from 'react-bootstrap/Form';

export default function Ranger() {
    return (
        <>
            <Form.Label className={Styles.label}>Average power level</Form.Label>
            <div className={Styles.rangeContainer}>
                <p className={Styles.number}>1</p>
                <input className={Styles.range} min="1" max="7" type="range" />
                <p className={Styles.number}>7</p>
            </div>
        </>
    )
}