import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.msg));
  }, []);

  return (
    <>
      <section id="center">
        <h2>{message}</h2>
      </section>
    </>
  );
}

export default App;
