import React from "react";
import styled from "styled-components";

import { Contact } from "../Components/Contact";

import land from "../assets/land.png";
import sunflower2 from "../assets/sunflower2.svg";
import sunflower from "../assets/sunflower-L.svg";
import smallSunflower from "../assets/smallSunflower5.svg";
import tomato from "../assets/largetomato.svg";
import me from "../assets/me.svg";
import strawberry from "../assets/smallStrawberry.svg";

const images = [
  {
    src: sunflower,
    speed: "1.7s",
    alt: "sunflower",
    sizes: {
      w320: {
        top: "11%",
        left: "20%",
        zIndex: "100",
      },
    },
  },
  {
    src: smallSunflower,
    speed: "2s",
    alt: "smallSunflower",
    type: "small-wrapper",
    sizes: {
      w320: {
        top: "21%",
        left: "30%",
        zIndex: "140",
      },
    },
  },
  {
    src: sunflower2,
    speed: "1.5s",
    alt: "sunflower",
    sizes: {
      w320: {
        top: "11%",
        left: "60%",
        zIndex: "100",
      },
    },
  },
  {
    src: strawberry,
    speed: "1.8s",
    alt: "strawberry",
    sizes: {
      w320: {
        top: "14%",
        left: "12%",
        zIndex: "130",
      },
    },
  },
  {
    src: tomato,
    speed: "2s",
    alt: "tomato",
    sizes: {
      w320: {
        top: "13%",
        left: "72%",
        zIndex: "100",
      },
    },
  },
  {
    src: me,
    speed: "2.2s",
    alt: "girl",
    type: "large-wrapper",
    sizes: {
      w320: {
        top: "20px",
        left: "37%",
        zIndex: "100",
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
    }
    .small-wrapper {
      width: 60px;
      height: 60px;
    }

    .large-wrapper {
      position: absolute;
      width: 100px;
      height: 100px;
    }

    .item {
      z-index: ${sizes.w320.zIndex};
      animation: popUp ${animationSpeed} ease;
    }

    @media (min-width: 728px) {
      .large-wrapper {
        width: 170px;
        height: 170px;
      }
      .small-wrapper {
        margin-top: 30px;
        margin-left: 30px;
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
    position: absolute;
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

  @media (min-width: 500px) {
    .land {
      width: 60%;
      margin: 5px 20% 5px;
    }
  }

  @media (min-width: 728px) {
    .wrapper {
      width: 120px;
      height: 120px;
    }
    .land {
      width: 70%;
      height: 500px;
      margin: 5px 15% 5px;
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
