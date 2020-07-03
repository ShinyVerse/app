import api from "./assets/server.svg";
import storiiImg from "./assets/storii.gif";

export const work = [
  {
    src: storiiImg,
    title: "Storii Frontend",
    about:
      "The UI for Storii, a collaborative tool for aspiring writers. A custom made react app, configured using webpack. Uses axios, redux and tested with jest and enzyme",
    websiteURL: "https://storii-ui.herokuapp.com/",
    codeURL: "https://github.com/ShinyVerse/Storii",
  },
  {
    src: api,
    title: "Storii Server",
    about:
      "A node.js server for Storii, a collaborative tool for aspiring writers, authentication with jwt token. Tested using chai, sinon and super-test",
    codeURL: "https://github.com/Nimzyow/storii_server",
  },

  {
    src: "https://i.simmer.io/@ShinyVerse/flyingship",
    title: "Flying Ship",
    about:
      "A project to introduce myself to C# and Unity. Use left and right arrows to rotate the ship, space for thrust. Have fun!",
    websiteURL: "https://simmer.io/@ShinyVerse/flyingship",
    iframe: true,
  },
];
