import React from 'react'
import {Row, Col, Figure} from 'react-bootstrap'

import photo from '../assets/photo.jpg'
import htmlIcon from '../assets/html5.png'
import cssIcon from '../assets/css3.png'
import bootstrapIcon from '../assets/bootstrap.png'
import jsIcon from '../assets/js.png'
import reactIcon from '../assets/react.png'

import wave1 from '../assets/wave1.svg'
import wave2 from '../assets/wave2.svg'

import prokarir from '../assets/prokarir.png'
import filmtop from '../assets/filmtop.png'
import kamusalkohol from '../assets/kamusalkohol.png'
import sholawatyuk from '../assets/sholawatyuk.png'

import github from '../assets/github.png'
import gitlab from '../assets/gitlab.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

import email from '../assets/email.png'

const Body = () => {
    return (
        <div>
            <div className='profile'>
                <div className='photo d-flex align-items-center justify-content-center' id='1'>
                    <Row className="row-profile d-flex align-items-center justify-content-center">
                        <Col xs={4} >       
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <img className='image' src={photo} alt='Photo'/>
                            </div>                     
                        </Col>
                        <Col xs={6} >
                            <div className='intro'>
                                <h2>Hello, I am Sri Aryo Sembodo</h2>
                                <h3>Frontend Developer</h3>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am Frontend Developer. I am a graduate from Agriculture Faculty of Brawijaya University. Due to my interest in Mobile Development, I have created several mobile applications on several projects.</p>
                            </div>
                            <Row>
                                <Col>
                                    <a className='social d-flex align-items-center justify-content-center' href='https://github.com/sasembodo' target='_blank'>                                        
                                                <img className='socialMedia' src={github} alt='Picture'/>
                                                <p>sasembodo</p>
                                    </a>
                                </Col>
                                <Col>
                                    <a className='social d-flex align-items-center justify-content-center' href='https://gitlab.com/sasembodo' target='_blank'>                                        
                                                <img className='socialMedia' src={gitlab} alt='Picture'/>
                                                <p>sasembodo</p>
                                    </a>
                                </Col>
                                <Col>
                                    <a className='social d-flex align-items-center justify-content-center' href='https://www.linkedin.com/in/sasembodo/' target='_blank'>                                        
                                                <img className='socialMedia' src={linkedin} alt='Picture'/>
                                                <p>sasembodo</p>
                                    </a>
                                </Col>
                                <Col>
                                    <a className='social d-flex align-items-center justify-content-center' href='https://www.instagram.com/sasembodo/?hl=en' target='_blank'>                                        
                                                <img className='socialMedia' src={instagram} alt='Picture'/>
                                                <p>sasembodo</p>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <img src={wave1}/>
                <div className='skill' id='2'>
                    <div className='skill-wrapper' >
                        <Row className='row-skill d-flex align-items-center justify-content-center' >
                            <Col xs={2}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img className='thumb' src={htmlIcon} alt='html5'/>
                                </div>   
                            </Col>
                            <Col xs={2}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img className='thumb' src={cssIcon} alt='css3'/>
                                </div>   
                            </Col>
                            <Col xs={2}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img className='thumb' src={bootstrapIcon} alt='bootstrap'/>
                                </div>   
                            </Col>
                            <Col xs={2}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img className='thumb' src={jsIcon} alt='javascript'/>
                                </div>   
                            </Col>
                            <Col xs={2}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img className='thumb' src={reactIcon} alt='reactnative'/>
                                </div>   
                            </Col>
                            <Col xs={2}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img className='thumb' src={reactIcon} alt='reactjs'/>
                                </div>   
                            </Col>
                        </Row>
                        <Row className='row-skill d-flex align-items-center justify-content-center' >
                            <Col xs={2}>
                                <h3 style={{display: 'flex', justifyContent: 'center'}} >HTML 5</h3> 
                            </Col>
                            <Col xs={2}>
                                <h3 style={{display: 'flex', justifyContent: 'center'}} >CSS 3</h3> 
                            </Col>
                            <Col xs={2}>
                                <h3 style={{display: 'flex', justifyContent: 'center'}} >Bootstrap</h3> 
                            </Col>
                            <Col xs={2}>
                                <h3 style={{display: 'flex', justifyContent: 'center'}} >Javascript</h3> 
                            </Col>
                            <Col xs={2}>
                                <h3 style={{display: 'flex', justifyContent: 'center'}} >React Native</h3> 
                            </Col>
                            <Col xs={2}>
                                <h3 style={{display: 'flex', justifyContent: 'center'}} >React JS</h3> 
                            </Col>
                        </Row>
                    </div>
                </div>
                <img src={wave2} />
                <div  id='3'>
                    <div className='project-wrapper'>
                        <h2 className='project-title d-flex align-items-center justify-content-center'>PROJECTS</h2>
                        <Row className='row-project d-flex align-items-center justify-content-center' >
                            <Col xs={6}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img className='pict' src={prokarir} alt='prokarir'/>
                                </div>   
                            </Col>
                            <Col xs={6}>
                                <h4>Prokarir</h4>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prokarir is an application that meets Job Seeker and Recruiter. The main features that are presented includes applying for jobs, recruit talent, and talent data.</p>
                                </div>   
                            </Col>
                        </Row>
                        <Row className='row-project d-flex align-items-center justify-content-center' >
                            <Col xs={6}>
                                <h4>Film Top</h4>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Film Top is an application that reviews some movies. One of main feature that presented is a link to movie trailer.</p>
                                </div>   
                            </Col>
                            <Col xs={6}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img className='pict' src={filmtop} alt='filmtop'/>
                                </div>   
                            </Col>
                        </Row>
                        <Row className='row-project d-flex align-items-center justify-content-center' >
                            <Col xs={6}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img className='pict' src={kamusalkohol} alt='kamusalkohol'/>
                                </div>   
                            </Col>
                            <Col xs={6}>
                                <h4>Kamus Alkohol</h4>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kamus Alkohol is an application that contains bar-style recipes. This application designed with simple appearance. Simple appearance are expected to make it easier for users to use it.</p>
                                </div>   
                            </Col>
                        </Row>    
                        <Row className='row-project d-flex align-items-center justify-content-center' >
                            <Col xs={6}>
                                <h4>Sholawat Yuk</h4>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sholawat Yuk is an audio player application that contains beautiful sounds of sholawat.</p>
                                </div>   
                            </Col>
                            <Col xs={6}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img className='pict' src={sholawatyuk} alt='sholawatyuk'/>
                                </div>   
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='contact' id='4'>
                    <h2 className='d-flex align-items-center justify-content-center'>CONTACT ME</h2>
                    <div className='contact-wrapper'>
                        <a href="mailto:sasembodo@gmail.com">
                            <Row className='row-project d-flex align-items-center justify-content-center' >
                                <Col xs={12}>
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <img className='email-logo' src={email} alt='email'/>
                                    </div>   
                                </Col>
                            </Row>
                            <Row className='row-project d-flex align-items-center justify-content-center' >
                                <Col xs={12}>
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <h3>sasembodo@gmail.com</h3>
                                    </div>   
                                </Col>
                            </Row>
                        </a>
                    </div>
                </div>
                <img src={wave1} />
            </div>
        </div>
    )
}

export default Body