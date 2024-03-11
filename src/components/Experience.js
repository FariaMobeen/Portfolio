import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

// import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div id="experience" className="flex flex-col md:flex-row mt-5">
      <div className="w-full md:w-1/3 flex items-center justify-center p-4">
        <h2 className="text-3xl font-bold text-center text-textGreen" style ={{color: '#306dbc', fontWeight:'700'}}>Experience</h2>
      </div>
      <div className="w-full md:w-2/3 items-center">
        <VerticalTimeline lineColor="#ccd6f6">
          <VerticalTimelineElement
            date="May 2022 - August 2022"
            className="text-blue-500"
            iconStyle={{ background: "#3e497a", color: "#ccd6f6" }}
            icon={<WorkIcon />}
          >
            <h3 className="text-xl font-bold">
              Wireless Specialist Intern, Calgary, Alberta 
            </h3>
            <h4 className="font-semibold">
            Calgary, Alberta 
            </h4>
            <p> Bell Canada </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="May 2023 - Present"
            className="text-blue-500"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="text-xl font-bold">
              Software Developer Intern 
            </h3>
            <h4 className="font-semibold">
            Calgary, Alberta 
            </h4>
            <p> Bell Canada </p>
          </VerticalTimelineElement>

     
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
