import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <div>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <BtnGroup>
             <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Story ➜
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </div>
  );
}

export default ProjectCard;
