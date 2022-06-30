import { Helmet, HelmetProvider } from "react-helmet-async";
import Card from "./components/Card";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>midterm : yugi</title>
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:cardName" element={<Card />} />
        </Routes>
      </>
    </HelmetProvider>
  );
}

export default App;
