import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Routing from "./Routes";
import "./App.css";
import { useState } from "react";
import LoginSignUp from "./Components/LoginSignUp";

function App() {
  const [authenticated, setAuthenticated] = useState(true);
  return (
    <>
      {authenticated === true ? (
        <>
          {" "}
          <Header />
          <Routing />
          <Footer />
          {/* <Cart /> */}
        </>
      ) : (
        <LoginSignUp setAuthenticated={setAuthenticated} />
      )}
    </>
  );
}

export default App;
