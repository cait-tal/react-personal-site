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

    return (
        <>
        <div id="about-section" className="about-intersection" ref={containerRef}>
            { isVisible ? <div className="about-container">
                <h2>About</h2>
            </div> : <></>}
            
        </div>
        <div></div>
        </>
    )
}