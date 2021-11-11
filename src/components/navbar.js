import React from 'react'
import logo from '../assets/sasembodo.png'
import {Row, Col} from 'react-bootstrap'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-3 fixed-top" style={{backgroundColor:'teal'}}>
            <a className="navbar-brand" href="#">
                <Row>
                    <Col>
                        <img src={logo} alt=''/>
                    </Col>
                    <Col>
                        <p>SASEMBODO</p>
                    </Col>
                </Row>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#1">Introduction <span class="visually-hidden">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#2">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#3">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#4">Contact Me</a>
                    </li>
                </ul>            
            </div>
        </nav>
    )
}

export default Navbar
