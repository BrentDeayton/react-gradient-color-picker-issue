import { useState } from "react";
import "./App.css";

import ColorPicker from "react-best-gradient-color-picker";

function App() {
  const [color, setColor] = useState("rgba(255,255,255,1)");

  return (
    <div className="app">
      <ColorPicker value={color} onChange={setColor} />
    </div>
  );
}

export default App;
