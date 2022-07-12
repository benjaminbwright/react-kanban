import React from "react";
import HeaderNav from "./components/HeaderNav";
import ProjectBoard from "./components/ProjectBoard";

// Our App component returns the Greeting component
function App() {
  return (
    <div className="container">
      <HeaderNav />
      <ProjectBoard />
    </div>  
  )
}

export default App;
