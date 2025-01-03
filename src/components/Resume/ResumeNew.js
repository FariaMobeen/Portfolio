import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf'; // Import pdfjs

// Path to your PDF file
const pdfUrl = "../../Assets/Resume_FariaMobeen.pdf";

// Set the workerSrc for pdfjs
// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`;

const ResumeNew = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Callback to handle the number of pages
  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">


        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdfUrl}
            download="Resume_FariaMobeen.pdf"  
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeNew;