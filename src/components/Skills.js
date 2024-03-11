import React, { useState, useEffect } from 'react';
import { ReactOriginal } from 'devicons-react';
import { JavascriptOriginal } from 'devicons-react';
import { NodejsPlain } from 'devicons-react';
import { JavaOriginalWordmark } from 'devicons-react';
import { AmazonwebservicesOriginal } from 'devicons-react';
import { MysqlOriginalWordmark } from 'devicons-react';
import { PythonOriginalWordmark } from 'devicons-react';
import { COriginal } from 'devicons-react';
import { CplusplusOriginal } from 'devicons-react';
// import { GithubOriginal } from 'devicons-react';
// import { BootstrapPlainWordmark } from 'devicons-react';
// import { SpringOriginal } from 'devicons-react';
// import { TailwindcssPlain } from 'devicons-react';
import { Html5Plain } from 'devicons-react';  

import { VscodeOriginal, CsharpOriginal, JiraOriginal, DockerOriginalWordmark, MongodbOriginalWordmark } from 'devicons-react';

// import { CsharpOriginal } from 'devicons-react'; 
// import { XmlPlain } from 'devicons-react'; 
// import { YamlOriginal } from 'devicons-react'; 
// import { NetlifyPlain } from 'devicons-react'; 
// import { SqlserverPlainWordmark } from 'devicons-react'; 
// import { PostmanOriginal } from 'devicons-react'; 
// import { JetbrainsriderPlainWordmark } from 'devicons-react'; 
// import { JiraOriginal } from 'devicons-react'; 
// import { AzuredevopsPlain } from 'devicons-react'; 
// import { DotnetOriginal } from 'devicons-react'; 
// import { AspdotnetOriginal } from 'devicons-react'; 
// import { NextdotjsPlainWordmark } from 'devicons-react'; 
// import { DockerOriginalWordmark } from 'devicons-react'; 
// import { MysqlworkbenchPlain } from 'devicons-react'; 
// import { MongodbOriginalWordmark } from 'devicons-react';


function Skills() {
  const getIconSize = () => {
    const width = window.innerWidth;
    if (width < 640) return '60'; // Tailwind's 'sm' breakpoint
    if (width < 768) return '80'; // Tailwind's 'md' breakpoint
    return '100'; // Default size for larger screens
  };

  const [iconSize, setIconSize] = useState(getIconSize());

  useEffect(() => {
    const handleResize = () => {
      setIconSize(getIconSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skills = [
    { name: 'JavaScript', Icon: JavascriptOriginal, proficiency: '85%' },
    { name: 'React', Icon: ReactOriginal, proficiency: '95%' },
    { name: 'Node.js', Icon: NodejsPlain, proficiency: '80%' },
    { name: 'Java', Icon: JavaOriginalWordmark, proficiency: '95%' },
    { name: 'AWS', Icon: AmazonwebservicesOriginal, proficiency: '80%' },
    // { name: 'GitHub', Icon: GithubOriginal, proficiency: '85%' },
    { name: 'MySQL', Icon: MysqlOriginalWordmark, proficiency: '75%' },
    { name: 'Python', Icon: PythonOriginalWordmark, proficiency: '95%' },
    { name: 'C/C++', Icon: COriginal, proficiency: '95%' },
    { name: 'C++', Icon: CplusplusOriginal, proficiency: '95%' },
    // { name: 'Bootstrap', Icon: BootstrapPlainWordmark, proficiency: '90%' },
    // { name: 'Spring Boot', Icon: SpringOriginal, proficiency: '85%' },
    // { name: 'Tailwind CSS', Icon: TailwindcssPlain, proficiency: '90%' },
    { name: 'HTML', Icon: Html5Plain, proficiency: '90%' },
    { name: 'VS Code', Icon: VscodeOriginal, proficiency: '95%' },
    { name: 'C#', Icon: CsharpOriginal, proficiency: '90%' },
    
    { name: 'JIRA', Icon: JiraOriginal, proficiency: '80%' },
   
    { name: 'Docker', Icon: DockerOriginalWordmark, proficiency: '85%' },
    { name: 'MongoDB', Icon: MongodbOriginalWordmark, proficiency: '85%' }
];


  return (
    <section id='skills' className='bg-bg1 my-10'>
      <h2 className='text-textGreen text-3xl font-bold text-center mb-10' style ={{color: '#306dbc', fontWeight:'700'}}>Skills</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center '>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='ring-2 ring-textLight rounded-md relative w-24 h-24 transition-transform duration-300 ease-in-out hover:scale-110'
          >
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300'>
              <span className='text-white text-lg font-bold'>{skill.proficiency}</span>
            </div>
            <skill.Icon size={iconSize} className='w-full h-full py-5' />
            <span className='text-md text-textGreen mt-24' style ={{color: '#306dbc', fontWeight:'00'}} >{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
