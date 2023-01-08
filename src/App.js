import logo from './logo.svg';
import React from 'react';
import './App.css';
import './styles/styles.scss';
import emailjs from 'emailjs-com';
import { useRef  } from 'react';

import Resume from './img/Shree_Resume.pdf';


 function showcontainer(actionname){

  var element = document.getElementsByClassName('container');
  var elementctrl =  document.querySelectorAll("[data-id='"+actionname+"']");

  // Iterate through the retrieved elements and add the necessary class names.
  for(var i = 0; i < element.length; i++)
  {
      element[i].classList.remove('active');
  }
  for(var i = 0; i < document.getElementsByClassName('control').length; i++)
  {
    document.getElementsByClassName('control')[i].classList.remove('active-btn');
  }
  // Iterate through the retrieved elements and add the necessary class names.
 document.getElementsByClassName(actionname)[0].classList.add('active');
  for(var i = 0; i < elementctrl.length; i++)
  {
    elementctrl[i].classList.add('active-btn');
  }
  
 }


function App() {

  const cform = useRef();

  const submitquery=(e)=>{
    debugger;
    e.preventDefault();
    // emailjs.sendForm('service_4gt0jvu','template_035neu8',"#contact-form",'QHu46_PYmVxUGI88J').then(res=>{
    //    alert("Message sent successfully.");
    // }).catch(err=>alert("Could not process the message. Please contact by LinkedIn"))
  
    var formData = new FormData(document.getElementById("contact-form"));
      formData.append('service_id', 'service_4gt0jvu');
      formData.append('template_id', 'template_035neu8');
      formData.append('user_id', 'QHu46_PYmVxUGI88J');
   
      emailjs.sendForm('service_6s82y6l','template_035neu8',cform.current,'QHu46_PYmVxUGI88J').then(res=>{
           alert("Message sent successfully.");
        }).catch(err=>{alert("Could not process the message. Please contact by LinkedIn");  console.log(err.text);})
   }
  return (

<div className="main-content">
    <header className="container header active home" id="home">
        <div className="header-content">
            <div className="left-header">
                {/* <div className="h-shape"></div> */}
                <div className="image">
                    <img src= {require('./img/SHREE.jpg')} alt=""/>
                </div>
            </div>
            <div className="right-header">
                <h1 className="name">
                    Hi, I'm <span>Shree</span><br/>
                    Software Engineer
                </h1>
                <p>
                    My objective is to work in a challenging and responsible position where my conceptual skill and professional background can be utilized for the progress of the organization and to update myself with the present technology to grow with the organization.
                </p>
                <div className="btn-con">
                    <a href={Resume} download="Shree_Resume.pdf" className="main-btn">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><i className="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    <main>
        <section className="container about" id="about">
            <div className="main-title">
                <h2>About <span>me</span>
                {/* <span className="bg-text">Context</span> */}
                </h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h4>Information About me</h4>
                    <p>
                    Software engineer with 9+ years of experience as member of software product development team. Extensive experience in using .NET stack for web-based application development with firm hold on cloud technologies.
                    </p>
                    <div className="btn-con">
                        <a  href={Resume} download="Shree_Resume.pdf" className="main-btn">
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><i className="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
                <div className="right-about">
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">Expertise</p>
                            <p className="small-text">Full Stack & Cloud</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">9+</p>
                            <p className="small-text">Years of <br /> experience</p>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                  <div className="progress-bar">
                        <p className="prog-title">C#</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                   
                    <div className="progress-bar">
                        <p className="prog-title">.NET 4.5+/MVC, CORE</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">DataBase (SQL/MySQL)</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Cloud (AWS/Azure)</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">html5</p>
                        <div className="progress-con">
                            <p className="prog-text">85%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Styling (CSS3/Bootstrap)</p>
                        <div className="progress-con">
                            <p className="prog-text">85%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">FrontEnd (jQuery/JavaScript/ReactJS)</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="js"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">NodeJS/GraphQL/Python</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">FEB 2020 – MAY 2022</p>
                    <h5>Software Development Engineer<span> - McAfee Software (India) Private Limited</span></h5>
                    <p>
                    Involved in analysis of McAfee product purchase workflow, identify potential bottlenecks and
causes for decrease in sales; Analysis using Python machine learning models to identify outliers
in sales.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">JUNE 2019 – FEB 2020</p>
                    <h5>Analyst<span> - Jones Lang LaSalle Property Consultants (India) Private Limited</span></h5>
                    <p>
                        End to end development of Web application to estimate resources for office space.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">JULY 2015 – MAY 2019</p>
                    <h5>Developer II<span> - Paychex IT Solutions India</span></h5>
                    <p>
                    Implemented key features on the “Stratustime” product and its maintenance – A cloud-based time and attendance
solution
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">NOV 2012 – JUN 2015</p>
                    <h5>Product Engineer<span> - Touch212 Solutions Private Limited</span></h5>
                    <p>
                    Invloved in end-to-end implementation of the “MyFriday” product.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2008 - 2012</p>
                    <h5>Bachelor of Engineering<span> - Visvesvaraya Technological University, India</span></h5>
                    <p>
                        With majors in Computer Science Engineering
                    </p>
                </div>
            </div>
        </section>
        <section className="container" id="portfolio">
            <div className="main-title">
                <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
            </div>
            <p className="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>
            <div className="portfolios">
                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/port1.jpg" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/port2.jpg" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/port3.jpg" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/port4.jpg" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/port5.jpg" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/port2.jpg" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/port7.jpg" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container" id="blogs">
            <div className="blogs-content">
                <div className="main-title">
                    <h2>My <span>Blogs</span><span className="bg-text">My Blogs</span></h2>
                </div>
                <div className="blogs">
                    <div className="blog">
                        <img src="img/port6.jpg" alt=""/>
                        <div className="blog-text">
                            <h4>
                                How to Create Your Own Website
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="img/blog1.jpg" alt=""/>
                        <div className="blog-text">
                            <h4>
                                How to Become an Expert in Web Design
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="img/blog2.jpg" alt=""/>
                        <div className="blog-text">
                            <h4>
                                Become a Web Designer in 10 Days
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="img/blog3.jpg" alt=""/>
                        <div className="blog-text">
                            <h4>
                                Debbuging made easy with Web Inspector
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="img/port1.jpg" alt=""/>
                        <div className="blog-text">
                            <h4>
                                Get started with Web Design and UI Design
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="img/port3.jpg" alt=""/>
                        <div className="blog-text">
                            <h4>
                                This is what you need to know about Web Design
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container contact" id="contact">
            <div className="contact-container">
                <div className="main-title">
                    <h2>Contact <span>Me</span>
                        {/* <!-- <span className="bg-text">Contact</span> --> */}
                    </h2>
                </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <h4>Contact me here</h4>
                        <p>
                            Overview about me. You can also reach me on LinkedIn.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <p>
                                    San Jose, CA
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <p>
                                    <span>shree912@yahoo.com</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-user-graduate"></i>
                                </div>
                                <p>
                                    <span>Bachelor of Engineering (CSE)/Visvesvaraya Technological University, India</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-mobile"></i>
                                </div>
                                <p>
                                    <span>+1 (408) 442-9812</span>
                                </p>
                            </div>
                        </div>
                        <div className="contact-icons">
                            <div className="contact-icon">
                                {/* <!-- <a href="www.facebook.com" target="_blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a> -->
                                <!-- <a href="#" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a> --> */}
                                <a href="https://www.github.com/shreeupadhyaya" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/shree-u-2056612a" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                {/* <!-- <a href="#" target="_blank">
                                    <i className="fab fa-youtube"></i>
                                </a> --> */}
                            </div>
                        </div>
                    </div>
                    <div className="right-contact">
                        <form  encType="multipart/form-data" className="contact-form" id="contact-form" onSubmit={submitquery} ref={cform}>
                            <div className="input-control i-c-2">
                                <input type="text" name="enquirer_name" required placeholder="YOUR NAME"/>
                                <input type="email" name="enquirer_email" required placeholder="YOUR EMAIL"/>
                            </div>
                            <div className="input-control">
                                <input type="text" required  name="enquirer_topic" placeholder="ENTER SUBJECT"/>
                            </div>
                            <div className="input-control">
                                <textarea id="" cols="15" rows="8" name="enquirer_query" placeholder="Message Here..."></textarea>
                            </div>
                            <div className="submit-btn">
                                
                                <button type="submit" className="main-btn">
                                <a href="#" className="main-btn">
                                    {/* <span className="btn-text " type="submit" onClick={submitquery()}>Submit</span> */}
                                    <span className="btn-text ">Submit</span>
                                    <span className="btn-icon"><i className="fas fa-send-o"></i></span>
                                </a>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <div className="controls">
        <div className="control active-btn" data-id="home" onClick={()=>{ showcontainer('home')}}>
            <i className="fas fa-home" title="Home"></i>
        </div>
        <div className="control" data-id="about" onClick={()=>{showcontainer('about')}}>
            <i className="fas fa-user" title="About"></i>
        </div>
        {/* <!-- <div className="control" data-id="portfolio">
            <i className="fas fa-briefcase" title="About"></i>
        </div> -->
        <!-- <div className="control" data-id="blogs">
            <i className="far fa-newspaper" title="About"></i>
        </div> --> */}
        <div className="control" data-id="contact" onClick={()=>{showcontainer('contact')}}>
            <i className="fas fa-envelope-open" title="Contact"></i>
        </div>
    </div>
    {/* <!-- <div className="theme-btn">
        <i className="fas fa-adjust"></i>
    </div> --> */}
    {/* <script src="scripts/index.js" ></script> */}
</div>

  );
}

export default App;
