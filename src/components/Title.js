import { useEffect, useRef, useState } from "react";
import photo from '../assets/personal_photo.jpg';
import '../styles/Title.css';

export default function Title(){
    const imageText = Array.from("Full Stack Developer");
    const containerRef = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);
    
    const intersecting = (entries) => {
        const [ entry ] = entries;
        setIsVisible(entry.isIntersecting);
    }
    useEffect(()=>{
        const observer = new IntersectionObserver(intersecting);

        if(containerRef.current){
            observer.observe(containerRef.current)
        }
        return () => {
            if(containerRef.current){
                observer.unobserve(containerRef.current)
            }
        }
    }, [containerRef]);
    // Name, image, job title
    return(
        <>
        <div id="title-section" className="title-intersection" ref={containerRef}>
        {isVisible ? 
            <div className="title-container">
            <h1>Caitlin Talerico</h1>
            <img src={photo} alt="personal-photo" className="circle-img" />
            <h3 className="rounded-text">
                {
                   imageText.map((c, i) => 
                        // <span key={i} style={{transform: `rotate(${(i + 1) * 6}deg)`}}>{{c}}</span>
                        <span key={i} style={{transform: `rotate(${(i + 1) * 6}deg)`}} className="rounded-text">{c}</span>
                   )
                }
            </h3>
            </div>
        : <></>}
        </div>
        </>
    )
}