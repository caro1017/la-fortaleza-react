import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import FooterSection from "./section/FooterSection/FooterSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <FooterSection />
      </BrowserRouter>
    </>
  );
}

export default App;
