import React from "react";
import styled from "styled-components";

import { Contact } from "../Components/Contact";

import { work } from "../work";
import { PortfolioItem } from "../Components/PortfolioItem";

const colorSetters = ["first", "second", "third", "#c5afd9"];

const Portfolio = () => {
  return (
    <Wrapper>
      <div className="container">
        {work.map((item, index) => {
          return (
            <PortfolioItem
              key={`portfolio-${index}`}
              title={item.title}
              about={item.about}
              img={item.src}
              websiteURL={item.websiteURL}
              codeURL={item.codeURL}
              iframe={item.iframe}
              colorSetter={colorSetters[index]}
            />
          );
        })}
        <Contact />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Portfolio;
