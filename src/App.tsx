import React, { useState } from "react";
import { Image } from "./components/Image";
import { Effecter } from "./components/Effecter";

function App() {
  const [hueRotate, setHueRotate] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [src, setSrc] = useState("https://utgw.net/img/nikutai.png");

  return (
    <div className="App">
      <Image src={src} hueRotate={hueRotate} contrast={contrast} />
      <input
        type="url"
        size={100}
        value={src}
        onChange={(e) => setSrc(e.target.value)}
      />
      <Effecter value={hueRotate} min={0} max={360} setValue={setHueRotate} />
      <Effecter value={contrast} min={0} max={1000} setValue={setContrast} />
    </div>
  );
}

export default App;
