import { FC, memo, useEffect, useRef, useState } from "react";
import { SliderContainer } from "./styles";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

interface SliderProps {
    children : React.ReactChild
}

const Slider : FC<SliderProps> = ({ children }) => {

    const sliderRef = useRef<HTMLUListElement>();

    const [direction, setDirection] = useState(1);
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        const event = sliderRef.current;
        event.addEventListener("transitionend", handleTransitionEnd, false);

        return () => {
            event.removeEventListener("transitionend", handleTransitionEnd);        }
    }, []);

    useEffect(() => {
        console.log(direction)
    }, [direction])

    const handleTransitionEnd = () => {

        if(direction === 1) {
            sliderRef.current.prepend(sliderRef.current.lastElementChild);
        } else {
            sliderRef.current.appendChild(sliderRef.current.firstElementChild);
        }

        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = 'translateX(0%)';

        setTimeout(() => {
            setEnabled(true);
            sliderRef.current.style.transition = "all .5s";
        })
    }

    const handleBack = () => {
        setEnabled(false);

        if(direction === -1) {
            setDirection(1);
            sliderRef.current.appendChild(sliderRef.current.firstElementChild);
        }

        sliderRef.current.style.justifyContent = 'flex-end';
        sliderRef.current.style.transform = 'translateX(100%)';
    }

    const handleFoward = () => {
        setEnabled(false);

        if (direction === 1) {
            setDirection(-1);
            sliderRef.current.prepend(sliderRef.current.lastElementChild);
            sliderRef.current.style.justifyContent = 'flex-start';
        }

        sliderRef.current.style.transform = 'translateX(-100%)';
    }

    return (
        <SliderContainer>
            <div className="p-absolute arrows d-between">
                <button onClick={handleBack} disabled={!enabled}>
                    <IoIosArrowBack />
                </button>

                <button onClick={handleFoward} disabled={!enabled}>
                    <IoIosArrowForward />
                </button>
            </div>
            <div className="wrapper">
                <ul className='d-flex slides-container transition p-absolute' ref={sliderRef}>
                    {children}
                </ul>
            </div>            
        </SliderContainer>
    )
}

export default memo(Slider);

git config --global user.email "you@example.com"
  git config --global user.name "Your Name"