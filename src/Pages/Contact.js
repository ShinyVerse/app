import React from "react";
import styled from "styled-components";

import avatar from "../assets/me-avatar.svg";
import mail from "../assets/mail.svg";
import linkedIn from "../assets/linkedIn.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";

const Link = (href, img, alt) => {
  return (
    <a href={href} rel="noreferrer noopener" target="_blank">
      <img className="icon" src={img} alt={alt} />
    </a>
  );
};
const links = [
  {
    href: "https://www.linkedin.com/in/laura-jackson-4b547414a/",
    img: linkedIn,
    alt: "linkedIn",
  },
  {
    href: "https://github.com/ShinyVerse",
    img: github,
    alt: "github",
  },
  {
    href: "https://www.instagram.com/supershinyverse/?hl=en",
    img: instagram,
    alt: "instagram",
  },
];

const Contact = () => {
  return (
    <Wrapper>
      <div className="contact">
        <img className="avatar" src={avatar} alt="avatar" />
        <p>Get in touch!</p>
        <div className="email">
          <img className="emailIcon" src={mail} alt="email" />
          <p>laurajackson454@gmail.com</p>
        </div>
        <div className="media">
          {links.map((link) => Link(link.href, link.img, link.alt))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .contact {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .email {
    width: 80%;
    display: flex;
    flex-direction: row;
    line-height: 30px;
    justify-content: center;
  }
  .emailIcon {
    width: 30px;
    height: 30px;
    margin-right: 7px;
  }
  .avatar {
    width: 300px;
    height: 300px;
    margin-left: -10px;
  }

  .icon {
    width: 70px;
    height: 70px;
    margin: 10px;
  }

  @media (min-width: 1024px) {
    .contact {
      font-size: 1.5em;
    }
    .email {
      margin: 40px 0px;
      line-height: 50px;
    }
    .emailIcon {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    .avatar {
      width: 350px;
      height: 350px;
    }

    .icon {
      width: 80px;
      height: 80px;
    }
  }

  @media (min-width: 1400) {
    .contact {
      font-size: 2.5em;
    }
    .email {
      line-height: 70px;
    }
    .emailIcon {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }
    .avatar {
      width: 500px;
      height: 500px;
    }

    .icon {
      width: 130px;
      height: 130px;
      margin: 10px;
    }
  }

  @media (min-width: 1800px) {
    .contact {
      font-size: 3em;
    }
    .email {
      line-height: 100px;
    }
    .emailIcon {
      width: 80px;
      height: 80px;

      margin: 10px 20px 0px 0px;
    }
    .avatar {
      width: 600px;
      height: 600px;
    }

    .icon {
      width: 150px;
      height: 150px;
      margin: 10px;
    }
  }
`;

export default Contact;
