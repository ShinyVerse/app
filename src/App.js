import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Landing from "./Pages/Landing";
import Portfolio from "./Pages/Portfolio";

import "./App.css";

function App({ location }) {
  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"fade"}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Landing} />
              <Route exact path="/app" component={Landing} />
              <Route path="/portfolio" component={Portfolio} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms cubic-bezier(0.17, 0.67, 0.17, 0.81);
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms cubic-bezier(0.17, 0.67, 0.17, 0.81);
  }
  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 50px;
    left: 0;
  }
`;

export default withRouter(App);
