import React from "react";
import PDF from "./PDF";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        You can use the package called react-pdf, by using this package you can
        render the PDF in your React app by using the PDF URL.
      </h2>

      <PDF />
    </div>
  );
}
