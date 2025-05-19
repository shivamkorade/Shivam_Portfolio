import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/alumni.png";
import projImg2 from "../assets/img/IXplorer.png";
import projImg3 from "../assets/img/portfolio.png";
import projImg4 from "../assets/img/tictactoe.jpeg";
// import projImg5 from "../assets/img/project4.jpg";
import projImg6 from "../assets/img/headlines24.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

import React, { useEffect, useState } from "react";

export const Projects = () => {
  const [backgroundGradient, setBackgroundGradient] = useState(null);

  const projects = [
    {
      about: "HeadLines24",
      title: "React app showcasing live, clickable news headlines",
      description: "Design & Development",
      date: "Feb'25 - Mar'25",
      imgUrl: projImg6,
      link: "https://github.com/shivamkorade",
    },
    {
      about: "Alumni Portal for Institutes",
      title: "Web‑based alumni portal connecting graduates community",
      description: "Design & Development",
      date: "Dec’24-Present",
      imgUrl: projImg1,
      link: "https://github.com/shivamkorade",
    },
    {
      about: "Green Medicine",
      title: "Healthcare and Medication Web App",
      description: "Design & Development",
      date: "Aug’23-Nov’23",
      imgUrl: projImg2,
      link: "https://github.com/shivamkorade/IIT-Patna-IXplorer23",
    },
    {
      about: "My Portfolio",
      title: "A fully functional Portfolio Web App",
      description: "Design & Development",
      date: "Mar’25 - Apr’25",
      imgUrl: projImg3,
      link: "https://github.com/shivamkorade/Shivam_Portfolio",
    },
    {
      about: "Tic Tac Toe Web App",
      title: "Interactive web Tic‑Tac‑Toe with scorekeeping",
      description: "Design & Development",
      date: "Mar’22 - Apr’22",
      imgUrl: projImg4,
      link: "https://github.com/shivamkorade/TicTacToe-Game-JavaScript",
    },
  ];

  useEffect(() => {
    // Function to get the average color from an image
    const getAverageColor = (imageUrl) => {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.crossOrigin = "Anonymous"; // Ensure CORS compatibility
        img.onload = function () {
          let canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;

          let ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, img.width, img.height);

          let imageData = ctx.getImageData(0, 0, img.width, img.height);
          let data = imageData.data;
          let r = 0,
            g = 0,
            b = 0;

          for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
          }

          let pixels = data.length / 4;
          r = Math.floor(r / pixels);
          g = Math.floor(g / pixels);
          b = Math.floor(b / pixels);

          let averageColor = rgbToHex(r, g, b);
          resolve(averageColor);
        };

        img.onerror = function (error) {
          reject(error);
        };

        img.src = imageUrl;
      });
    };

    // Helper function to convert RGB to Hex
    const rgbToHex = (r, g, b) => {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };

    const componentToHex = (c) => {
      let hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    // Call getAverageColor function and update state with the gradient
    getAverageColor(colorSharp2)
      .then((averageColor) => {
        let gradient = `linear-gradient(90.21deg, ${averageColor} -5.91%, #686281 111.58%)`;
        setBackgroundGradient(gradient);
      })
      .catch((error) => {
        console.error("Error calculating average color:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`animate__animated ${
                    isVisible ? "animate__fadeIn" : ""
                  }`}
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={`animate__animated ${
                        isVisible ? "animate__slideInUp" : ""
                      }`}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* Add more Tab.Pane components if needed */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
      {/* Apply background gradient dynamically */}
      <style>
        {`.project .nav.nav-pills .nav-link::before {
            background-image: ${backgroundGradient};
          }`}
      </style>
    </section>
  );
};
