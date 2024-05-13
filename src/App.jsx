import { useState } from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
RandomColor;

function App() {
  return (
    <>
      <h1>Hello</h1>
      {/* Accordian component */}
      {/* <Accordian /> */}
      {/* Random color component */}
      {/* <RandomColor /> */}
      {/* Star rating component */}
      {/* <StarRating /> */}
      {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App;
