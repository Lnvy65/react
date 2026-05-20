import { useState } from "react";
import { galleryImages } from "./imgData";
import style from "../../css/Carousel.module.css"

export default function Carousel() {
    const [index, setIndex] = useState(0);

    function handlePrevious() {
        setIndex((index - 1 + galleryImages.length) % galleryImages.length);
    }

    function handleNext() {
        setIndex((index + 1) % galleryImages.length);
    }
    let slide = galleryImages[index];

    return(
        <section className={style.wrapper}>
            <h2>
                <i>{slide.name}</i>
                by {slide.artist}
            </h2>
            <h3>
                ({index + 1} of {galleryImages.length})
            </h3>
            <img src={slide.url} alt={slide.alt} />
            <p>{slide.description}</p>
            <p>
                <button onClick={handleNext}>Next</button>
                <button onClick={handlePrevious}>Previous</button>
            </p>
        </section>
    )
}