import React from 'react'
import Typist from 'react-typist'

const Header = () => {
    return (
        <div className='header-wraper d-flex align-items-center justify-content-center'>
            <Typist>
                <h1 className='d-flex align-items-center justify-content-center'>Sri Aryo Sembodo</h1>
                <h2 className='d-flex align-items-center justify-content-center'>Frontend Developer</h2>               
            </Typist>
        </div>
    )
}

export default Header