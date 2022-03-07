import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Boy_from_vector.svg/1200px-Boy_from_vector.svg.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>YoungLord</strong> Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </div>
          <div className="AboutBio tagline2">
           i am A Story write
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
