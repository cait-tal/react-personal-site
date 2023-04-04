import {useEffect, useState, useRef} from 'react';
import '../styles/Contact.css';

export default function Contact(){
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
    // Contact with email or send message through app? Mailchimp?
    return (
        <>
        <div id="contact-section" className="contact-intersection" ref={containerRef}>
            { isVisible ? <div className="contact-container">
                <h2>Contact</h2>
            </div> : <></>}
            
        </div>
        </>
    )

}