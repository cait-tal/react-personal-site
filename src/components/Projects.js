import { useEffect, useState, useRef } from 'react';
import '../styles/Projects.css';

let projects =[
    {
        title: "Title Green",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam facere expedita cum qui ratione amet eveniet, fuga dolor beatae optio officiis maiores assumenda tempore facilis itaque autem quas sapiente. Totam!",
        color: "green",
        class: "card"
    },
    {
        title: "Title Yellow",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto error voluptatem cumque earum maiores ut quidem tenetur, assumenda fugiat? Ut est fugiat libero mollitia recusandae quae ex culpa hic eligendi.",
        color: "yellow",
        class: "card"
    },
    {
        title: "Title Red",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae, vitae cupiditate atque rem eligendi assumenda voluptates repellat, error quam asperiores quos, unde pariatur? Reprehenderit mollitia cupiditate provident distinctio! Pariatur?",   
        color: "red",
        class: "card"
    },
    {
        title: "Title Blue",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ratione tempora? Deleniti amet voluptates et natus iure quidem numquam aut iste velit laudantium consequuntur, omnis debitis pariatur? At, voluptatum maiores!",
        color: "blue",
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
        const currentProject = document.querySelector('.card');
            let newProjects = [];
            projects[projects.length - 1].class = 'card';
            newProjects.push(...projects.slice(1, projects.length));
            newProjects.push(projects[0]);
            currentProject.classList.toggle('transformPrev');
            newProjects[projects.length - 1].class = 'card activeNow';
            projects = newProjects;
            setProjectList(projects);
            setTimeout(()=>{
            currentProject.classList.toggle('transformPrev');

        }, 400);     

    };

    const moveNext = () => {
        const currentProject = document.querySelector('.activeNow');
        currentProject.classList.toggle('transformThis');
        setTimeout(()=>{
            let newProjects = [];
            currentProject.classList.toggle('transformThis');
            projects[projects.length - 1].class = 'card';
            newProjects.push(projects[projects.length - 1]);
            newProjects.push(...projects.slice(0, projects.length - 1));
            newProjects[projects.length - 1].class = 'card activeNow';
            projects = newProjects;
            setProjectList(projects);
        }, 300);
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
                        <li className={"" + p.class} style={{backgroundColor: p.color}} key={i}><h3>{p.title}</h3></li>
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