import { useEffect, useRef, useState } from "react";
import '../styles/About.css';

export default function About(){
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
    // Education, Job Experience, Certification, Interests/Hobbies
    return (
        <>
        <div id="about-section" className="about-intersection" ref={containerRef}>
            { isVisible ? <div className="about-container">
                <h2 className="about-title">About</h2>
                <p>&emsp;Hi! I am a Full Stack Developer with experience creating web-based applications with Angular and Spring Framework.
                I am eager to create solutions to the problems of today using new technologies. 
                </p>
            </div> : <></>}
            
        </div>
        <div></div>
        </>
    )
}