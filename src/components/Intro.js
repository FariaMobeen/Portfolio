import React from 'react'
import logo from '../assets/logo.JPG'
import TypeWriter from "typewriter-effect"

function Intro() {
  return (
    <div className="flex flex-col w-full pt-10 pb-10 items-center bg-bg1" style ={{background:'black'}}>
  <div className="flex justify-center items-center">
  <img className="w-[200px] h-[175px] sm:w-[250px] sm:h-[250px] md:w-[250px] md:h-[250px] object-cover rounded-full" src={logo} alt='logo' />
</div>

      <div className="flex flex-col justify-center items-center p-3 text-center">
        <div className="typewriter">
          <h2 className='text-textGreen font-bold text-3xl md:text-3xl' style ={{color: '#306dbc', fontWeight:'700'}}>Hey there! I am...</h2>
          <p className='text-white font-bold text-xl md:text-3xl' style={{ color: 'white'}}>
            <TypeWriter style={{ color: 'white'}}
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Faria Mobeen",
                  "A Software Engineer",
                  "A nature-loving gym-goer with a passion for cars and Full-Stack Development "
                ]
              }}
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro;
