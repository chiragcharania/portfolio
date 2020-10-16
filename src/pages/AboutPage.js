import React from 'react';
import Hero from '../components/Hero'
import Content from '../components/Content'

function HomePage(props) {
    return (

        <div>
            <Hero title={props.title} />

            <Content>
                <p>I am an adaptable college graduate (3.13 GPA, Master’s in Computer Science) from State University of
                     New York, Albany. Previously, I completed my bachelor’s degree from Vidyalankar Institute of Technology, 
                     Mumbai, India in Information Technology. During my curriculum, I have managed to do various projects, 
                     both related to courses and during my free time.</p>

                <p>During my academic career, I also managed to accrue nearly 3 years of work experience. I had the opportunity 
                    of working for Quantum CorpHealth Private Limited as a Web Developer. There I was one of the people 
                    responsible for developing the IT department. I learned valuable professional skills such as web designing, 
                    application development and database design.</p>
                
                <p>After completing my Master’s, I started working at Enterprise e-Support Inc. Here I am responsible for 
                    System Analysis, Design and development using OOAD methodology to capture and model business requirements. 
                    I write code in JavaScript, React, HTML, CSS and develop Full-stack applications. I work with REST/HTTP/SOAP
                     interfaces and working with XML/JSON. Along with that, I also work with relational database management, ORMs, 
                     and SQL programming along with SQLite and PostGRE. One of my main tasks is containerizing using Docker 
                     and/or Kubernetes.</p>

                <p>Please contact me at (518) 423-3046 or via email at chiragcharania@gmail.com.</p>
            </Content>
        </div>

    );

}

export default HomePage;
