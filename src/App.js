import Image from "./components/Image";
import { useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const getRandomImage = () => {
    const imagesList = ["Bird", "Fish", "Cat", "Dog"];
    return imagesList[Math.floor(Math.random() * imagesList.length)];
  };
  const randomImage = () => {
    setImages([...images, getRandomImage()]);
  };
  const deleteImage = () => {
    setImages([]);
  };
  return (
    <div className="App">
      <div>
        <button className="buttonApp" onClick={randomImage}>
          Tıkla
        </button>
        <button className="buttonApp" onClick={deleteImage}>
          Temizle
        </button>
      </div>
      <div className="imageList">
        {images.map((image, key) => {
          return <Image key={key} image={image}></Image>;
        })}
      </div>
    </div>
  );
}

export default App;
