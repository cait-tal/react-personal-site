import { useEffect, useRef, useState } from "react";
import '../styles/Title.css';

export default function Title(){
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

    return(
        <>
        <div id="title-section" className="title-intersection" ref={containerRef}>
        {isVisible ? 
            <div className="title-container">
            <h2><span className="hover">Caitlin Talerico</span></h2>
            <h3>Full Stack Developer</h3>
            </div>
        : <></>}
        </div>
        </>
    )
}