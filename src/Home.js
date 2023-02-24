import React, {useState, useEffect} from 'react';
import "./Home.css"
import background from "./background2.jpg"
import snippet from "./codesnippet.jpg"
import mockup from './reviewordmockup.png'
import arrow from "./arrow.png"
import project1 from "./project1.png"
import project4 from "./project4.JPG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComputer,
    faLocationDot,
    faPhone,
    faEnvelope,
    faPlane,
    faPaperPlane
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
            <div id="home">
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

            <div id="background">
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




            <div id="skills">
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


            <div id="projects">
                <div className="projects-hero">
                    <div className="projects-left">
                        <h1>My Work</h1>
                        <h3>Deployed web application for peer essay reviewing using a React frontend and a Ruby on Rails backend, hosted through Netlify and Heroku. Uses a local postgreSQL database and fetch to make requests.</h3>
                    </div>
                    <div className="projects-right">
                        <img src={mockup}></img>
                        <div className="featured-project">
                            <img src={arrow}></img>
                            <h2>Featured Project</h2>
                            <h3>Revieword</h3>
                            <button>View Project</button>
                        </div>
                    </div>
                </div>
                <div className="projects-display">
                    <div className="div1 projects-display-item">
                        <img src={project1}></img>
                        <div className="projects-display-content">
                            <h4>Netflix Fullstack Clone</h4>
                            <p>Web Development</p>
                        </div>
                    </div>
                    <div className="div2 projects-display-item"></div>
                    <div className="div3 projects-display-item"></div>
                    <div className="div4  projects-display-item projects-display-big-item">
                        <img src={project4}></img>
                         <div className="projects-display-content big-projects-display-content">
                            <h4>Revieword - Peer Essay Reviewing Web Application</h4>
                            <p>Web Development</p>
                        </div>
                    </div>
                    <div className="div5 projects-display-item"></div>

                </div>

            </div>


    <div id="contact">
    
            <h1 className="section-header">Contact ME</h1>

            <h2>Available for professional work and select freelance opportunities</h2>
            
            <div className="contact-wrapper">
            
                
                <form id="contact-form" className="form-horizontal" role="form">
                
                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="email" className="form-control " id="email" placeholder="EMAIL" name="email" value="" required />
                        </div>
                    </div>

                    <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
                    
                    <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                        <div className="alt-send-button">
                        <FontAwesomeIcon icon={faPaperPlane} className="fa fa-paper-plane fa-2x" /><span className="send-text">SEND</span>
                        </div>
                    
                    </button>
                
                </form>
                

                
                <div className="direct-contact-container">

                    <ul className="contact-list">
                    <li className="list-item"><FontAwesomeIcon icon={faLocationDot} className="fa fa-map-marker fa-2x"/><span className="contact-text place">Suwanee, GA</span></li>
                    
                    <li className="list-item"><FontAwesomeIcon icon={faPhone} className="fa fa-phone fa-2x"/><span className="contact-text phone"><a href="tel:1-678-677-0573" title="Give me a call">(678) 677-0573</a></span></li>
                    
                    <li className="list-item"><FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope fa-2x"/><span className="contact-text gmail form-email"><a href="mailto:#leeroy0912@yahoo.com" title="Send me an email">leeroy0912@yahoo.com</a></span></li>
                    
                    </ul>

                    <ul className="social-media-list">
                    <li><a href="#" target="_blank" className="contact-icon">
                        <i className="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li><a href="#" target="_blank" className="contact-icon">
                        <i className="fa fa-codepen" aria-hidden="true"></i></a>
                    </li>

                    </ul>
 
                    <div className="copyright">&copy; 2023 Roy Lee. All Rights Reserved</div>

                </div>
                
            </div>
            
            </div>

        </div>
    );
}

export default Home;
