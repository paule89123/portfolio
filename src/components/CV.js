import React from "react";
import cv from "../images/CV.svg";

function CV() {
  return (
    <div id="cv-container">
      <a
        href="https://drive.google.com/file/d/1lkn13TjODRyhzRoMpfl53WQVRpADrCs4/view?usp=sharing"
        target="_blank"
        rel="noopener"
      >
        <div id="cv-print">View CV as PDF</div>
      </a>
      <img alt="CV" id="cv" src={cv} />
    </div>
  );
}

export default CV;
