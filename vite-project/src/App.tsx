import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

let items = ["Bucuresti", "Craiova", "Oradea", "Galati"];

const handleSlectIteam = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <Alert>
        <span>Alerta Maxima</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Orase in Romania"
        onSelectItem={handleSlectIteam}
      ></ListGroup>
    </div>
  );
}

export default App;
