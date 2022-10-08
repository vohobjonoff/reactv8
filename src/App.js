import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";


const App = () => {
  return (
    <div>
      <h1 className="title">Hello</h1>
      <Pet name="hatiko" animal="dog" breed="bone" />
      
    </div>
  )
}


ReactDOM.render(React.createElement(App), document.getElementById("root"));