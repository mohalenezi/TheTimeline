import { ThemeProvider } from "styled-components";
import TimelineList from "./components/TimelineList";
import { GlobalStyle, Title, Description, TimelineImage } from "./styles";
import Site from "./site.png";
const theme = {
  mainColor: "black",
  backgroundColor: "lightgrey",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <Title>
            <p>Mohammad personal Time Line</p>
          </Title>
          <Description>There is no end</Description>
          <Description>There is no beginning</Description>
          <Description> There is only the passion of life</Description>
          <TimelineImage alt="Timeline" src={Site} />
        </div>
        <TimelineList />
      </ThemeProvider>
    </div>
  );
}

export default App;
