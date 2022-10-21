import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dogs from "./components/Dogs";
import SingleDog from "./components/SingleDog";

const dogs = [
  {
    name: "Whiskey",
    motto: "I like to play ball",
    image: "/images/whiskey.jpg",
  },

  { name: "Hazel", motto: "I am a protector", image: "/images/hazel.jpg" },

  { name: "Tubby", motto: "I am a home dog", image: "/images/tubby.jpg" },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dogs dogs={dogs} />} />
        <Route path="/dogs/:name" element={<SingleDog dogs={dogs} />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Dogs dogs={dogs} />
    // </div>
  );
}

export default App;
