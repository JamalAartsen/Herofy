import Styles from "../../styles/Question.module.css"
import Form from 'react-bootstrap/Form';

export default function Question(props) {
    return (
        <div className={Styles.container}>
            <Form.Label className={Styles.question}>{props.question}</Form.Label>
            <Form.Control className={Styles.control} type="text" placeholder={props.placeholder} />
        </div>
    )
}