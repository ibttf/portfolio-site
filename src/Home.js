import React, {useState} from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from "@emailjs/browser"
import "./Home.css"
import background from "./background2.jpg"
import logo from "./logo.png"
import snippet from "./codesnippet.jpg"
import mockup from './reviewordmockup.png'
import arrow from "./arrow.png"
import project1 from "./project1.png"
import project2 from "./project2.jpg"
import project3 from "./project3.png"
import project4 from "./project4.JPG"
import project5 from "./project5.png"
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
  faReact, faPython, faGithub
} from "@fortawesome/free-brands-svg-icons";
// need to import a logo here









const Home = () => {
    const [isHome,setIsHome]=useState(false);
    const [isSkills,setIsSkills]=useState(false);
    const [isProjects,setIsProjects]=useState(false);
    const [isContact,setIsContact]=useState(false);


    const [isOne,setIsOne]=useState(false);
    const [isTwo,setIsTwo]=useState(false);
    const [isThree, setIsThree]=useState(false);
    const [isFour,setIsFour]=useState(false);
    const [isFive,setIsFive]=useState(false);

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        message: ''
      });
    
    const {ref: projectHeroLeft, inView: projectHeroLeftIsVisible} = useInView();
    const {ref: projectHeroRight, inView: projectHeroRightIsVisible} = useInView();
    const {ref: skillsBoxFirst, inView: skillsBoxFirstIsVisible} = useInView();
    const {ref: skillsBoxSecond, inView: skillsBoxSecondIsVisible} = useInView();
    const {ref: skillsBoxThird, inView: skillsBoxThirdIsVisible} = useInView();
    const {ref: projectOne, inView: projectOneIsVisible} = useInView();
    const {ref: projectTwo, inView: projectTwoIsVisible} = useInView();
    const {ref: projectThree, inView: projectThreeIsVisible} = useInView();
    const {ref: projectFour, inView: projectFourIsVisible} = useInView();
    const {ref: projectFive, inView: projectFiveIsVisible} = useInView();

    const handleFormChange = (e) => {

        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value
        }))
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        emailjs.send("service_x93espq","template_054xuz2",values,"LhaxNOBSEpss1dCSG").then(response=>alert("Sent!"));
        setValues({
            fullName: '',
            email: '',
            message: ''
          });
    }
    return (
            <div id="home">
                <div className="logo-container" onClick={()=>{window.location.reload()}}>
                    
                    <img src={logo} className="logo"></img>

                </div>
            <div className={`navbar`}>
                {/* logo here */}

                <div className={`navbar-item ${isHome? "hover" : ""}`} onMouseEnter={()=>{setIsHome(true)}} onMouseLeave={()=>{setIsHome(false)}}>
                    <p>01</p>
                    <a href="#home">
                          <h6>// home</h6>
                    </a>

                </div>
                <div className={`navbar-item ${isSkills? "hover" : ""}`} onMouseEnter={()=>{setIsSkills(true)}} onMouseLeave={()=>{setIsSkills(false)}}>
                    <p>02</p>
                    <a href="#skills">
                          <h6>// skills</h6>
                    </a>
                </div>
                <div className={`navbar-item ${isProjects? "hover" : ""}`} onMouseEnter={()=>{setIsProjects(true)}} onMouseLeave={()=>{setIsProjects(false)}}>
                    <p>03</p>
                    <a href="#projects">
                          <h6>// projects</h6>
                    </a>
                </div>
                <div className={`navbar-item ${isContact? "hover" : ""}`} onMouseEnter={()=>{setIsContact(true)}} onMouseLeave={()=>{setIsContact(false)}}>
                    <p>04</p>                    <a href="#contact">
                          <h6>// contact</h6>
                    </a>
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
                    <div className={`skills-box-item ${skillsBoxFirstIsVisible ? "fadeInOne" : ""}`} ref={skillsBoxFirst}>
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
                    <div className={`skills-box-item ${skillsBoxSecondIsVisible ? "fadeInTwo" : ""}`} ref={skillsBoxSecond}>
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
                    <div className={`skills-box-item ${skillsBoxThirdIsVisible ? "fadeInThree" : ""}`} ref={skillsBoxThird}>

                        <div className={`skills-box-item-first third`}>
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
                    <div className={`projects-left ${projectHeroLeftIsVisible ? "fadeInOne" : ""}`} ref={projectHeroLeft}>
                        <h1>My Work</h1>
                        <h3>Web application for peer essay reviewing using a React frontend and a Ruby on Rails backend. Uses a local postgreSQL database and fetch to make requests.</h3>
                    </div>
                    <div className={`projects-right ${projectHeroRightIsVisible ? "fadeInTwo" : ""}`} ref={projectHeroRight}>
                        <img src={mockup}></img>
                        <div className="featured-project">
                            <img src={arrow}></img>
                            <h2>Featured Project</h2>
                            <h3>Revieword</h3>
                            <a href="https://www.youtube.com/watch?v=vokFeylkhL0" target="blank">
                                <button>View Project</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="projects-display">
                    <div className={`div1 projects-display-item ${isOne ? "project-hover" : ""} ${projectOneIsVisible? "fadeInOne": ""}`} ref={projectOne} onMouseEnter={()=>{setIsOne(true)}} onMouseLeave={()=>{setIsOne(false)}}>
                        <img src={project1}></img>
                        <div className="projects-display-content">
                            <h4>Netflix Clone</h4>
                            <p>Web Development</p>
                        </div>
                        <div className="projects-display-hover-content">
                            <a href="https://youtu.be/FP4QHCbJ_sA" target="blank">
                                <button className="view-demo">See Demo</button>
                            </a>

                            <a href="https://github.com/roylee0912/netflix-fullstack-clone" target="blank">
                                <button className="view-code"> View Code</button>
                            </a>
                         
                        </div>
                    </div>
                    <div className={`div2 projects-display-item ${isTwo ? "project-hover" : ""}${projectTwoIsVisible? "fadeInTwo": ""}`} ref={projectTwo} onMouseEnter={()=>{setIsTwo(true)}} onMouseLeave={()=>{setIsTwo(false)}}>
                    <img src={project2}></img>
                        <div className="projects-display-content">
                            <h4>Ticker Backtest</h4>
                            <p>Python</p>
                        </div>
                        <div className="projects-display-hover-content">
                            <a href="https://replit.com/@RoyLee8/Ticker-Backtests" target="blank">
                                <button className="view-demo">See Demo</button>
                            </a>

                            <a href="https://replit.com/@RoyLee8/Ticker-Backtests" target="blank">
                                <button className="view-code"> View Code</button>
                            </a>
                        </div>
                    </div>
                    <div className={`div3 projects-display-item ${isThree ? "project-hover" : ""}${projectThreeIsVisible? "fadeInThree": ""}`} ref={projectThree} onMouseEnter={()=>{setIsThree(true)}} onMouseLeave={()=>{setIsThree(false)}}>
                    <img src={project3}></img>
                        <div className="projects-display-content">
                            <h4>InvestIt</h4>
                            <p>Web Development</p>
                        </div>
                        <div className="projects-display-hover-content">

                            <a href="https://github.com/roylee0912/investit" target="blank">
                                <button className="view-code"> View Code</button>
                            </a>
                        </div>
                    </div>
                    <div className={`div4 projects-display-item ${isFour ? "project-hover" : ""}${projectFourIsVisible? "fadeInOne": ""}`} ref={projectFour} onMouseEnter={()=>{setIsFour(true)}} onMouseLeave={()=>{setIsFour(false)}}>
                        <img src={project4}></img>
                         <div className="projects-display-content big-projects-display-content">
                            <h4>Revieword - Peer Essay Reviewing Web Application</h4>
                            <p>Web Development</p>
                        </div>
                        <div className="projects-display-hover-content">
                            <a href="https://www.youtube.com/watch?v=vokFeylkhL0" target="blank">
                                <button className="view-demo big-demo-button">See Demo</button>
                            </a>

                            <a href="https://github.com/roylee0912/revieword" target="blank">
                                <button className="view-code big-demo-button"> View Code</button>
                            </a>
                        </div>
                    </div>
                    <div className={`div5 projects-display-item ${isFive ? "project-hover" : ""}${projectFiveIsVisible? "fadeInTwo": ""}`} ref={projectFive} onMouseEnter={()=>{setIsFive(true)}} onMouseLeave={()=>{setIsFive(false)}}>
                    <img src={project5}></img>
                        <div className="projects-display-content">
                            <h4>TwoSum</h4>
                            <p>Web Development</p>
                        </div>
                        <div className="projects-display-hover-content">
                             <a href="https://youtu.be/u-_kcx4hnHg" target="blank">
                                <button className="view-demo">See Demo</button>
                            </a>

                            <a href="https://github.com/roylee0912/twosum-frontend" target="blank">
                                <button className="view-code"> View Code</button>
                            </a>
                        </div>
                    </div>

                </div>

            </div>


    <div id="contact">
    
            <h1 className="section-header">Contact Me</h1>

            <h2>Available for professional work and select freelance opportunities</h2>
            
            <div className="contact-wrapper">
            
                
                <form id="contact-form" class="form-horizontal" role="form" onSubmit={handleFormSubmit}>
                
                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="text" className="form-control" id="name" placeholder="NAME" name="fullName"  onChange={handleFormChange} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="email" className="form-control " id="email" placeholder="EMAIL" name="email"  onChange={handleFormChange} required />
                        </div>
                    </div>

                    <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" onChange={handleFormChange} required></textarea>
                    
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
                    <li>
                    <a href="https://github.com/roylee0912" target="blank" className="contact-icon">

                        <FontAwesomeIcon icon={faGithub}className="fa fa-github"/>
                    </a>
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
