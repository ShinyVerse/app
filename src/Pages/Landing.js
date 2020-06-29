import React from "react";
import styled from "styled-components";

import { Contact } from "../Components/Contact";

import land from "../assets/land.png";
import sunflower from "../assets/flower.svg";
import tomato from "../assets/tomato.svg";
import girl from "../assets/girl.svg";

const images = [
  {
    w320: {
      top: "40px",
      left: "-150px",
      zIndex: "100",
    },
    w768: {
      top: "60px",
      left: "-120px",
    },
  },
];

const styledPopUpElement = (details, animationSpeed, imgSrc, imgAlt) => {
  const SubWrapper = styled.div`
    .outer {
      top: ${details.w320.top};
      left: ${details.w320.left};
    }

    .item {
      z-index: ${details.w320.zIndex};
      animation: popUp ${animationSpeed} ease;
    }

    @media (min-width: 768px) {
      .outer {
        top: ${details.w768.top};
        left: ${details.w768.left};
      }
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
            {images.map((imageDetails) =>
              styledPopUpElement(imageDetails, "1.5s", sunflower, "sunflower"),
            )}
            {/* {styledPopUpElement(
              "40px",
              "-150px",
              "100",
              "1.5s",
              sunflower,
              "flower",
            )} */}

            {/* {styledPopUpElement(
              "30px",
              "-40px",
              "100",
              "1.5s",
              sunflower,
              "flower",
            )}

            {styledPopUpElement("40px", "0px", "120", "2s", tomato, "tomato")}

            {styledPopUpElement("50px", "-90px", "110", "1.2s", girl, "girl")} */}

            <img className="bgImage" src={land} alt="land" />
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
    background: url("../assets/land.png") no-repeat fixed center;
    width: 98vw;
    height: 300px;
    margin: 15px auto 5px;
    position: absolute;
    border: 2px black solid;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .bgImage {
    width: 100%;
    height: 100%;
  }

  .wrapper {
    // border: 2px black solid;
    position: relative;
    width: 70px;
    height: 70px;
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

  @media (min-width: 768px) {
    .land {
      background: url("../assets/land.svg") no-repeat fixed center;
      width: 80%;
      height: 500px;
      margin: 15px 10% 5px;
      position: absolute;
      border: 2px black solid;
      overflow-y: hidden;
      overflow-x: hidden;
    }

    .wrapper {
      position: relative;
      width: 120px;
      height: 120px;
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
  }
`;

export default Landing;

// {styledPopUpElement(
//   "100px",
//   "0px",
//   "100",
//   "1.5s",
//   sunflower,
//   "flower",
// )}

// {styledPopUpElement(
//   "120px",
//   "250px",
//   "100",
//   "1.5s",
//   sunflower,
//   "flower",
// )}

// {styledPopUpElement(
//   "140px",
//   "350px",
//   "120",
//   "2s",
//   tomato,
//   "tomato",
// )}

// {styledPopUpElement("125px", "150px", "110", "1.2s", girl, "girl")}
