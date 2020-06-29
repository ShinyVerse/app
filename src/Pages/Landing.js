import React from "react";
import styled from "styled-components";

import { Contact } from "../Components/Contact";

import land from "../assets/land.png";
import sunflower from "../assets/flower.svg";
import tomato from "../assets/tomato.svg";
import girl from "../assets/girl.svg";

const Landing = () => {
  return (
    <Wrapper>
      <div className="container">
        <section className="image">
          <p className="greeting">Hi, I'm Laura</p>
          <div className="land">
            <div className="outer">
              <div className="wrapper">
                <img className="item" src={sunflower} alt="flower" />
              </div>
            </div>

            <div className="outer2">
              <div className="wrapper">
                <img className="item2" src={sunflower} alt="flower" />
              </div>
            </div>
            <div className="outer3">
              <div className="wrapper">
                <img className="item3" src={tomato} alt="tomato" />
              </div>
            </div>
            <div className="outer4">
              <div className="wrapper">
                <img className="item4" src={girl} alt="girl" />
              </div>
            </div>
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

  .outer {
    width: 500px;
    height: 400px;
    // border: 1px black solid;
    position: absolute;
    top: 100px;
  }

  .wrapper {
    position: relative;
    width: 200px;
    height: 200px;
    margin: auto;
    overflow-y: hidden;
    margin: auto;
  }

  .item {
    position: relative;
    height: 100%;
    width: 100%;
    margin: auto;
    z-index: 100;
    animation: popUp 1.5s ease;
  }

  .outer2 {
    width: 500px;
    height: 400px;
    // border: 1px black solid;
    position: absolute;
    top: 120px;
    left: 250px;
  }

  .item2 {
    position: relative;
    height: 100%;
    width: 100%;
    margin: auto;
    z-index: 100;
    animation: popUp 1.5s ease;
  }

  .outer3 {
    width: 500px;
    height: 400px;
    // border: 1px black solid;
    position: absolute;
    top: 140px;
    left: 350px;
  }

  .item3 {
    position: relative;
    height: 100%;
    width: 100%;
    margin: auto;
    z-index: 120;
    animation: popUp 2s ease;
  }

  .outer4 {
    width: 500px;
    height: 400px;
    // border: 1px black solid;
    position: absolute;
    top: 125px;
    left: 150px;
  }

  .item4 {
    position: relative;
    height: 100%;
    width: 100%;
    margin: auto;
    z-index: 110;
    animation: popUp 1.2s ease;
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
