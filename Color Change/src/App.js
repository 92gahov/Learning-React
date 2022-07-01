import Square from "./Components/Square";
import Input from "./Components/Input";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText}/>
      <Input colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} setIsDarkText={setIsDarkText} isDarkText={isDarkText}/>
    </div>
  );
}

export default App;
