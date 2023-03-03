import sky from '../assets/sky.png';
import nightSky from '../assets/night-sky.png';
import clouds1 from '../assets/clouds_1.png';
import clouds2 from '../assets/clouds_2.png';
import clouds3 from '../assets/clouds_3.png';
import clouds4 from '../assets/clouds_4.png';
import rocks1 from '../assets/rocks_1.png';
import rocks2 from '../assets/rocks_2.png';
import '../styles/HomeBanner.css';
import { useContext } from 'react';
import { DarkModeContext } from '../App';
import Title from './Title';

export default function HomeBanner() {

    const {darkTheme, setDarkTheme} = useContext(DarkModeContext);

    let layer = document.querySelectorAll('.layer');
    function scrolling(e){
        let X = e.target.scrollTop;
        layer[1].style.right = X/36 + 'px';
        layer[2].style.left = X/2 + 'px';
        layer[3].style.left = X/9 + 'px';
        layer[4].style.left = X/4 + 'px';
        layer[5].style.left = X/3 + 'px';
        layer[6].style.left = X/2 + 'px';
        layer[0].style.left = X/2 + 'px';
    }

    return (
        <div className="container" onScroll={scrolling}>
            <div className="wrapper">
                <div className="slide">
                    <div className="layer l1" style={{backgroundImage: `url(${darkTheme ? sky : nightSky})`}}></div>
                    <div className="layer l1" style={{backgroundImage: `url(${clouds1})`}}></div>
                    <div className="layer l1" style={{backgroundImage: `url(${clouds2})`}}></div>
                    <div className="layer l1" style={{backgroundImage: `url(${clouds3})`}}></div>
                    <div className="layer l1" style={{backgroundImage: `url(${clouds4})`}}></div>
                    <div className="layer l1" style={{backgroundImage: `url(${rocks1})`}}></div>
                    <div className="layer l2" style={{backgroundImage: `url(${rocks2})`}}>
                        <Title />
                    </div>

                </div>
            </div>
        </div>
    );

}