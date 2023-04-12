import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

let items = ["Bucuresti", "Craiova", "Oradea", "Galati"];

const handleSlectIteam = (item: string) => {
  console.log(item);
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const closeHandler = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <Alert onClose={closeHandler}>
          <span>Alerta Maxima</span>
        </Alert>
      )}

      <Button onClick={() => setIsVisible(true)}>My label</Button>

      {/* <ListGroup
        items={items}
        heading="Orase in Romania"
        onSelectItem={handleSlectIteam}
      ></ListGroup> */}
    </div>
  );
}

export default App;
