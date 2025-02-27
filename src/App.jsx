import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>I have successfully deployed with react !!:) </h1>
      <Link to={"/test"}>To test page</Link>
      <a href="/test">anchor to test page</a>
    </>
  );
}

export default App;
