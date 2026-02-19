import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";
import { flexMixin } from "./App.scss";

const Section = styled.section`
  ${flexMixin({justify: "center", align: "center", wrap: "wrap", gap: 20 })}
  padding: 20px 40px;
`

function App() {
  return (
    <>
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </>
  );
}

export default App;
