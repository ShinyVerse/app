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
          className="contact message-me"
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
    font-size: 1.8em;
    text-align: center;
  }

  .icon {
    margin: auto;
    margin-right: 3px;
    height: 22px;
    width: 22px;
  }

  .message-me {
    width: 170px;
    background-color: $pink;
    font-size: 1.5em;
    padding: 10px;
    margin: 10px;
    color: black;
    text-decoration: none;
    border-radius: 4px;
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: auto;
    -webkit-box-shadow: 0px 2px 3px 0px purple;
    -moz-box-shadow: 0px 2px 3px 0px purple;
    box-shadow: 0px 2px 3px 0px purple;
  }

  .message-me:hover {
    transition: 0.2s;
    transform: translateY(2px);
    -webkit-box-shadow: 0px 1px 2px 0px purple;
    -moz-box-shadow: 0px 1px 2px 0px purple;
    box-shadow: 0px 1px 2px 0px purple;
  }

  .section {
    background-color: pink !important;
    padding: 30px 5px !important;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
  }
`;

export default Contact;
