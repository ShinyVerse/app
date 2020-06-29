import React from "react";
import styled from "styled-components";

import { Contact } from "../Components/Contact";

import land from "../assets/land.png";
import sunflower from "../assets/flower.svg";
import tomato from "../assets/tomato.svg";
import girl from "../assets/girl.svg";

const styledPopUpElement = (
  top,
  left,
  zIndex,
  animationSpeed,
  imgSrc,
  imgAlt,
) => {
  const SubWrapper = styled.div`
    .outer {
      top: ${top};
      left: ${left};
    }

    .item {
      z-index: ${zIndex};
      animation: popUp ${animationSpeed} ease;
    }
  `;
  return (
    <SubWrapper>
      <div className="outer">
        <div className="wrapper">
          <img className="item" src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </SubWrapper>
  );
};

const Landing = () => {
  return (
    <Wrapper>
      <div className="container">
        <section className="image">
          <p className="greeting">Hi, I'm Laura</p>
          <div className="land">
            {styledPopUpElement(
              "100px",
              "0px",
              "100",
              "1.5s",
              sunflower,
              "flower",
            )}

            {styledPopUpElement(
              "120px",
              "250px",
              "100",
              "1.5s",
              sunflower,
              "flower",
            )}

            {styledPopUpElement(
              "140px",
              "350px",
              "120",
              "2s",
              tomato,
              "tomato",
            )}

            {styledPopUpElement("125px", "150px", "110", "1.2s", girl, "girl")}

            <img src={land} alt="land" />
          </div>
        </section>
        <section className="footer">
          <Contact />
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @keyframes popUp {
    0% {
      margin-top: 200px;
    }

    100% {
      margin-top: 0px;
      width: 100%;
    }
  }

  .greeting {
    font-family: "Dancing Script", cursive;
    font-size: 3em;
    color: #246d1d;
  }

  .land {
    background: url("../assets/land.svg") no-repeat fixed center;
    width: 59%;
    height: 500px;
    margin: 15px auto 5px;
    position: absolute;
    border: 2px black solid;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .wrapper {
    position: relative;
    width: 200px;
    height: 200px;
    margin: auto;
    overflow-y: hidden;
    margin: auto;
  }

  .outer {
    width: 500px;
    height: 400px;
    // border: 1px black solid;
    position: absolute;
  }

  .item {
    position: relative;
    height: 100%;
    width: 100%;
    margin: auto;
  }

  .image {
    postiion: relative;
    border: 3px solid red;
  }
  .footer {
    postiion: relative;
    border: 3px solid black;
    margin-top: 520px;
  }
`;

export default Landing;
