import React, {useState,useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser"
import "../styles/animations.css"
import logo from "../styles/logo.png"

import {VscThreeBars} from "react-icons/vsc"
import {HiOutlineDesktopComputer} from "react-icons/hi"
import {BiLogoReact, BiPaperPlane} from "react-icons/bi"
import {ImLocation2} from "react-icons/im"
import {TbBrandPython} from "react-icons/tb"
import {AiOutlineClose, AiFillPhone,AiFillMail, AiFillGithub} from "react-icons/ai"
import codesnippet from "../styles/codesnippet.jpg"
import bigproject from "../styles/bigProject.png"
import arrow from "../styles/arrow.png"
import project1 from "../styles/project1.png"
import project2 from "../styles/project2.png"
import project3 from "../styles/project2.jpg"
import project4 from "../styles/project4.JPG"
import project6 from "../styles/project6.png"

const Home = () => {

  const [open,setOpen]=useState(false);
  const [values, setValues] = useState({
      fullName: '',
      email: '',
      message: ''
    });



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

  const [sticky,setSticky]=useState(false)
  const {ref: heroContent, inView: heroContentIsVisible} = useInView({
      triggerOnce: true
  });
  const {ref: projectHeroLeft, inView: projectHeroLeftIsVisible} = useInView({
      triggerOnce: true
  });
  const {ref: projectHeroRight, inView: projectHeroRightIsVisible} = useInView({
      triggerOnce: true
  });
  const {ref: skillsBoxFirst, inView: skillsBoxFirstIsVisible} = useInView({
      triggerOnce: true
  });
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
  
    },[])
  return(
    <div className={`${open ? "" : ""} duration-300`}>
    
    {/* ===================================================== */}
    {/* NAVBAR */}
    {/* ===================================================== */}
    <nav className={`fixed top-0 z-10 ${sticky? "bg-gray-900" : ""} duration-300 ease-in-out w-screen`}>
    {/* LOGO */}
        <div>
          <img src={logo} className="absolute lg:top-4 xl:left-20 xl:w-60 sm:w-48 w-24 md:left-32 sm:left-24 left-16 md:top-3 sm:top-1 top-2.5 hover:cursor-pointer"
                          onClick={()=>window.location.reload()}/>
        </div>
      {/* DESKTOP NAV */}
        <div className="xl:grid hidden w-6/12 mx-auto  grid-cols-4 text-center py-8 text-gray-100">
          <div className={`w-full text-center`}>
            
            <a href="#home" className="text-center mx-auto w-fit flex flex-col cursor-pointer hover:text-white hover:scale-110 duration-100 ease-in-out">
              <span className="text-xs text-right font-normal">01</span>
              // home
            </a>
          </div>
          <div className={`w-full text-center`}>
            
            <a href="#skills" className="text-center mx-auto w-fit flex flex-col cursor-pointer hover:text-white hover:scale-110 duration-100 ease-in-out">
              <span className="text-xs text-right font-normal">02</span>
              // skills
            </a>
          </div>
          <div className={`w-full text-center`}>
            
            <a href="#projects" className="text-center mx-auto w-fit flex flex-col cursor-pointer hover:text-white hover:scale-110 duration-100 ease-in-out">
              <span className="text-xs text-right font-normal">03</span>
              // projects
            </a>
          </div>
          <div className={`w-full text-center`}>
            
            <a href="#contact" className="text-center mx-auto w-fit flex flex-col cursor-pointer hover:text-white hover:scale-110 duration-100 ease-in-out">
              <span className="text-xs text-right font-normal">04</span>
              // contact
            </a>
          </div>

        </div>
        {/* MOBILE NAV */}
        <div className="xl:hidden grid relative md:ml-12 ml-6 py-4 z-10">
            <VscThreeBars className={`${open ? "" : ""} duration-300 cursor-pointer text-white md:w-12 md:h-12 sm:h-8 sm:w-8 h-4 w-4`} onClick={()=>{setOpen(!open)}}/>
           

            <div className={`${open ? "text-gray-700 xl:-translate-x-full flex": "-translate-x-full"} duration-300 fixed px-4 top-0 left-0 bg-gray-100 flex-col h-screen w-10/12` }>
                <AiOutlineClose className={`cursor-pointer text-gray-700 h-10 w-10 p-2 rounded-full hover:bg-gray-200 duration-1000  mt-4 `} onClick={()=>{setOpen(!open)}}/>
                <a href="#home" className="py-2 cursor-pointer font-light-bubble md:text-xl text-sm" onClick={()=>{setOpen(!open)}}>// home</a>
                <a href="#skills" className=" py-2 cursor-pointer font-light-bubble md:text-xl text-sm" onClick={()=>{setOpen(!open)}}>// skills</a>
                <a href="#projects" className=" py-2 cursor-pointer font-light-bubble md:text-xl text-sm" onClick={()=>{setOpen(!open)}}>// projects</a>
                <a href="#contact" className=" pb-4 py-2 cursor-pointer font-light-bubble md:text-xl text-sm" onClick={()=>{setOpen(!open)}}>// contact</a>

            </div>
        </div>
    </nav>




    {/* ===================================================== */}
    {/* HERO */}
    {/* ===================================================== */}
      <div className="hero h-screen flex text-center" id="home">
        {/* TEXT */}
        <div className="relative w-screen flex flex-col text-white h-screen items-center justify-center">
          <h1 className="2xl:text-9xl lg:text-8xl sm:text-6xl text-4xl font-bold lg:py-16 py-8">
            ROY LEE
          </h1>
          <h2 className={`${heroContentIsVisible ? "fadeInThree" : ""} 2xl:text-3xl lg:text-2xl text-sm`} ref={heroContent}>SOFTWARE ENGINEER,  WEB DEVELOPER</h2>
          <div className="container flex relative justify-center">
              <div className="chevron absolute lg:w-12 lg:h-2 sm:w-8 w-6 h-1 "></div>
              <div className="chevron absolute lg:w-12 lg:h-2 sm:w-8 w-6 h-1 "></div>
              <div className="chevron absolute lg:w-12 lg:h-2 sm:w-8 w-6 h-1 "></div>
        </div>
        </div> 

      </div>






    {/* ===================================================== */}
    {/* SKILLS */}
    {/* ===================================================== */}
      <div id="skills" className="bg-gray-900 h-full">
        <h1 className="lg:text-8xl sm:text-6xl text-4xl text-white text-center lg:py-36 py-12 font-bold">My Skills</h1>
        <div className="grid lg:grid-cols-3 2xl:w-8/12 w-11/12 mx-auto text-white">
            <div className={`sm:border-4 border-2  border-white py-4 flex flex-col items-center w-full ${skillsBoxFirstIsVisible ? "fadeInOne" : ""} text-white`} ref={skillsBoxFirst}>
                <div className="w-full lg:py-6 lg:px-8 pl-12 mx-auto flex items-center lg:justify-center">
                    <HiOutlineDesktopComputer className="sm:w-12 sm:h-12 w-6 h-6 sm:mr-4 mr-2" />
                      <h6 className="2xl:text-3xl lg:text-2xl sm:text-3xl text-lg font-semibold" style={{lineHeight:"100%"}}><span className="underline sm:decoration-8 decoration-4 decoration-pink-200" >Software</span> <br></br>Development</h6>
                </div>
                <div className="px-6 flex items-center justify-center">
                    <div className="pr-4 flex flex-col items-center justify-center text-gray-500 font-light" style={{fontSize: "0.7rem"}}>
                        <h6 className="pb-1">&lt;h4&gt;</h6>
                        <div className="bg-gray-500 w-0.25 lg:h-24 h-20"></div>
                        <h6 className="pt-1">&lt;/h4&gt;</h6>
                    </div>
                    <h6 className="text-gray-400 lg:text-lg sm:text-xl text-xs"> 
                        Experienced in functional and object-oriented programming: Javascript, Python, Java, HTML, CSS.
                    </h6>
                </div>
            </div>
            <div className={`sm:border-x-4 sm:border-b-4 border-2 lg:border-l-0 lg:border-t-4 border-t-0  border-white py-4 flex flex-col items-center w-full ${skillsBoxFirstIsVisible ? "fadeInTwo" : ""} text-white`} ref={skillsBoxFirst}>
                <div className="w-full lg:py-6 lg:px-8 pl-12 mx-auto flex items-center lg:justify-center">
                    <BiLogoReact className="sm:w-12 sm:h-12 w-6 h-6 sm:mr-4 mr-2" />
                      <h6 className="2xl:text-3xl lg:text-2xl sm:text-3xl text-lg font-semibold" style={{lineHeight:"100%"}}><span className="underline sm:decoration-8 decoration-4 decoration-blue-200" >Frontend Dev</span> <br></br>React, Next</h6>
                </div>
                <div className="px-6 flex items-center justify-center">
                    <div className="pr-4 flex flex-col items-center justify-center text-gray-500 font-light" style={{fontSize: "0.7rem"}}>
                        <h6 className="pb-1">&lt;h4&gt;</h6>
                        <div className="bg-gray-500 w-0.25 lg:h-24 h-20"></div>
                        <h6 className="pt-1">&lt;/h4&gt;</h6>
                    </div>
                    <h6 className="text-gray-400 lg:text-lg sm:text-xl text-xs"> 
                    Passionate about UI/UX. Experience in HTML, CSS, JS, React, Bootstrap, Tailwind, SCSS, and Netlify.
                    </h6>
                </div>
            </div>
            <div className={`sm:border-x-4 sm:border-b-4 border-2 lg:border-l-0 lg:border-t-4 border-t-0  border-white py-4 flex flex-col items-center w-full ${skillsBoxFirstIsVisible ? "fadeInThree" : ""} text-white`} ref={skillsBoxFirst}>
                <div className="w-full lg:py-6 lg:px-8 pl-12 mx-auto flex items-center lg:justify-center">
                    <TbBrandPython className="sm:w-12 sm:h-12 w-6 h-6 sm:mr-4 mr-2" />
                      <h6 className="2xl:text-3xl lg:text-2xl sm:text-3xl text-lg font-semibold" style={{lineHeight:"100%"}}><span className="underline sm:decoration-8 decoration-4 decoration-green-200" >Backend Dev</span> <br></br>Node, Rails</h6>
                </div>
                <div className="px-6 flex items-center justify-center">
                    <div className="pr-4 flex flex-col items-center justify-center text-gray-500 font-light" style={{fontSize: "0.7rem"}}>
                        <h6 className="pb-1">&lt;h4&gt;</h6>
                        <div className="bg-gray-500 w-0.25 lg:h-24 h-20"></div>
                        <h6 className="pt-1">&lt;/h4&gt;</h6>
                    </div>
                    <h6 className="text-gray-400 lg:text-lg sm:text-xl text-xs"> 
                    Familiar with databases and backend frameworks, including SQL, NoSQL, PostgreSQL, SQLite3, MongoDB, Ruby on Rails, NodeJS, and Express.
                    </h6>
                </div>
            </div>



        </div>
        <img  src={codesnippet} className="relative z-0 opacity-20 bottom-24 lg:w-4/12 w-8/12 mx-auto"/>
      </div>


    {/* ===================================================== */}
    {/* FEATURED PROJECTS */}
    {/* ===================================================== */}
    <div id="projects" className="bg-gray-900 h-full">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:items-center lg:w-10/12 w-11/12 mx-auto">
        <div className={` ${projectHeroLeftIsVisible ? "fadeInOne" : ""}`} ref={projectHeroLeft}>
          <h1 className={` lg:w-full w-11/12 lg:text-8xl sm:text-6xl text-4xl text-white lg:text-left text-center lg:pt-36 pt-12 font-bold`}>My Work</h1>
          <p className="text-white lg:text-lg sm:text-xl text-xs xl:w-full lg:w-10/12  md:w-11/12 md:mr-auto md:mx-0  lg:pt-12 pt-6 mx-auto text-left lg:pb-0 pb-24">
            Deployed fullstack web application for submitting and reviewing peer essays. Built with a React frontend, Node/Express backend with a custom JWT authentication system
          </p>
        </div>
        <div className={`col-span-2 xl:-mb-48 md:-mb-36 ${projectHeroLeftIsVisible ? "fadeInTwo" : ""}`} ref={projectHeroRight}>
          <img src={bigproject} className="relative w-full "/>
          <img src={arrow} className="-scale-x-100 rotate-180 relative w-2/12 lg:left-24 sm:left-16 left-4"/>
          <div className="w-fit flex flex-col items-center text-xl text-white">
            <h3 className="lg:text-2xl text-sm">Featured Project</h3>
            <h2 className="lg:text-4xl sm:text-xl text-lg font-semibold">Revieword</h2>
            <a href="https://cheery-mermaid-a47c44.netlify.app" target="_blank" className="lg:text-sm text-xs font-semibold w-fit mt-3 whitespace-nowrap lg:px-4 px-3 lg:py-2 py-1.5 text-left bg-blue-200 text-gray-900  rounded-md cursor-pointers hover:bg-blue-300 duration-300">See Demo</a>
          </div>
        </div>
      </div>

 
    </div>

    {/* ===================================================== */}
    {/* ACTUAL PROJECTS */}
    {/* ===================================================== */}
    <div className='h-full bg-gray-900 md:py-72 py-24'>
      <div className='auto-rows-max grid grid-flow-row lg:grid-cols-3 grid-cols-1 md:gap-6 gap-3 xl:w-9/12 sm:w-8/12 w-10/12 mx-auto'>
        {/* PROJECT 1 */}
        <div className="cursor-pointer h-full group rounded-sm overflow-hidden hover:rounded-t-none flex flex-col">
          <div style={{backgroundColor: "#363636"}} className="overflow-hidden flex items-center justify-center rounded-t-sm hover:rounded-t-none duration-0">
            <img src={project1} className="duration-200 group-hover:scale-110 ease-in" style={{height: "16rem", objectFit: "cover", width:"100rem", aspectRatio:"16:9"}}/>
          </div>
          <div className="lg:h-1/3 h-1/4 py-4 bg-gray-800 flex flex-col justify-center text-gray-100 relative">
            <div className="xl:w-8/12 w-11/12 mx-auto">
              <h4 className="2xl:text-2xl lg:text-xl text-md text-gray-200 font-semibold">Netflix Clone</h4> 
              <div className=' text-gray-300 flex group-hover:-translate-x-1/2 duration-300' style={{width:"300%", fontSize:"0.6rem"}}>
                <h5 className="2xl:text-sm xl:text-lg lg:text-md md:text-sm w-full duration-0 ">Fullstack Web Development</h5>
                <h5 className="2xl:text-sm xl:text-lg lg:text-md md:text-sm w-full duration-0">See Project — </h5>
              </div>

            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="cursor-pointer h-full group rounded-sm overflow-hidden hover:rounded-t-none flex flex-col">
          <div style={{backgroundColor: "#363636"}} className="overflow-hidden flex items-center justify-center rounded-t-sm hover:rounded-t-none duration-0">
            <img src={project2} className="duration-200 group-hover:scale-110 ease-in" style={{height: "16rem", objectFit: "cover", width:"100rem", aspectRatio:"16:9"}}/>
          </div>
          <div className="lg:h-1/3 h-1/4 py-4 bg-gray-800 flex flex-col justify-center text-gray-100 relative">
            <div className="xl:w-8/12 w-11/12 mx-auto">
              <h4 className="2xl:text-2xl lg:text-xl text-md text-gray-200 font-semibold">BeeLikeCoders - Hackathon</h4> 
              <div className=' text-gray-300 flex group-hover:-translate-x-1/2 duration-300' style={{width:"300%", fontSize:"0.6rem"}}>
                <h5 className="2xl:text-sm xl:text-lg lg:text-md md:text-sm w-full duration-0 ">Frontend Web Development</h5>
                <h5 className="2xl:text-sm xl:text-lg lg:text-md md:text-sm w-full duration-0">See Project — </h5>
              </div>

            </div>
          </div>
        </div>
        {/* PROJECT 3 */}
        <div className="cursor-pointer h-full group rounded-sm overflow-hidden hover:rounded-t-none flex flex-col">
          <div style={{backgroundColor: "#363636"}} className="overflow-hidden flex items-center justify-center rounded-t-sm hover:rounded-t-none duration-0">
            <img src={project3} className="duration-200 group-hover:scale-110 ease-in" style={{height: "16rem", objectFit: "cover", width:"100rem", aspectRatio:"16:9"}}/>
          </div>
          <div className="lg:h-1/3 h-1/4 py-4 bg-gray-800 flex flex-col justify-center text-gray-100 relative">
            <div className="xl:w-8/12 w-11/12 mx-auto">
              <h4 className="2xl:text-2xl lg:text-xl text-md text-gray-200 font-semibold">Ticker Backtest</h4> 
              <div className=' text-gray-300 flex group-hover:-translate-x-1/2 duration-300' style={{width:"300%", fontSize:"0.6rem"}}>
                <h5 className="2xl:text-sm xl:text-lg lg:text-md md:text-sm w-full duration-0 ">Data Science</h5>
                <h5 className="2xl:text-sm xl:text-lg lg:text-md md:text-sm w-full duration-0">See Project — </h5>
              </div>

            </div>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className="lg:col-span-2 lg:row-span-2 col-span-1 row-span-1 cursor-pointer h-full group rounded-sm overflow-hidden hover:rounded-t-none flex flex-col">
          <div style={{backgroundColor: "#363636"}} className="w-full h-full overflow-hidden flex items-center justify-center rounded-t-sm hover:rounded-t-none duration-0">
            <img src={project4} className="duration-200 group-hover:scale-110 ease-in" style={{height: "100%", objectFit:"cover"}}/>
          </div>
          <div className="lg:h-1/3 h-1/4 py-4 bg-gray-800 flex flex-col justify-center text-gray-100 relative">
            <div className="xl:w-8/12 w-11/12 mx-auto">
              <h4 className="2xl:text-3xl lg:text-xl text-md text-gray-200 font-semibold">Revieword - Peer Essay Reviewing </h4> 
              <div className=' text-gray-300 flex group-hover:-translate-x-1/2 duration-300' style={{width:"300%", fontSize:"0.6rem"}}>
                <h5 className="2xl:text-md xl:text-lg lg:text-md md:text-sm w-full duration-0 ">Fullstack Web Development</h5>
                <h5 className="2xl:text-md xl:text-lg lg:text-md md:text-sm w-full duration-0">See Project — </h5>
              </div>

            </div>
          </div>
        </div>


        {/* PROJECT 5 */}
        <div className="cursor-pointer h-full group rounded-sm overflow-hidden hover:rounded-t-none flex flex-col">
          <div style={{backgroundColor: "#363636"}} className="overflow-hidden flex items-center justify-center rounded-t-sm hover:rounded-t-none duration-0">
            <img src={project6} className="duration-200 group-hover:scale-110 ease-in" style={{height: "100%", objectFit: "cover", width:"100rem"}}/>
          </div>
          <div className="lg:h-1/3 h-1/4 py-4 bg-gray-800 flex flex-col justify-center text-gray-100 relative">
            <div className="xl:w-8/12 w-11/12 mx-auto">
              <h4 className="2xl:text-2xl lg:text-xl text-md text-gray-200 font-semibold">PrepWhiz - Test Prep (Current)</h4> 
              <div className=' text-gray-300 flex group-hover:-translate-x-1/2 duration-300' style={{width:"300%", fontSize:"0.6rem"}}>
                <h5 className="2xl:text-sm xl:text-lg lg:text-md md:text-sm w-full duration-0 ">Fullstack Web Development</h5>
                <h5 className="2xl:text-sm xl:text-lg lg:text-md md:text-sm w-full duration-0">See Project — </h5>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>





    {/* CONTACT */}



    <div id="contact" className="bg-gray-900 pt-48">
      <h1 className="text-7xl text-center uppercase text-white underline decoration-purple-300 decoration-8 font-semibold py-4" style={{  font: "'Oswald', sans-serif"}}>Contact Me</h1>
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
              
            <button className="btn btn-primary send-button flex justify-center" style={{backgroundColor:"rgb(165, 165, 252)"}} id="submit" type="submit" value="SEND">
                <div className="alt-send-button">
                <BiPaperPlane size="24" className="fa fa-paper-plane fa-2x mx-auto" /><span className="send-text">SEND</span>
                </div>
            
            </button>
          
          </form>
          

          
           <div>
              <ul className="-ml-6">
              <li className="flex items-center lg:w-full w-9/12 mx-auto">
                <ImLocation2 className="lg:w-6 lg:h-6 w-5 h-5 text-gray-400"/>
                <span className="text-gray-400 lg:text-lg text-sm lg:py-4 py-2 font-bold place ">Pleasant Hill, CA</span>
              </li>
              
              <li className="flex items-center lg:w-full w-9/12 mx-auto">
                <AiFillPhone  className="lg:w-6 lg:h-6 w-5 h-5 text-gray-400"/>
                <span className="text-gray-400 lg:text-lg text-sm lg:py-4 py-2 font-bold phone"><a href="tel:1-470-919-2464" title="Give me a call">(470) 919-2464</a></span></li>
              
              <li className="flex items-center lg:w-full w-9/12 mx-auto">
                <AiFillMail className="lg:w-6 lg:h-6 w-5 h-5 text-gray-400"/>
                <span className="text-gray-400 lg:text-lg text-xs lg:py-4 py-2 font-bold  gmail form-email"><a href="mailto:leeroy0912@yahoo.com" title="Send me an email">leeroy0912@yahoo.com</a></span></li>
              
              </ul>

              <ul className="social-media-list">
              <li>
              <Link to="https://github.com/roylee0912" className="">
                  <AiFillGithub className="w-full h-full"/>
              </Link>
              </li>


              </ul>

              <div className="copyright">&copy; 2023 Roy Lee. All Rights Reserved</div>
            </div>  
      </div>
    </div>
  </div>


  )
  
}


export default Home;
