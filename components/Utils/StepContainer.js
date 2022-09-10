import Styles from "../../styles/StepContainer.module.css"
import ImageStep from "./ImageStep"
import Step from "./Step"
import useWindowDimensions from "./UseWindowsDimensions"

export default function StepContainer(props) {
    const { height, width } = useWindowDimensions()

    return (
        <div className={Styles.container}>

            {props.imageIsLeft ? (
                <>
                    <div className={Styles.left}>
                        {width < 1000 ? (
                            <Step title={props.title} description={props.description} />
                        ) : (
                            <ImageStep image={props.image} alt={props.alt} />
                        )}
                    </div>
                    <div className={Styles.right}>
                        {width < 1000 ? (
                            <ImageStep image={props.image} alt={props.alt} />
                        ) : (
                            <Step title={props.title} description={props.description} />
                        )}
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