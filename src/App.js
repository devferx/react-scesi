import React, { useState } from "react";
import Counter from "./pages/Counter";
// import Home from "./pages/Home";

function App() {
  const [mostrar, setMostrar] = useState(true);
  return (
    <>
      {mostrar ? <Counter /> : <h1>Contador no disponible</h1>}
      <button onClick={() => setMostrar(!mostrar)}>mostrar</button>
    </>
  );
}

export default App;
