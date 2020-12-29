import React from "react";
import Home from "./components/Home";
import { About } from "./components/About";
import { Theme } from "./context/Theme";

export default function App() {
  return (
    <Theme>
      <Home />
      <About />
    </Theme>
  );
}
