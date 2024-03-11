import React, { useState } from 'react';
import { GithubOriginal } from 'devicons-react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';

function Projects() {
  const [, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

 

  return (
    <div id='projects' className="p-4">
      <h1 className='text-textGreen text-2xl md:text-3xl mb-4 text-center' style ={{color: '#306dbc', fontWeight:'700'}}>My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="cursor-pointer overflow-hidden flex items-center justify-center" onClick={() => openProject({ name: 'Wordle Clone', image: 'wordleImg.png', description: 'Description of Wordle Clone', link: 'https://faria-wordle-clone.netlify.app/', skills: 'Skills required for Wordle Clone' })}>
          <div className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-textLight">
            <img
              src="wordleImg.png"
              alt="Wordle Clone"
              style={{
                maxWidth: '100%', 
                maxHeight: '100%',  
                marginLeft: 'auto', 
                marginRight: 'auto', 
                transition: 'transform 0.3s ease-in-out'
              }}
            />
  
            <div className="text-center mt-2">
              <h3 className="text-xl font-bold text-white">Wordle Clone</h3>
              <a href='https://github.com/FariaMobeen/Wordle-game' target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-white text-blue-500 text-center py-1 px-3 rounded hover:bg-blue-700 hover:text-white transition duration-300">
                <GithubOriginal style={{ fontSize: '18px', marginRight: '5px' }} />
              </a>
              <a href="https://faria-wordle-clone.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-white text-black-500 text-center py-1 px-3 rounded hover:bg-blue-700 hover:text-white transition duration-300">
                <FaExternalLinkAlt style={{ marginLeft: '5px' }} />
              </a>
            </div>
          </div>
        </div>
  
        <div className="cursor-pointer overflow-hidden flex items-center justify-center" onClick={() => openProject({ name: 'Note App', image: 'noteApp.png', description: 'Description of Note App', link: 'https://faria-noteapp.netlify.app/', skills: 'Skills required for Note App' })}>
          <div className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-textLight">
            <img
              src="noteApp.png"
              alt="Note App"
              style={{ maxWidth: '100%', maxHeight: '100%', marginLeft: 'auto', marginRight: 'auto', transition: 'transform 0.3s ease-in-out' }}
            />
            <div className="text-center mt-2">
              <h3 className="text-xl font-bold text-white">Note App</h3>
              <a href='https://github.com/FariaMobeen/NoteApp' target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-white text-blue-500 text-center py-1 px-3 rounded hover:bg-blue-700 hover:text-white transition duration-300">
                <GithubOriginal style={{ fontSize: '18px', marginRight: '5px' }} />
              </a>
              <a href="https://faria-noteapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-white text-black-500 text-center py-1 px-3 rounded hover:bg-blue-700 hover:text-white transition duration-300">
                <FaExternalLinkAlt style={{ marginLeft: '5px' }} />
              </a>
            </div>
          </div>
        </div>
  
        <div className="cursor-pointer overflow-hidden flex items-center justify-center" onClick={() => openProject({ name: 'Full Stack Story Generator', image: 'storygenerator.png', description: 'Description of Full Stack Story Generator', link: 'https://faria-story-generator.netlify.app/', skills: 'Skills required for Story Generator' })}>
          <div className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-textLight">
            <img
              src="storygenerator.png"
              alt="Full Stack Story Generator"
              style={{ maxWidth: '100%', maxHeight: '100%', marginLeft: 'auto', marginRight: 'auto', transition: 'transform 0.3s ease-in-out' }}
            />
            <div className="text-center mt-2">
              <h3 className="text-xl font-bold text-white">Full Stack Story Generator</h3>
              <a href='https://github.com/FariaMobeen/story-generator' target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-white text-blue-500 text-center py-1 px-3 rounded hover:bg-blue-700 hover:text-white transition duration-300">
  <GithubOriginal style={{ fontSize: '18px', marginRight: '5px' }} />
</a>
<a href="https://faria-story-generator.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-white text-black-500 text-center py-1 px-3 rounded hover:bg-blue-700 hover:text-white transition duration-300">
  <FaExternalLinkAlt style={{ marginLeft: '5px' }} />
</a>
<a href="https://yuja.ucalgary.ca/V/Video?v=940906&node=5005151&a=186452552&autoplay=1" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-white text-black-500 text-center py-1 px-3 rounded hover:bg-blue-700 hover:text-white transition duration-300">
  <FaVideo style={{ marginLeft: '5px' }} />
</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Projects;
