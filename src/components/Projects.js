import { useEffect, useState, useRef } from 'react';
import '../styles/Projects.css';

export default function Projects() {
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
        <div id="projects-section"></div>
        <div id="projects" className="projects-intersection" ref={containerRef}>
        {isVisible ? 
            <div className="projects-container">
            <h2><span className="hover">Projects</span></h2>
            <h3>Full Stack Developer</h3>
            </div>
        : <></>}
        </div>
        </>
    )
}