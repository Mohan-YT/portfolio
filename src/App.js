// import logo from './logo.svg';
import './App.css';
import pinterest from './portfolio/images/pinterest.png'
import mohan2 from './portfolio/images/mohan-2.jpeg'
import mohan1 from './portfolio/images/mohan-1.jpg'
import Babycare from './portfolio/images/project image/baby care.png'
import Calculater from './portfolio/images/project image/calculater.png'
import FASTYBUY from './portfolio/images/project image/fastybuy.png'
import CLOCK from './portfolio/images/project image/clock.png'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useTypewriter ,Cursor } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';

function App() {
       //auto type
const[text] = useTypewriter({
    words : ['Front End Developer.','React Developer'],
    loop : true,
    typeSpeed : 30,
    deleteSpeed : 35,
    delaySpeed : 2000
})       
    //navbar hide show
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      // Detect if the device is mobile-sized
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 576); // Adjust breakpoint as needed
      };
  
      handleResize(); // Run on initial load
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const toggleMenu = () => {
      setIsMenuVisible((prev) => !prev);
    };

    window.addEventListener('scroll',function reveal(){
        let reveals = this.document.querySelectorAll('.reavel');
        for(let i = 0; i< reveals.length; i++){
            let windowHeigth = this.window.innerHeight;
            let revealtop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 40;
            if(revealtop < windowHeigth-revealPoint){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active');
            }
        }
    });

  return (

    <>
         {/* Navigation */}
<header>
    <nav className="navigation text-center">
        <div className="main-nav-box  text-center">
                    <div className="nav-head d-flex justify-content-center align-item-center pb-2 pb-lg-4 mt-2">
                         <div className="nav-title">
                              <h1>
                                <span>Portfo</span><span className="text-primary">lio</span>
                            </h1>
                            <img src={pinterest} alt="" />
                            <div onClick={toggleMenu}   style={{
                                display: isMobile ? 'block' : 'none'}}><i className="bi bi-list" id=" menu-toggle"></i></div>
                        </div>
                    </div>
                         <div className= "nav-list gap-md-3  fs-4" id="nav-list"  style={{display: isMobile ? (isMenuVisible ? 'flex' : 'none') : 'flex'}} >
                                <a className="btns fs-5 " href="#home">
                                    <i className="bi bi-house-door-fill pe-2"></i>
                                   <span>Home</span>
                                </a>
                                <a className="btns fs-5" href="#about">
                                    <i className="bi bi-person-fill pe-2 fs-3"></i>
                                   <span>About</span>
                                </a>
                                <a className="btns fs-5" href="#skill">
                                    <i className="bi bi-pencil-fill pe-2"></i>
                                    <span>Skills</span>
                                </a>
                                <a className="btns fs-5" href="#project">
                                    <i className="bi bi-images pe-2"></i>
                                    <span>Projects</span>
                                </a>
                                <a className="btns fs-5" href="#contact">
                                    <i className="bi bi-envelope-fill pe-2"></i>
                                    <span>Contact</span>
                                </a>
                            </div>
       </div>
    </nav>
</header>

<main>
            {/*  Home Page */}
        <section className="home container-fluid " id="home">
            <div className="home-box p-sm-2">
                <img src={mohan2} alt="My Picture" />
                <h1>S MOHAN <span className="text-primary">PRASANTH</span></h1>
                <p className="home-p fs-2">I'm a <span className="auto-type">{text}</span><Cursor cursorStyle="|" /></p>
                <div className="row btn-box">
                    <a href="#" className=" col-md-5 btn-1 border-white m-2">Hire Me</a>
                    <a href="/resume/mohanprasanth.pdf"  className="col-md-5 btn-2 border-white m-2">Download CV</a>
                </div>
            </div>
        </section>
            {/* About Page */}
        <section className="about container-fluid reavel" id="about">
            <div className="about-main-box p-sm-3">
                <div className="about-head mx-2">
                    <h1 className="text-primary border-bottom border-dark border-2 d-inline-block">About Us</h1>
                    <div className="about-content fs-6 fs-sm-5 fw-light p-2">
                        <p>Hi, I'm Mohan, a passionate and creative front-end developer with expertise in crafting visually appealing and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I bring ideas to life through clean and efficient code.</p>

                        <p> I recently completed a portfolio website and a massive web project as part of my training at Edex Tech IT Solutions, Coimbatore. My work focuses on creating responsive designs, ensuring excellent performance across devices, and delivering seamless user experiences.</p>

                        <p>When I’m not coding, you can find me exploring new web design trends, learning advanced development techniques, or brainstorming creative solutions to real-world problems. I’m excited to collaborate and contribute to building innovative projects that make a difference.</p>   
                    </div>
                </div>
                <div className="about-img mx-2">
                    <img src={mohan1} alt="My Pic" />
                </div> 
            </div>
        </section>
            {/*skills page */}
        <section className="skills container-fluid reavel" id="skill">
            <div className="main-skills p-sm-2 d-flex flex-column ">
                <h1 className="text-primary border-bottom border-2 border-dark d-inline-block">Skills</h1>
                <div className="skills-container ">
                        <div className="skills-boxes d-flex ">
                                <div className="skill-box p-2">
                                    <div>
                                        <i className="fa-brands fa-html5"></i>
                                        <p className="p1">HTML 5</p>
                                    </div>
                                </div>
                                <div className="skill-box p-2">
                                <div>
                                        <i className="fa-brands fa-css3"></i>
                                        <p className="p1">CSS</p>
                                </div>
                                </div>
                        </div>
                        <div className="skills-boxes d-flex ">
                            <div className="skill-box p-2">
                                <div>
                                    <i className="fa-brands fa-react"></i>
                                    <p className="p1">REACK JS</p>
                                </div>
                            </div>
                         </div>
                        <div className="skills-boxes d-flex ">
                                <div className="skill-box p-2">
                                    <div>
                                        <i className="fa-brands fa-bootstrap"></i>
                                        <p className="p1">BOOTSRAP 5</p>
                                    </div>
                                </div>
                                <div className="skill-box p-2">
                                <div>
                                        <i className="fa-brands fa-js"></i>
                                        <p className="p1">JAVASCRIPT</p>
                                </div>
                                </div>
                        </div>
                           
                </div>
            </div>
        </section>
             {/* project page  */}
        <section className="projects container-fluid reavel" id="project">
            <div className="project-main row py-sm-3">

                <h1 className="text-primary border-bottom border-2 border-dark">Projects</h1>

                <div className="project-boxes row col-12 py-2">
                    <div className="box-p col-12 col-lg-6 text-white text-start">
                        <h3 className="border-bottom border-2 border-primary text-primary">BABYCARE-DAYCARE : CLONE</h3>
                        <p>BabyCare is a responsive web application designed to offer daycare services to parents. It provides information about daycare programs, facilities, schedules, and allows parents to enroll their children. The platform prioritizes safety, learning, and comfort for children while providing convenience for parents.Babycare-Daycare Project built using <span className="fw-bolder">HTML</span>, <span className="fw-bolder">CSS</span>, and <span className="fw-bolder">JavaScript</span>.</p>
                    </div>
                    <div className="project-img col-12 col-lg-6 m-auto">
                        <div className="box-img">
                            <a href="https://babycare-clone.netlify.app"><img src={Babycare} alt="" className="img-fluid" /></a>
                        </div>
                        <a href="https://babycare-clone.netlify.app" className="btn live-btn fw-bold border border-2 rounded-0 m-4 px-md-5 py-2">LIVE-DEMO</a>
                    </div>

                    <hr className="d-lg-none text-white fs-3 fw-3" />

                </div>

                <div className="project-boxes row col-12 py-4">
                    <div className="project-img col-12 col-lg-6 m-auto">
                        <div className="box-img">
                            <a href="https://calclator-app.netlify.app"><img src={Calculater} alt="" className="img-fluid" /></a>
                        </div>
                        <a href="https://calclator-app.netlify.app" className="btn live-btn fw-bold border border-2 rounded-0 m-4 px-md-5 py-2">LIVE-DEMO</a>    
                    </div>
                    <div className="box-p col-12 col-lg-6 text-start ms-auto text-white">
                        <h3 className="border-bottom border-2 border-primary text-primary">CALCULATER</h3>
                        <p>This web application is a fully functional calculator, built using <span className="fw-bolder">HTML</span>, <span className="fw-bolder">CSS</span>, and <span className="fw-bolder">JavaScript</span>. It offers basic arithmetic operations like addition, subtraction, multiplication, and division. The design is sleek, user-friendly, and responsive to different screen sizes, providing an intuitive experience on both desktops and mobile devices.</p>
                    </div>

                    <hr className="d-lg-none text-white fs-3 fw-3" />

                </div>

                <div className="project-boxes row col-12 py-4">
                    <div className="box-p col-12 col-lg-6 text-start ms-auto text-white">
                        <h3 className="border-bottom border-2 border-primary text-primary">FASTYBUY</h3>
                        <p> The FastyBuy webpage is an interactive online shopping platform designed to offer a seamless experience for purchasing a wide range of products, including dresses, toys, fruits, and vegetables. Built exclusively with <span className="fw-bolder">React.js</span>, the website provides users with a dynamic, responsive, and user-friendly interface. This project highlights the importance of efficient component-based design, state management, and interactive features to enhance the online shopping experience.</p>
                    </div>
                    <div className="project-img col-12 col-lg-6 m-auto">
                        <div className="box-img">
                            <a href="https://fastybuy.netlify.app"><img src={FASTYBUY} alt="" className="img-fluid" /></a>
                        </div>
                        <a href="https://fastybuy.netlify.app" className="btn live-btn fw-bold border border-2 rounded-0 m-4 px-md-5 py-2">LIVE-DEMO</a>    
                    </div>

                    <hr className="d-lg-none text-white fs-3 fw-3" />

                </div>

                <div className="project-boxes row col-12 py-4">
                    <div className="project-img col-12 col-lg-6 m-auto">
                        <div className="box-img">
                            <a href="https://clockandtimer.netlify.app"><img src={CLOCK} alt="" className="img-fluid" /></a>
                        </div>
                        <a href="https://clockandtimer.netlify.app" className="btn live-btn fw-bold border border-2 rounded-0 m-4 px-md-5 py-2">LIVE-DEMO</a>    
                    </div>
                    <div className="box-p col-12 col-lg-6 text-start ms-auto text-white">
                        <h3 className="border-bottom border-2 border-primary text-primary">CLOCK & TIMER</h3>
                        <p> The Clock and Timer web application is a simple yet functional productivity tool built using <span className="fw-bolder">HTML</span>, <span className="fw-bolder">CSS</span>, and <span className="fw-bolder">JavaScript</span>. This webpage allows users to track time effectively with features such as a real-time clock, countdown timer, and stopwatch, all within an intuitive and interactive interface.</p>
                    </div>
                   
                </div>
            </div>
        </section>
            {/* contact page */}
        <section className="contacts container-fluid reavel" id="contact">
            <div className="contact-main d-flex flex-column">
                <h1 className="text-primary border-bottom border-2 border-dark">Contact</h1>
                <div className="contact-box ">
                    <div className="contact-img">
                        <img src={mohan2} alt="" />
                    </div>
                    <div>
                        <p className="fs-4 fw-bolder text-white w-75  mx-auto">If you'd like to get in touch, feel free to send me a message!</p>
                    </div>
                    <div className="contact-btn "><a href="mailto:mohanprasanth3883@gmail.com" className="fs-4 fw-bolder" title="Send to Email"><i className="bi bi-envelope-fill"></i> Contact Me!</a>
                    </div>
                    <div className="contact-icon mt-3">
                        
                        <a href="https://www.facebook.com/profile.php?id=100028216896503"><i className="bi bi-facebook"></i></a>
                        <a href="https://wa.me/+919750063883"><i className="bi bi-whatsapp"></i></a>
                        <a href="tel:9750063883"><i className="bi bi-telephone-fill"></i></a>
                        <a href="https://www.linkedin.com/in/s-mohan-prasanth/"><i className="bi bi-linkedin"></i></a>
                        <a href="https://t.me/Mohan3883"><i className="bi bi-telegram"></i></a>
                    </div>
                </div>
            </div>
        </section>
</main>
    </>
  );
}

export default App;
