import { useState } from 'react';
import { Slide } from './interfaces/interfaces';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

interface SlideProps {
    slides: Slide[];
}

export const TravelSlider = ({ slides }: SlideProps) => {

    const [current, setCurrent] = useState(0);
    const carouselLenght = slides.length;

    const nextSlide = () => {
        setCurrent( current === (carouselLenght - 1) ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent( (current === 0) ? carouselLenght - 1 : current -1 ); 
    }

    if( !Array.isArray(slides) || slides.length <=0 ){
        return null;
    }

    return(
        <div className='travelslider__gallery'>
                <FaArrowAltCircleLeft 
                    onClick={ prevSlide }
                    className="travelslider__buttons travelslider__left-buttons"
                />
                <FaArrowAltCircleRight
                    onClick={ nextSlide }
                    className="travelslider__buttons travelslider__right-buttons"
                />
            {
                slides.map(( slide: Slide, index: number) => (
                    <div
                        key={ index }
                        className={ index === current ? 'slide-active' : 'slide' }
                    >
                        {
                            index === current &&
                            <div
                                style={{backgroundImage: "url(" + slide.image + ")"}}
                                className="travelslider__img-slider"
                            >
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}
