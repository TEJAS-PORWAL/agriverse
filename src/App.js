import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Populatediv from "./components/Populatediv";
import About from "./components/About";
import Cards from "./components/Cards";
import TermCards from "./components/TermCards";
import Cardsection from "./components/Cardsection";
import { Routes, Route } from "react-router-dom";
import MyProvider from "./components/MyProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import AboutLink from "./components/AboutLink";
import Nft from './components/Nft'
import "./App.css";
import Faq from "./components/Faq";

function App() {
  // window.onload = 
  // setTimeout(() => {
  //   const vw = Math.max(
  //     document.documentElement.clientWidth || 0,
  //     window.innerWidth || 0
  //   );
  //   if (vw < 1000) {
  //     let roadmap = document.getElementById("roadmap").style;
  //     roadmap.display = "none";
  //     let populate = document.getElementById("Populate").style;
  //     populate.display = "block";
  //   } else {
  //     let roadmap = document.getElementById("roadmap").style;
  //     roadmap.display = "block";
  //     let populate = document.getElementById("Populate").style;
  //     populate.display = "none";
  //   }
  // }, 10);

  return (
    <ErrorBoundary>
    <MyProvider>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <Main />
              <AboutLink />
              <TermCards/>
              <Nft/>
              <Cards />
              <Roadmap />
              <Populatediv />
              <Faq/>
              <Footer />
            </>
          }
        />
        <Route exact path="/About" element={<About/>} />
        <Route
          exact
          path="/Cardsection/*"
          element={<Cardsection/>}
        ></Route>
      </Routes>
    </MyProvider>
    </ErrorBoundary>
  );
}
export default App;
