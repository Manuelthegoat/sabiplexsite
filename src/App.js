import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Routing from "./Routes";
import "./App.css";
import { useState } from "react";
import LoginSignUp from "./Components/LoginSignUp";

function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin === false ? (
        <>
          {" "}
          <Header setShowLogin={setShowLogin} />
          <Routing />
          <Footer />
          {/* <Cart /> */}
        </>
      ) : (
        <LoginSignUp setShowLogin={setShowLogin} />
      )}
    </>
  );
}

export default App;
