import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import image1 from './images/img1.jpg'
import image2 from './images/img2.jpg'
import image3 from './images/img3.jpg'
import image4 from './images/img4.jpg'
import './HomePageStyles.css'
import { useState } from 'react'

const HeadshotsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slides = [
        <img src={image1} alt="Headshot 1 Of Clara"/>,
        <img src={image2} alt="Headshot 2 Of Clara"/>,
        <img src={image3} alt="Headshot 3 Of Clara"/>,
        <img src={image4} alt="Headshot 4 Of Clara"/>
    ]
    const onIndexChanged = (index: number) => {
        setCurrentIndex(index)
    }

    return <div className="carousel-container">
        <Carousel
            plugins={[
                'centered',
                'infinite',
                {
                resolve: slidesToShowPlugin,
                options: {
                numberOfSlides: 2,
                },
                },
            ]}  
            slides={slides}
            >
            { slides }
        </Carousel>
    </div>
}

export default HeadshotsCarousel