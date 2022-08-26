import React from "react";
import { Document, Page } from "react-pdf";
import pdf from "../images/chloe-rees-resume.pdf";
import "../styles/Resume.css"
import {GrDocumentDownload} from "react-icons/gr"

function Resume() {

  return (
    <div className="resume">
        <Document
            file={pdf}
            loading="Loading PDF..."
            options={{ workerSrc: "/pdf.worker.js" }}
            className="document"
        >
            <Page pageNumber={1} className="page"/>
        </Document>
        <a href={pdf} download="chloe-rees-resume" target='_blank' rel="noreferrer">
            <GrDocumentDownload title="Download PDF"/>
        </a>
    </div>
  );
}

export default Resume;