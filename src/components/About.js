import React from "react";
import "./About.css";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="about_wrapper">
      <Container>
        <div className="about_inner_div text-white ">
          <h1 className="about_h1 text-center  mt-5 ">About</h1>
          <div className="about_content">
            <h2 className="about_content_h1 text-capitalize text-center">
              about sun fitness
            </h2>
            <div className="mt-4 about_content_para_div  mx-auto ">
              <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
                ratione! Tempore, eveniet? Voluptatum sequi, nisi similique quia
                in reiciendis voluptates magnam. Veniam accusamus dolore culpa,
                voluptate reiciendis quibusdam cumque amet! Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Iure, ratione! Tempore,
                eveniet? Voluptatum sequi, nisi similique quia in reiciendis
                voluptates magnam. Veniam accusamus dolore culpa, voluptate
                reiciendis quibusdam cumque amet!
              </p>
              <p className="text-center mt-2  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
                ratione! Tempore, eveniet? Voluptatum sequi, nisi similique quia
                in reiciendis voluptates magnam. Veniam accusamus dolore culpa,
                voluptate reiciendis quibusdam cumque amet! Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Iure, ratione! Tempore,
                eveniet? Voluptatum sequi, nisi similique quia in reiciendis
                voluptates magnam. Veniam accusamus dolore culpa, voluptate
                reiciendis quibusdam cumque amet!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
