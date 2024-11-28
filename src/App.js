import { useState } from "react";
import "./App.css";
import Message from "./components/Message";

function App() {
  const affirmations = [
    "Je suis capable de réaliser tout ce que je veux.",
    "Si je ne suis pas prêt à apprendre continuellement je dois quitter dès maintenant cette formation",
    "Je suis courageux et curieux.",
    "La Juventus est le club le plus titré d'Italie.",
  ];

  const [currentAffirmation] = useState(
    affirmations[Math.floor(Math.random() * affirmations.length)]
  );

  const [messageType, setMessageType] = useState(null);

  const handleTrueClick = () => {
    setMessageType("success");
  };

  const handleFalseClick = () => {
    setMessageType("error");
  };

  return (
    <div>
      <h1>Exo Affirmation True & False</h1>
      <div className="Affirmation">
        {currentAffirmation} <br />
        <button onClick={handleTrueClick}>True</button>
        <button onClick={handleFalseClick}>False</button>
        <br />
      </div>

      <Message type={messageType} />
    </div>
  );
}

export default App;
