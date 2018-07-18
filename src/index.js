import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import DidScroll from "react-did-scroll";
import "./styles.css";
const App = () => (
  <DidScroll>
    {({ pixels, percent }) => (
      <Wrapper>
        <Face style={{}}>
          <Background
            style={{
              height: `${Math.max(90 - percent * 0.5, 50)}vh`
              // 
            }}
          />
          <Portrait
            style={{
              height: `${Math.max(90 - percent * 0.5, 50)}vh`,
            }}
          />
          <Lips
            style={{
              height: `${Math.max(90 - percent * 0.5, 50)}vh`
            }}
          />
          <Info style={{ top: `${30 + percent / 20}vh` }}>
            <Logo>daisyjay</Logo>
            <Contact />
          </Info>
        </Face>
        <Links style={{}}>
          <a href="https://github.com/daisyjay">
            <Link
              style={{
                background: "#d631b5",
                // marginBottom: `-${100 - percent}%`
              }}
            >
              <div>Code</div>
              <Github src="logo_github.png" />
            </Link>
          </a>
          <a href="https://medium.com/@daisyjay">
            <Link
              style={{
                background: "#b946b5",
                // marginBottom: `-${120 - percent * 1.2}%`
              }}
            >
              <div>Ideas</div>
              <Medium src="logo_medium.png" />
            </Link>
          </a>
          <a href="https://www.figma.com/file/YaGF7pApchXVaN9f0UkcxFpL/daisyjay">
            <Link
              style={{
                background: "#313d93",
                // marginBottom: `-${140 - percent * 1.4}%`
              }}
            >
              <div>Designs</div>
              <Figma src="logo_figma.svg" />
            </Link>
          </a>
          <a href="mailto:chat@daisyjay.com">
            <Link
              style={{
                background: "#0f166b",
                // marginBottom: `-${160 - percent * 1.6}%`
              }}
            >
              <div>Chat</div>
              <Email src="logo_email.png" />
            </Link>
          </a>
        </Links>
      </Wrapper>
    )}
  </DidScroll>
);

const Icon = styled.img`
  width: 60%;
  margin-top: 8px;
`

const Github = Icon.extend`
width: 75%;
margin-top: 6px;
`
const Figma = Icon.extend`
  width: 40%;
`
const Medium = Icon.extend``
const Email = Icon.extend`
margin-top: 6px;
width: 65%;`

const Links = styled.div`
  color: white;
  position: absolute;
  bottom: 0;
  max-width: 700px;
  width: 100%;
  text-align: center;
`;

const Link = styled.div`
  width: 25%;
  max-width: 160px;
  padding: 0.5rem;
  color: white;
  box-sizing: border-box;
  height: 25vh;
  max-height: 50vw;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  cursor: pointer;
  font-family: "Vollkorn SC", serif;
`;

const Wrapper = styled.div`
  max-width: 700px;
  width: 100%;
  height: 150vh;
  overflow: none;
  margin: 0 auto;
  position: relative;
`;

const Face = styled.div`
  background: black;
  color: white;
  height: 100vh;
  width: 100vw;
  max-width: 700px;
  margin: 0 auto;
  transform-origin: top;
  position: fixed;
`;

const Panel = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 100vh;
  background-position: center 33%;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  position: absolute;
  top: 0;
`;

const Background = Panel.extend`
  background-position: center;
  background-image: url(background.gif);
`;

const Portrait = Panel.extend`
  background-image: url(portrait.png);
  z-index: 100;
`;

const Lips = Panel.extend`
  background-image: url(lips.gif);
  z-index: 200;
`;

const Info = styled.div`
  color: white;
  position: fixed;
  z-index: 300;
  text-align: center;
  height: 80px;
  width: 100vw;
  max-width: 700px;
  z-index: 400;
`;


const Logo = styled.span`
  font-family: "Sue Ellen Francisco", cursive;
  font-size: 6rem;
  margin-left: 2rem;
`;

const Contact = styled.div``;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
