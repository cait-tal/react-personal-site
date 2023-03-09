import { useRef, useState, useEffect} from 'react';
import '../styles/Skills.css';

export default function Skills(){
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
        <div className="skills-intersection" ref={containerRef}>
            { isVisible ? <div className="skills-container">
                <h2>Skills</h2>
                <div className="bar learning" data-skill="Java"></div>
                <div className="bar back basic" data-skill="Python"></div>
                <div className="bar back intermediate" data-skill="Angular"></div>
                <div className="bar front advanced" data-skill="CSS3"></div>
                <div className="bar front expert" data-skill="HTML5"></div>
            </div> : <></>}
            
        </div>
        <div id="skills-section" ></div>
        </>
    )
}