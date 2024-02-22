import React from 'react'

import NotFoundImg from "../images/error-404.png"

const NotFound = () => {


    return (
        <div className='not-found'>
            <img src={NotFoundImg} alt='Not Found' />
        </div>
    )
}

export default NotFound