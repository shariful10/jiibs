const cardsData = [
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  ,
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  ,
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
  { id: 1, title: "Gello", content: "sdsd" },
];

import React, { useState } from "react";
import { useSpring, animated, useGesture } from "react-spring";
import "./cat.css";
import { useGesture } from "react-use-gesture";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [bind, { delta }] = useGesture({
    onDrag: ({ down, movement: [mx], direction: [xDir], velocity }) => {
      if (!down) {
        const swipe = (Math.abs(mx) / window.innerWidth) * xDir;
        if (swipe > 0.2 || velocity > 0.5) {
          handlePrev();
        } else if (swipe < -0.2 || velocity < -0.5) {
          handleNext();
        }
      }
    },
  });

  const slideProps = useSpring({
    transform: `translateX(-${currentIndex * 100}%)`,
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="app">
      <div className="card-container" {...bind()}>
        <animated.div className="cards" style={slideProps}>
          {cardsData.map((card) => (
            <div key={card.id} className="card">
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </animated.div>
      </div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default App;
