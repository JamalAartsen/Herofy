import Styles from "../../styles/StepContainer.module.css"
import ImageStep from "./ImageStep"
import Step from "./Step"

export default function StepContainer(props) {
    return (
        <div className={Styles.container}>
            <>

                

                    <Step title={props.title} description={props.description} />

                    <ImageStep image={props.image} alt={props.alt} />

          
            </>
        </div>
    )
}