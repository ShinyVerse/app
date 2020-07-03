import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0px 15px;
    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
  @media (min-width: 728px) {
    justify-content: flex-start;
  }
`;

export default Nav;
