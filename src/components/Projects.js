import React, { useState } from 'react';
import { GithubOriginal } from 'devicons-react';
import { FaExternalLinkAlt, FaVideo } from 'react-icons/fa';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projectsData = [
    {
      name: 'Wordle Clone',
      image: 'wordleImg.png',
      description: "Wordle Clone is a web-based game project inspired by the popular Wordle game. It allows players to guess a secret word based on clues provided. The project utilizes HTML, CSS, and JavaScript for creating the game interface, handling user input, and providing feedback on correct and incorrect guesses. Players can type letters to guess the word, remove letters with backspace, and submit their answer to receive feedback. The game interface includes features such as displaying hints, highlighting correct letters in green, indicating partially correct letters in yellow, and showing incorrect letters in gray. The project also includes a dictionary API to fetch random words for the game. Players can enjoy a fun and interactive word-guessing experience similar to Wordle.",
      link: 'https://faria-wordle-clone.netlify.app/',
      skills: 'Skills required for Wordle Clone',
      githubLink: 'https://github.com/FariaMobeen/Wordle-game',
    },
    {
      name: 'Note App',
      image: 'noteApp.png',
      description: "The Note App project is a web-based application designed for creating, managing, and organizing notes. It provides users with a platform to write, edit, and delete notes conveniently. The app is built using HTML, CSS, and JavaScript, offering a user-friendly interface for creating and organizing textual content. Users can easily add new notes, update existing ones, and remove notes they no longer need. The Note App aims to enhance productivity by providing a simple yet effective tool for note-taking and organization, suitable for personal and professional use."
      ,
      link: 'https://faria-noteapp.netlify.app/',
      skills: 'Skills required for Note App',
      githubLink: 'https://github.com/FariaMobeen/NoteApp',
    },
    {
      name: 'Full Stack Story Generator',
      image: 'storygenerator.png',
      description: 'The AI Story Generator project utilizes advanced natural language processing (NLP) techniques and machine learning algorithms, including a chat GPT model, to generate creative and engaging stories. By leveraging state-of-the-art AI capabilities like ChatGPT, the application can understand prompts and themes from users and produce unique narratives in a conversational and interactive manner. This integration with ChatGPT allows for a more dynamic and personalized storytelling experience, showcasing the power of AI in generating imaginative content.',
      skills: 'Skills required for Story Generator',
      githubLink: 'https://github.com/FariaMobeen/story-generator',
      videoLink: 'https://yuja.ucalgary.ca/V/Video?v=940906&node=5005151&a=186452552&autoplay=1',
    },
    {
      name: 'Flight Reservation App',
      image: 'flightApp.png',
      description: "The Flight Reservation App features a Java backend using Spring Boot and a React.js frontend, integrated with API services for seamless data handling. The Java backend manages essential functionalities such as handling flight data, managing bookings, and securely storing user information through RESTful APIs. These APIs enable communication between the frontend and backend, facilitating features like flight search, seat selection, passenger management, booking confirmation, and itinerary generation. On the frontend, React.js is utilized to create a dynamic and responsive user interface that interacts with the backend APIs, providing real-time feedback and ensuring a smooth user experience across different devices. This integrated approach with APIs enhances the app's efficiency, security, and user interactivity, making it an effective tool for travel management needs.",
      // link: 'https://your-flight-reservation-app-link/',
      skills: 'Skills required for Flight Reservation App',
      githubLink: 'https://github.com/FariaMobeen/FlightReservation',
    },
    {
      name: 'Automated Vet Scheduler',
      image: 'vetScheduler.png',
      description: "This is a scheduling tool using Java Swing for the GUI, JDBC for MySQL connectivity, and Java libraries for core functionalities like exception handling and date operations. It automates task duration calculations, checks for overbooking, and presents a user-friendly interface for efficient task scheduling.",
      // link: 'https://your-vet-scheduler-app-link/',
      skills: 'Skills required for Automated Vet Scheduler',
      githubLink: 'https://github.com/FariaMobeen/Automated-Vet-Scheduler',
    },
    {
      name: 'Event Booking App',
      image: 'eventBooking.png',
      description: 'EventsBlitz is an event management and booking application designed with Google Cloud SQL integration for efficient database management. This platform facilitates event organization, booking, and participant management while incorporating an email service feature for seamless communication and notifications. Leveraging Google Cloud SQL ensures reliable and scalable database operations, enhancing data security and performance for streamlined event management processes.',
      // link: 'https://your-event-booking-app-link/',
      skills: 'Skills required for Event Booking App',
      githubLink: 'https://github.com/FariaMobeen/EventBlitz',
      videoLink: 'https://yuja.ucalgary.ca/V/Video?v=1029640&node=5474361&a=184032784',

    },
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeProjectModal = () => {
    setShowModal(false);
  };

  return (
    <div id='projects' className="p-4">
      <h1 className='text-textGreen text-2xl md:text-3xl mb-4 text-center' style={{ color: '#306dbc', fontWeight: '700' }}>My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <div key={index} className="cursor-pointer overflow-hidden flex items-center justify-center" onClick={() => openProjectModal(project)}>
            <div className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-textLight">
              <img
                src={project.image}
                alt={project.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  transition: 'transform 0.3s ease-in-out'
                }}
              />
              <div className="text-center mt-2">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-white text-blue-500 text-center py-1 px-3 rounded hover:bg-blue-700 hover:text-white transition duration-300">
                  <GithubOriginal style={{ fontSize: '18px', marginRight: '5px' }} />
                </a>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-white text-black-500 text-center py-1 px-3 rounded hover:bg-blue-700 hover:text-white transition duration-300">
                    <FaExternalLinkAlt style={{ marginLeft: '5px' }} />
                  </a>
                )}
                {project.videoLink && (
                  <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-white text-black-500 text-center py-1 px-3 rounded hover:bg-blue-700 hover:text-white transition duration-300">
                    <FaVideo style={{ marginLeft: '5px' }} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-xl overflow-y-auto">
            <button className="absolute top-4 right-4 text-gray-500" onClick={closeProjectModal}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
            <img src={selectedProject.image} alt={selectedProject.name} className="mb-4" />
            <p className="text-gray-700 mb-6">{selectedProject.description}</p>
            <div className="flex justify-between">
           
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
