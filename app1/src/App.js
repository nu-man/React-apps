import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/cards";
function App() {
  return (
    <>
      <Header />
      <div className="grid-container">
            <div className="header">
                <h2>Header</h2>
            </div>
            <Card/>

        </div>

    </>
  );
} //JSx
export default App;
