import { useState } from "react";
import { Button } from "./components/button";


function App() {
  const [count, setCount] = useState<number>(0);

  return(
    <main>
      <p>Contador: {count}</p>

      <Button opcaoMudarValor={setCount} />
    </main>
  )
}

export default App;
