import React from "react";
import NavHeader from "./components/NavHeader";
import ProjectBoard from "./components/ProjectBoard";

// Our App component returns the Greeting component
function App() {
  return (
    <div className="container">
      <NavHeader />
      <ProjectBoard />
    </div>
  );
}

export default App;
