import React from "react";
import styled from "styled-components";

import { Contact } from "../Components/Contact";

import land from "../assets/land.png";
import sunflower from "../assets/flower.svg";
import tomato from "../assets/tomato.svg";
import girl from "../assets/girl.svg";
import strawberry from "../assets/strawberry.svg";

const images = [
  {
    src: sunflower,
    speed: "1.7s",
    alt: "sunflower",
    sizes: {
      w320: {
        top: "40px",
        left: "-150px",
        zIndex: "100",
      },
      w768: {
        top: "60px",
        left: "-90px",
      },
    },
  },
  {
    src: sunflower,
    speed: "2s",
    alt: "sunflower",
    type: "small-wrapper",
    sizes: {
      w320: {
        top: "65px",
        left: "-185px",
        zIndex: "140",
      },
      w768: {
        top: "140px",
        left: "-10px",
      },
    },
  },
  {
    src: sunflower,
    speed: "1.5s",
    alt: "sunflower",
    sizes: {
      w320: {
        top: "30px",
        right: "-150px",
        zIndex: "100",
      },
      w768: {
        top: "45px",
        right: "-90px",
      },
    },
  },
  {
    src: strawberry,
    speed: "1.8s",
    alt: "strawberry",
    type: "small-wrapper",
    sizes: {
      w320: {
        top: "70px",
        left: "-150px",
        zIndex: "130",
      },
      w768: {
        top: "130px",
        left: "-40px",
      },
    },
  },
  {
    src: tomato,
    speed: "2s",
    alt: "tomato",
    sizes: {
      w320: {
        top: "40px",
        right: "-180px",
        zIndex: "100",
      },
      w768: {
        top: "70px",
        right: "-45px",
      },
    },
  },
  {
    src: girl,
    speed: "1.2s",
    alt: "girl",
    sizes: {
      w320: {
        top: "50px",
        right: "-90px",
        zIndex: "100",
      },
      w768: {
        top: "70px",
        left: "64px",
      },
    },
  },
];

const styledPopUpElement = (
  sizes,
  animationSpeed,
  imgSrc,
  imgAlt,
  index,
  type = "normal",
) => {
  const SubWrapper = styled.div`
    .outer {
      top: ${sizes.w320.top};
      left: ${sizes.w320.left};
      right: ${sizes.w320.right};
    }
    .small-wrapper {
      width: 50px;
      height: 50px;
    }

    .item {
      z-index: ${sizes.w320.zIndex};
      animation: popUp ${animationSpeed} ease;
    }

    @media (min-width: 768px) {
      .outer {
        top: ${sizes.w768.top};
        left: ${sizes.w768.left};
        right: ${sizes.w768.right};
      }
    }
  `;
  return (
    <SubWrapper key={`feature-img-${index}`}>
      <div className="outer">
        <div className={`wrapper ${type}`}>
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
            {images.map((image, index) =>
              styledPopUpElement(
                image.sizes,
                image.speed,
                image.src,
                image.alt,
                index,
                image.type,
              ),
            )}
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
    text-align: center;
    color: #246d1d;
  }

  .land {
    background: url("../assets/land.png") no-repeat fixed center;
    width: 100vw;
    height: 300px;
    margin: 15px auto 5px;
    position: absolute;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .bgImage {
    width: 100%;
    height: 100%;
  }

  .wrapper {
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
  }
  .footer {
    postiion: relative;
    margin-top: 520px;
  }
  @media (min-width: 375px) {
    .land {
      width: 80%;
      margin: 5px 10% 5px;
    }
  }

  @media (min-width: 768px) {
    .land {
      width: 80%;
      height: 500px;
    }

    .wrapper {
      width: 120px;
      height: 120px;
    }
  }

  @media (min-width: 1024px) {
    .land {
      width: 60%;
      margin: 5px 20% 5px;
    }

    .wrapper {
      width: 130px;
      height: 130px;
    }
  }
  @media (min-width: 1400px) {
    .land {
      width: 45%;
      margin: 5px 27% 5px;
    }
  }
`;

export default Landing;
