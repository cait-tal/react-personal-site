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
    // Skills: Java, Python, Angular, Git, HTML, CSS, TypeScript, Docker...
    return (
        <>
        <div id="skills-section" className="skills-intersection" ref={containerRef}>
            { isVisible ? <div className="skills-container">
                <h2 className="skills-title">Skills</h2>
                <div className="skills-list">
                <div className="bar expert" data-skill="Java"></div>
                <div className="bar front advanced" data-skill="JavaScript/TypeScript"></div>
                <div className="bar back basic" data-skill="Python"></div>
                <div className="bar intermediate" data-skill="Angular"></div>
                <div className="bar front learning" data-skill="React"></div>
                <div className="bar back advanced" data-skill="HTML5/CSS3"></div>
                </div>
            </div> : <></>}
            
        </div>
        </>
    )
}