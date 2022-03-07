import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm YoungLord</h1>
            <h5>Writer</h5>
            <p>
              I write my imagination on white paper
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Boy_from_vector.svg/1200px-Boy_from_vector.svg.png"
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://cutewallpaper.org/24/important-png/important-f5eba-vector-6c2f3-svg-bc015-icon-4b582-2-ed139-png-b7428-repo-f59e5-free-b5cb5-png---icons.png"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
