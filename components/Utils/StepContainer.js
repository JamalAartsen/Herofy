import Styles from "../../styles/StepContainer.module.css"
import ImageStep from "./ImageStep"
import Step from "./Step"

export default function StepContainer(props) {
    return (
        <div className={Styles.container}>

            {props.imageIsLeft ? (
                <>
                    <div className={Styles.left}>
                        <ImageStep image={props.image} alt={props.alt} />
                    </div>
                    <div className={Styles.right}>
                        <Step title={props.title} description={props.description} />
                    </div>
                </>
            ) : (
                <>


                    <div className={Styles.left}>
                        <Step title={props.title} description={props.description} />
                    </div>
                    <div className={Styles.right}>
                        <ImageStep image={props.image} alt={props.alt} />
                    </div>
                </>
            )
            }
        </div>
    )
}