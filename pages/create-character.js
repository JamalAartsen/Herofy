import Question from "../components/Utils/Question"
import Styles from "../styles/CreateCharacter.module.css"
import { Container, Row, Col } from 'react-bootstrap'

export default function CreateCharacter() {
    return (
        <div className={Styles.container}>
            <h1 className={Styles.title}>Create Character</h1>
            <div className={Styles.indsideContainer}>
                <Container fluid>
                    <Row className={Styles.row} lg={2} md={2} sm={1} xs={1}>
                        <Col className={Styles.column}><Question question="What is your character's name?" /></Col>
                        <Col className={Styles.column}><Question question="What are nicknames of your character?" placeholder="King of the mountain, The rider..." /></Col>
                    </Row>
                    <Row className={Styles.row} lg={2} md={2} sm={1} xs={1}>
                        <Col className={Styles.column}><Question question="What are nicknames of your character?" placeholder="King of the mountain, The rider..." /></Col>
                        <Col className={Styles.column}><Question question="Jamal" placeholder="placeholder" /></Col>
                    </Row>
                    <Row className={Styles.row} lg={2} md={2} sm={1} xs={1}>
                        <Col className={Styles.column}><Question question="What type of being is your character?" placeholder="Cosmic being, superhuman..." /></Col>
                        <Col className={Styles.column}><Question question="Jamal" placeholder="placeholder" /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}