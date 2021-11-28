import './HomePageStyles.css'
import { Fragment } from 'react'
import HeadshotsCarousel from './HeadshotsCarousel';
import { ReactComponent as InstagramIcon } from './resources/instagram.svg'
import { ReactComponent as TwitterIcon } from './resources/twitter.svg'
import { ReactComponent as YoutubeIcon } from './resources/youtube.svg'
import bg from './resources/bg-green.jpeg'

//style={{backgroundImage:`linear-gradient(rgba(66,75,43,0.5) 100%, rgba(66,75,43,0.5) 100%), url(${bg}`}}
const Hero = () => 
    <div className="hero" >
        <Navigation/>
        <main>
            <h2>
                A recent graduate of AMDA, I'm an actress looking for both theater and film roles in New York City. 
            </h2>
            <a href={process.env.PUBLIC_URL + '/killy-clara-resume.pdf'} target="_blank">Resume</a>
            <a href="mailto:clara.killy@yahoo.com" target="_blank">Contact Me</a>
        </main>
    </div>

const Navigation = () => 
    <nav>
        <ul>
            <li><h1>Clara Killy</h1></li>
            <li>
                <div>
                    <a href="https://twitter.com/clarakilly" target="_blank"><span><TwitterIcon /></span></a>
                    <a href="https://www.instagram.com/clarakilly" target="_blank"><span><InstagramIcon /></span></a>
                    {/* <a href="" ><span><YoutubeIcon/></span></a> */}
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