import Styles from "../../styles/Steps.module.css"
import Spacer from "../Utils/Spacer"
import StepContainer from "../Utils/StepContainer"
import CreateImage from "../../public/images/CreateImage.png"
import CreateCharacterImage from "../../public/images/CreateCharacterImage.png"
import FinishCharacterImage from "../../public/images/FinishCharacterImage.png"

export default function Steps() {
    return (
        <section id="steps-section" className={Styles.stepsContainer}>
            <h1 className={Styles.title}>How it works</h1>
            <StepContainer image={CreateImage} imageIsLeft={false} title="Step 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo orci, vehicula id" alt="Step 1 image" />
            <Spacer />
            <StepContainer image={CreateCharacterImage} imageIsLeft={true} title="Step 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo orci, vehicula id" alt="Step 1 image" />
            <Spacer />
            <StepContainer image={FinishCharacterImage} imageIsLeft={false} title="Step 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo orci, vehicula id" alt="Step 1 image" />
        </section>
    )
}