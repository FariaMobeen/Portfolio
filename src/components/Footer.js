import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
// import OutlookIcon from '@mui/icons-material/AlternateEmail';
import Tooltip from '@mui/material/Tooltip';

function Footer() {
  const email = "fariamobeen124@gmail.com";
  // const outlookEmail = "fariamobeen124@gmail.com";

  return (
    <div className="bg-bg1 text-textLight p-4">
      <div className="flex justify-center space-x-4">
        <Tooltip title="Gmail" arrow>
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <EmailIcon style={{ fontSize: 65 }} />
          </a>
        </Tooltip>
   
        <Tooltip title="GitHub" arrow>
          <a href="https://github.com/FariaMobeen" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <GitHubIcon style={{ fontSize: 65 }} />
          </a>
        </Tooltip>
      </div>
      <p className="text-center mt-4">&copy; Faria Mobeen</p>
    </div>
  );
}

export default Footer;
