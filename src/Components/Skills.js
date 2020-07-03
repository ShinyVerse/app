import React from "react";
import styled from "styled-components";
import chaiSvg from "../assets/skills/chai.svg";
import enzymeSvg from "../assets/skills/enzyme.svg";
import jsSvg from "../assets/skills/javascript.svg";
import jestSvg from "../assets/skills/jest.svg";
import mochaSvg from "../assets/skills/mocha.svg";
import mongoSvg from "../assets/skills/mongo.svg";
import nodeSvg from "../assets/skills/node.svg";
import reactSvg from "../assets/skills/react.svg";
import reduxSvg from "../assets/skills/redux.svg";
import webpackSvg from "../assets/skills/webpack.svg";

const skills = [
  reactSvg,
  reduxSvg,
  jestSvg,
  enzymeSvg,
  jsSvg,
  mochaSvg,
  mongoSvg,
  nodeSvg,
  chaiSvg,
  webpackSvg,
];

export const Skills = () => {
  return (
    <Wrapper>
      <div id="skills">
        <p className="heading">Skills</p>
        <div className="skillsContainer">
          {skills.map((skill, index) => (
            <img
              key={`skill-${index}`}
              className="skill"
              src={skill}
              alt="skill"
            ></img>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  #skills {
    padding-top: 20px;
    width: 100%;

    background-color: white;
    padding-bottom: 40px;
  }
  .skillsContainer {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .skill {
    width: 100px;
    height: 100px;
  }

  .heading {
    font-family: "Dancing Script", cursive;
    font-size: 2em;
    text-align: center;
    color: #246d1d;
    margin: 10px;
  }
  @media (min-width: 728px) {
    #skills {
      margin-top: 0px;
    }
    .heading {
      font-size: 3em;
    }
  }
  @media (min-width: 1024px) {
    #skills {
      // margin-top: 500px;
    }
  }
  @media (min-width: 1400px) {
    #skills {
      // margin-top: 600px;
    }
  }
`;

export default Skills;
