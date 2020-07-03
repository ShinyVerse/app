import React from "react";
import styled from "styled-components";

export const Section = ({ title, content }) => {
  return (
    <Wrapper>
      <div className="section-wrapper">
        {title && <div className="section-title">{title}</div>}
        {content && <div className="section-content">{content}</div>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section-wrapper {
    padding: 10px 5px 20px;
  }

  .section-title {
    margin: 25px auto 10px;
    font-family: "Dancing Script", cursive;
    font-size: 2em;
  }

  .section-content {
    margin-top: 10px;
  }

  @media (min-width: 728px) {
    .section-wrapper {
      width: 80%;
      margin: auto;
    }
    .section-content {
      font-size: 1.1em;
    }
  }
  @media (min-width: 1200px) {
    .section-wrapper {
      width: 70%;
    }
    .section-title {
      font-size: 2.4em;
    }

    .section-content {
      font-size: 1.3em;
    }
  }

  @media (min-width: 1800px) {
    .section-wrapper {
      width: 60%;
    }
    .section-title {
      font-size: 2.8em;
    }

    .section-content {
      font-size: 2em;
    }
  }
`;
