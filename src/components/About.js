import React from 'react';
import pic1 from '../Assets/pic1.png';
import pic2 from '../Assets/pic2.png';

function About() {
  return (
    <div id='about' className='bg-black md:flex md:justify-center md:items-center px-10 py-10 md:py-0'>
      <div className='hidden md:block'>
        <img className='rotate-[15deg]' style={{width:'300px', height:'200px'}} alt='pic of tech' src={pic1}/>
      </div>
      <div className='flex-1 px-10 flex flex-col justify-center mb-8 md:mb-0'>
        <h1 className='text-textGreen text-2xl md:text-3xl mb-4' style ={{color: '#306dbc', fontWeight:'700'}}>About Me</h1>
        <p className='text-textLight text-lg md:text-2xl'>
        I'm Faria Mobeen, a Software Engineering student with a passion for both coding and physical fitness. When I'm not immersed in programming languages or mastering full-stack development, you'll find me hitting the gym or exploring the great outdoors. With industry experience already under my belt, I'm driven to excel in both my academic and personal pursuits, blending my love for technology with a healthy lifestyle and a deep appreciation for nature.





        </p>
      </div>
      <div className='hidden md:block'>
        <img className='rotate-[-15deg]' style={{width:'300px', height:'200px'}} alt='pic of tech' src={pic2}/>
      </div>
    </div>
  );
}

export default About;
