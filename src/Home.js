import React, {useState, useEffect} from 'react';
import "./Home.css"
import background from "./background2.jpg"
import snippet from "./codesnippet.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComputer
} from "@fortawesome/free-solid-svg-icons";

import {
  faReact, faPython
} from "@fortawesome/free-brands-svg-icons";
// need to import a logo here









const Home = () => {
    const [isHome,setIsHome]=useState(false);
    const [isSkills,setIsSkills]=useState(false);
    const [isProjects,setIsProjects]=useState(false);
    const [isContact,setIsContact]=useState(false);
    const [sticky, setSticky]=useState(false);


        //useEffect to figure out the scroll for the navbar appearance
    useEffect(() => {
        const handleScroll = () => {
        setSticky(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    return (
            <div className="home">
            <div className={`navbar ${sticky? "sticky": ""}`}>
                {/* logo here */}
                <div className={`navbar-item ${isHome? "hover" : ""}`} onMouseEnter={()=>{setIsHome(true)}} onMouseLeave={()=>{setIsHome(false)}}>
                    <p>01</p>
                    <h6>// home</h6>
                </div>
                <div className={`navbar-item ${isSkills? "hover" : ""}`} onMouseEnter={()=>{setIsSkills(true)}} onMouseLeave={()=>{setIsSkills(false)}}>
                    <p>02</p>
                    <h6>// skills</h6>
                </div>
                <div className={`navbar-item ${isProjects? "hover" : ""}`} onMouseEnter={()=>{setIsProjects(true)}} onMouseLeave={()=>{setIsProjects(false)}}>
                    <p>03</p>
                    <h6>// projects</h6>
                </div>
                <div className={`navbar-item ${isContact? "hover" : ""}`} onMouseEnter={()=>{setIsContact(true)}} onMouseLeave={()=>{setIsContact(false)}}>
                    <p>04</p>
                    <h6>// contact</h6>
                </div>

            </div>

            <div className="background">
                <img src={background} className="hero-background"></img>
                <div className="hero">
                    <h1>ROY LEE</h1>
                    <h2>SOFTWARE ENGINEER,   WEB DEVELOPER</h2>
                    <div className="container">
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                    </div>
                </div>
            </div>




            <div className="skills">
                <h1>My Skills</h1>
                <div className="skills-box">
                    <div className="skills-box-item">
                        <div className="skills-box-item-first">
                            <FontAwesomeIcon icon={faComputer} className="skills-box-icon" />
                             <h6><span>Software</span> <br></br>Development</h6>
                        </div>
                        <div className="skills-box-item-second">
                            <div className="prefix-rod">
                                <h6>&lt;h4&gt;</h6>
                                <br></br>
                                <p>|</p>
                                <br></br>
                                <h6>&lt;/h4&gt;</h6>
                            </div>
                            <h6> 
                                Experienced in functional and object-oriented programming: Javascript, Python, Java, HTML, CSS.
                            </h6>
                        </div>

                      
                    </div>
                    <div className="skills-box-item">
                        <div className="skills-box-item-first second">
                            <FontAwesomeIcon icon={faReact} className="skills-box-icon" />
                             <h6><span>Frontend Dev</span><br></br>React, NextJS</h6>
                        </div>
                        <div className="skills-box-item-second">
                            <div className="prefix-rod">
                                <h6>&lt;h4&gt;</h6>
                                <br></br>
                                <p>|</p>
                                <br></br>
                                <h6>&lt;/h4&gt;</h6>
                            </div>
                            <h6> 
                                Passionate about UI/UX. Experience in HTML, CSS, JS, React, Bootstrap, SCSS, and Netlify.
                            </h6>
                        </div>

                    </div>
                    <div className="skills-box-item right-skills-box">

                        <div className="skills-box-item-first third">
                            <FontAwesomeIcon icon={faPython} className="skills-box-icon" />
                             <h6><span>Backend Dev</span> <br></br>Ruby, Python, Rails</h6>
                        </div>
                        <div className="skills-box-item-second">
                            <div className="prefix-rod">
                                <h6>&lt;h4&gt;</h6>
                                <br></br>
                                <p>|</p>
                                <br></br>
                                <h6>&lt;/h4&gt;</h6>
                            </div>
                            <h6> 
                                Familiar with databases and backend frameworks, including SQL, PostgreSQL, SQLite3, Ruby on Rails, and NodeJS.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="code-snippet">
                    <img src={snippet}></img>
                </div>
            </div>   


            <div className="projects">
            
            </div>


            <div className= "work"></div>


            <div className="footer"></div>
        </div>
    );
}

export default Home;
