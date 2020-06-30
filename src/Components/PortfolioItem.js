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
          {renderImgOrIframe()}
          <h1 className="smallHeading containerItem">{title}</h1>
          <p className="containerItem about">{about}</p>

          {websiteURL && (
            <a
              className=" containerItem darkBtn btn"
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
  .portfolioImg {
    width: 400px;
    height: 250px;
  }

  .cards {
    padding: 50px;
    width: 100%;
    border: black solid 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .containerItem {
    margin-top: 15px;
  }

  .first {
    background-color: rgba(229, 242, 255, 0.8);
  }

  .second {
    background-color: rgba(242, 229, 255, 0.8);
  }

  .third {
    background-color: rgba(168, 255, 210, 0.3);
  }
`;
