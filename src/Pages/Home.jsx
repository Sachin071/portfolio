import React from 'react'
import '../assets/css/home.css'
import logo from '../assets/images/coder1.svg'

const Home = () => {
  return (
    <>
        <div className='content'>
            <div className='owndata'>
              <div className='containers'>
                <div className='typewriter'>Full Stack Web Developer</div> 
                <h4>I code to make a beautiful website & connect to data by using api.</h4>
               
              </div>
               
            </div>
           
            <div className='image'>
              <img  src={logo} alt="Image Upload soon" />
            </div>
        </div>
    </>
  )
}

export default Home