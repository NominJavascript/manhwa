import { useState } from "react";
import "./styles/app.scss";
import Carousel from "./components/Carousel";
import img1 from "../public/img/img1.png";
import img2 from "../public/img/img2.jpg";
import img3 from "../public/img/img3.jpg";
import img4 from "../public/img/img4.jpg";
import img5 from "../public/img/img5.jpg";

const Card = ({ title }) => {
  return <h2>{title}</h2>;
};

const slideData = [
  {
    image: img1,
    title: "Slide 1",
    description: "Description for slide 1",
  },
  {
    image: img2,
    title: "Slide 2",
    description: "Description for slide 2",
  },
  {
    image: img3,
    title: "Slide 3",
    description: "Description for slide 3",
  },
  {
    image: img4,
    title: "Slide 4",
    description: "Description for slide 2",
  },
  {
    image: img5,
    title: "Slide 5",
    description: "Description for slide 3",
  },
];

const App = () => {
  return (
    <>
      {/* <Card className="card" title="Title1" /> */}
      <Carousel books={slideData} />
    </>
  );
};

export default App;
