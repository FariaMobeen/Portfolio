import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import { getDocument } from 'pdfjs-dist';  // Correct import for the function

// URL for the PDF (change it to your actual PDF link or local path)
const pdfUrl = "../../Assets/../Assets/Resume_FariaMobeen.pdf";

const ResumeNew = () => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Load the PDF document
  useEffect(() => {
    const loadPdf = async () => {
      try {
        const loadingTask = getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1); // Load the first page of the PDF

        const viewport = page.getViewport({ scale: 1.5 }); // Scale the PDF to fit the canvas size
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        // Render the page into the canvas
        await page.render(renderContext).promise;
        setLoading(false);  // Set loading to false when rendering is done
      } catch (error) {
        console.error('Error loading PDF: ', error);
        setLoading(false);
      }
    };

    loadPdf();
  }, []); // Removed pdfUrl from dependency array

  return (
    <div>
      <Container fluid className="resume-section">
        {/* Remove the Particle line if not using it */}
        {/* <Particle /> */}
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdfUrl}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {loading ? (
              <p>Loading...</p>  // Display loading message until PDF is loaded
            ) : (
              <canvas ref={canvasRef}></canvas>  // Render the first page of the PDF on the canvas
            )}
          </div>
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdfUrl}
            target="_blank"
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