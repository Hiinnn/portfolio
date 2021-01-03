import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ExternalLink } from "./components/ExternalLink";

export default function App() {
  return (
    <React.Fragment>
      <ExternalLink />
      <Home />
      <About />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}
