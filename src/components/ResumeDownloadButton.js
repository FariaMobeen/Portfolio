import React from "react";
import { Button } from "react-bootstrap"; // Assuming you're using React Bootstrap
import { AiOutlineDownload } from "react-icons/ai"; // For the download icon
import pdf from "../assets/Resume_FariaMobeen.pdf"; // Path to your resume PDF

function ResumeDownloadButton() {
  return (
    <div>
      <Button
        variant="primary"
        href={pdf}
        download="Resume_FariaMobeen.pdf" // Automatically triggers download
        style={{ maxWidth: "250px" }}
      >
        <AiOutlineDownload />
        &nbsp;Download Resume
      </Button>
    </div>
  );
}

export default ResumeDownloadButton;