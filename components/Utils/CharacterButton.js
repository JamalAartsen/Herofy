import { Button } from "react-bootstrap"
import Styles from "../../styles/CharacterButton.module.css"

export default function CharacterButton(props) {
    return (
       <Button className={Styles.characterButton}>{props.typeCharacter}</Button>
    )
}