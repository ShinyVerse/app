import React from "react";
import styled from "styled-components";

export const PortfolioItem = ({
  img,
  title,
  about,
  websiteURL,
  codeURL,
  iframe = false,
  colorSetter,
}) => {
  const renderImgOrIframe = () => {
    if (iframe) {
      return (
        <iframe
          muted
          className="portfolioImg containerItem"
          src={img}
          title="portfolio-item"
        ></iframe>
      );
    }
    return (
      <img
        className="portfolioImg containerItem"
        src={img}
        alt="portfolio-item"
      />
    );
  };
  return (
    <Wrapper>
      <div className={`card ${colorSetter}`}>
        <div className="container cards">
          <h1 className="smallHeading containerItem">{title}</h1>
          {renderImgOrIframe()}

          <p className="containerItem about">{about}</p>

          {websiteURL && (
            <a
              className=" containerItem btn dark-btn"
              href={websiteURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Website</span>
            </a>
          )}
          {codeURL && (
            <a
              className="containerItem greyBtn btn"
              href={codeURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .smallHeading {
    font-family: "Julius Sans One", sans-serif;
    font-size: 1.8em;
  }
  .portfolioImg {
    width: 80%;
    border-radius: 5px;
    background-color: white;
  }

  .cards {
    padding: 30px 20px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 1.5em;
  }

  .card {
    border-bottom: rgba(226, 238, 255 0.7) 4px solid;
  }

  .containerItem {
    margin-top: 15px;
  }

  .first {
    background-color: rgba(252, 233, 241, 0.4);
  }

  .second {
    background-color: rgba(232, 250, 254, 0.5);
  }

  .third {
    background-color: rgba(233, 252, 244, 0.8);
  }
  @media (min-width: 728px) {
    .portfolioImg {
      height: 400px;
      border: 1px #333 solid;
    }

    .about {
      font-size: 1.2em;
    }
  }
  @media (min-width: 1024px) {
    .portfolioImg {
      width: 60%;
    }
    .cards {
      padding: 30px 20px 50px;
    }
    .about {
      font-size: 1.3em;
    }
  }

  @media (min-width: 1400px) {
    .portfolioImg {
      width: 50%;
    }
    .about {
      width: 50%;
      margin: 20px auto 10px;
    }
  }
  @media (min-width: 1800px) {
    .portfolioImg {
      width: 40%;
    }
    .about {
      width: 40%;
    }

    .cards {
      padding: 40px 20px 60px;
    }
  }
`;
