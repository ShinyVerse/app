import React from "react";
import styled from "styled-components";

import image from "../assets/mail.svg";

export const Contact = () => {
  return (
    <Wrapper>
      <div id="contact" className="contact section container">
        <h1 className="contact heading">
          Currently available for new opportunities
        </h1>
        <a
          className="contact btn dark-btn"
          href="mailto:laurajackson454@gmail.com"
        >
          <img className="icon" src={image} alt="letter-icon" />
          Get in touch!
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .heading {
    font-size: 1.6em;
    text-align: center;
  }

  .icon {
    margin: auto;
    margin-right: 10px;
    height: 22px;
    width: 22px;
  }

  .btn {
    padding: 10px;
  }

  .section {
    background-color: rgb(236, 232, 254) !important;
    padding: 30px 5px 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 150px;
  }
`;

export default Contact;
