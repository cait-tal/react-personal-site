import { useEffect, useState, useRef } from 'react';
import '../styles/Projects.css';

const projects =[
    {
        title: "Title 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam facere expedita cum qui ratione amet eveniet, fuga dolor beatae optio officiis maiores assumenda tempore facilis itaque autem quas sapiente. Totam!",
        color: "#4CD964",
        class: "card"
    },
    {
        title: "Title 2",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto error voluptatem cumque earum maiores ut quidem tenetur, assumenda fugiat? Ut est fugiat libero mollitia recusandae quae ex culpa hic eligendi.",
        color: "#FFCC00",
        class: "card"
    },
    {
        title: "Title 3",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae, vitae cupiditate atque rem eligendi assumenda voluptates repellat, error quam asperiores quos, unde pariatur? Reprehenderit mollitia cupiditate provident distinctio! Pariatur?",   
        color: "#FF3B30",
        class: "card"
    },
    {
        title: "Title 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ratione tempora? Deleniti amet voluptates et natus iure quidem numquam aut iste velit laudantium consequuntur, omnis debitis pariatur? At, voluptatum maiores!",
        color: "#34AADC",
        class: "card activeNow"
    }
]


export default function Projects() {
    const containerRef = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);
    const [ projectList, setProjectList ] = useState(projects);
    
    const intersecting = (entries) => {
        const [ entry ] = entries;
        setIsVisible(entry.isIntersecting);
    }
    console.log(projects[0].class)
    const movePrev = () => {
        let currentProjects = projects;
        currentProjects[0].class = 'card transformPrev';
        setProjectList(currentProjects);
        setTimeout(()=>{
            let newProjects = [];
            for(let i = 0; i < projects.length; i++){
                if(i == 0){
                    
                    projects[i].class = 'card';
                    continue;
                }
                if(i == projects.length - 1) {
                    projects[i].class = 'card activeNow';
                }
                newProjects.push(projects[i]);
            }

            newProjects.push(projects[0]);
            setProjectList(newProjects);
        }, 500);
        

    };

    const moveNext = () => {
        let currentProjects = projects;
        currentProjects[projects.length - 1].class = 'card transformThis';
        setProjectList(currentProjects);
        setTimeout(()=>{
            let newProjects = [];
            currentProjects[projects.length - 1].class = 'card';
            newProjects.push(currentProjects[projects.length - 1]);
            newProjects.push(...projects.slice(0, projects.length - 1));
            console.log(newProjects);
            newProjects[projects.length - 1].class = 'card activeNow';
            setProjectList(newProjects);
        }, 500);
    };

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
            <h2><span>Projects</span></h2>
            <div className="card-stack">
				<a className="buttons prev" href="#" onClick={movePrev}>&lt;</a>
				<ul className="card-list">
                    {projectList.map((p, i) =>
                        <li className={"" + p.class} style={{backgroundColor: p.color}} key={i}></li>
                    )}
			</ul>	
			<a className="buttons next" href="#" onClick={moveNext}>&gt;</a>
		</div>
            </div>
        : <></>}
        </div>
        </>
    )
}