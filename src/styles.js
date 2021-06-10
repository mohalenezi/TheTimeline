import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
}
P {
    font-style: italic;
}
`;

export const Title = styled.h1`
  text-align: center;
  p {
    background-color: #282c34;
    min-height: 10vh;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 6vmin);
    color: white;
  }
`;

export const Description = styled.h3`
  font-size: 100px;
  text-align: center;
`;

export const TimelineImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
`;

export const ListWrapper = styled.div`
  position: relative;
  display: block;
`;

export const EventWrapper = styled.div`
  margin: 20px;
  padding: 0.2em 0.2em 0.2em 1em;
  *padding: 0.4em;
  margin: 0.5em 0;
  background: lightblue;
  color: #000;
  text-decoration: none;
  -moz-border-radius: 0.3em;
  -webkit-border-radius: 0.3em;
  border-radius: 10em;
  transition: all 0.2s ease-in-out;
  border: 20px;
  img {
    width: 1000px;
    height: 900px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    font-size: 50px;
    text-align: center;
  }
  p:last-child {
    font-weight: bolder;
    text-align: center;
    color: red;
  }
`;

export const Year = styled.h2`
  font-weight: bolder;
  color: black;
  font-size: 100px;
  text-align: center;
`;
