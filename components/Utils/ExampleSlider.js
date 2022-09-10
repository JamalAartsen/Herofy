import Styles from "../../styles/ExampleSlider.module.css"
import Arrow from "./Arrow";
import ArrowRight from "../../public/images/ArrowRight.svg"
import ArrowLeft from "../../public/images/ArrowLeft.svg"
import Image from "next/image";
import living from "../../public/images/living.png"
import { Carousel } from "react-bootstrap"

export default function ExampleSlider() {

    const exampleItems = [
        {
            id: 1,
            description: "This is the living tribunal",
            image: living
        },
        {
            id: 2,
            description: "This is the living tribunal",
            image: living
        },
        {
            id: 3,
            description: "This is the living tribunal",
            image: living
        }
    ]

    const nextIcon = <Arrow image={ArrowRight} alt="Arrow next" />
    const prevIcon = <Arrow image={ArrowLeft} alt="Arrow previous" />

    return (
        <div className={Styles.exampleSlider}>
            <Carousel interval={null} indicators={false} nextIcon={nextIcon} prevIcon={prevIcon}>
                {exampleItems.map((examples) => {
                    return (
                        <Carousel.Item key={examples.id} className="carousel-item">
                            <Image src={examples.image} alt={examples.description} />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}