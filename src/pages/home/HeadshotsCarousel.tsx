import Carousel, { arrowsPlugin, Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import image1 from './resources/img1.jpg'
import image2 from './resources/img2.jpg'
import image3 from './resources/img3.jpg'
import image4 from './resources/img4.jpg'
import leftArrowIcon from './resources/left-arrow-long-icon.svg'
import rightArrowIcon from './resources/right-arrow-long-icon.svg'

import './HomePageStyles.css'
import { useState } from 'react'


const isMobile = () => (window.innerWidth > 920) ? false : true

const HeadshotsCarousel = () => { 
    console.log(window.innerWidth)
    const [currentIndex, setCurrentIndex] = useState(isMobile() ? 0 : 1)
    const slides = [
        <img src={image1} alt="Headshot 1 Of Clara"/>,
        <img src={image3} alt="Headshot 3 Of Clara"/>,
        <img src={image2} alt="Headshot 2 Of Clara"/>,
        <img src={image4} alt="Headshot 4 Of Clara"/>
    ]
    const onIndexChanged = (index: number) => {
        if (index + 1 <= slides.length && index >= 0) {
            setCurrentIndex(index)
        }
    }


    return <div className="carousel-container">
        <Carousel
            plugins={[
                'centered',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 3,
                    }
                },
                {
                    resolve: arrowsPlugin,
                    options: {
                        arrowLeft: <input type="image" className="arrow arrow-left" src={leftArrowIcon}/>,
                        arrowRight: <input type="image" className="arrow arrow-right" src={rightArrowIcon}/>,
                        addArrowClickHandler: true
                    }
                }
            ]}
            breakpoints={{
                920: {
                    plugins: [
                        {
                          resolve: slidesToShowPlugin,
                          options: {
                            numberOfSlides: 1
                          }
                        },
                        {
                            resolve: arrowsPlugin,
                            options: {
                                arrowLeft: <input type="image" className="arrow arrow-left" src={leftArrowIcon}/>,
                                arrowRight: <input type="image" className="arrow arrow-right" src={rightArrowIcon}/>,
                                addArrowClickHandler: true
                            }
                        }
                      ]
                }
            }}  
            value={currentIndex}
            slides={slides}
            onChange={onIndexChanged}
            animationSpeed={isMobile() ? 0 : 500}
            draggable={!isMobile()}
           />
        <Dots 
            value={currentIndex} 
            onChange={onIndexChanged} 
            number={slides.length} 
            />
    </div>
}

export default HeadshotsCarousel