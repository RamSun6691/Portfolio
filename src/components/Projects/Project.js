import React, { useState } from "react";
import {
  Container,
  Title,
  Wrapper,
  Desc,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  CardContainer,
} from "./Project.styled";
import {projects} from "../../data/Constants";
import ProjectCard from "../Cards/ProjectCard"

const Project = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>

        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB App
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              WEB APP
            </ToggleButton>
          )}
          {/* <Divider /> */}
          {/* {toggle === "android app" ? (
            <ToggleButton
              active
              value="android app"
              onClick={() => setToggle("android app")}
            >
              android app
            </ToggleButton>
          ) : (
            <ToggleButton
              value="android app"
              onClick={() => setToggle("android app")}
            >
              android app
            </ToggleButton>
          )}
          <Divider />
          {toggle === "machine learning" ? (
            <ToggleButton
              active
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          ) : (
            <ToggleButton
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          )} */}
        </ToggleButtonGroup>
        <CardContainer>
            { toggle === 'all' && projects.map((project)=>(
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
            {
                projects.filter((item)=>item.category == toggle)
                .map((project)=>(
                    <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                ))
            }
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Project;
