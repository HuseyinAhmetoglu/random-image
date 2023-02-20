import Image from "./components/Image";
import { useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const getRandomImage = () => {
    const imagesList = ["Bird", "Fish", "Cat", "Dog"];
    return imagesList[Math.floor(Math.random() * imagesList.length)];
  };
  const handleClick = () => {
    setImages([...images, getRandomImage()]);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Tıkla</button>
      {images.map((image, key) => {
        return <Image key={key} image={image}></Image>;
      })}
    </div>
  );
}

export default App;
