import Question from "../components/Utils/Question"
import Styles from "../styles/CreateCharacter.module.css"
import { Container, Row, Col } from 'react-bootstrap'
import ArrowBack from "../components/Utils/ArrowBack"
import Ranger from "../components/Utils/ranger"
import CharacterButton from "../components/Utils/CharacterButton"
import Form from 'react-bootstrap/Form';
import Link from "next/link"

export default function CreateCharacter() {
    return (
        <div className={Styles.container}>
            <ArrowBack link="/" />
            <h1 className={Styles.title}>Create Character</h1>
            <div className={Styles.indsideContainer}>
                <Container fluid>
                    <Row className={Styles.row} lg={2} md={2} sm={1} xs={1}>
                        <Col className={Styles.column}><Question question="What is your character's name?" /></Col>
                        <Col className={Styles.column}><Ranger /></Col>
                    </Row>
                    <Row className={Styles.row} lg={2} md={2} sm={1} xs={1}>
                        <Col className={Styles.column}><Question question="What are nicknames of your character?" placeholder="King of the mountain, The rider..." /></Col>
                        <Col className={Styles.column}>
                            <Form.Label className={Styles.question}>Is your character a hero or villian?</Form.Label>
                            <div className={Styles.charactButtonContainer}>
                                <CharacterButton typeCharacter="Hero" />
                                <div className={Styles.divider} />
                                <CharacterButton typeCharacter="Villian" />
                            </div>
                        </Col>
                    </Row>
                    <Row className={Styles.row} lg={2} md={2} sm={1} xs={1}>
                        <Col className={Styles.column}><Question question="What type of being is your character?" placeholder="Cosmic being, superhuman..." /></Col>
                    </Row>
                </Container>
            </div>
            <Link href="/finished-character"><button className={Styles.generateBtn}>Generate</button></Link>
        </div>
    )
}