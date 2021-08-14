import './HomePageStyles.css'
import { Fragment } from 'react'
import HeadshotsCarousel from './HeadshotsCarousel';
import { ReactComponent as InstagramIcon } from './images/instagram.svg'
import { ReactComponent as TwitterIcon } from './images/twitter.svg'
import { ReactComponent as YoutubeIcon } from './images/youtube.svg'
import backgroundImage from './images/background-ocean.jpeg'

const Hero = () => 
    <div className="hero">
        <Navigation/>
        <main>
            <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero necessitatibus fugiat ullam optio doloribus, beatae, earum facilis corrupti voluptas consequatur. Unde porro architecto aliquid nobis culpa. Possimus, illo explicabo!
            </h2>
            <a href="" target="_blank">Resume CV</a>
            <a href="" target="_blank">Reach Out</a>
        </main>
    </div>

const Navigation = () => 
    <nav>
        <ul>
            <li><h1>Clara Killy</h1></li>
            <li>
                <div>
                    <span><InstagramIcon /></span>
                    <span><TwitterIcon /></span>
                    <span><YoutubeIcon/></span>
                </div>
            </li>
        </ul>
    </nav>



const HomePage = () => {
    return <Fragment>
        <Hero />
        <HeadshotsCarousel />
    </Fragment>
}

export default HomePage