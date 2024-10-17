import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import Message from "./Message";
// import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log("🚀 ~ Item:", item);
  //   alert(`You have select an item: ${item}`);
  // };
  const onClick = () => {
    console.log("🚀 ~ You have clicked on the button");
    setAertVisible(true);
  };
  const [alertVisible, setAertVisible] = useState(false);

  const handleClose = () => {
    console.log("🚀 ~ You have clicked on the close button");
    setAertVisible(false);
  };
  return (
    <div>
      {alertVisible && <Alert onClose={handleClose}>My Alert</Alert>}
      <Button color="danger" onClick={onClick}>
        My Button
      </Button>
      {/* <Alert>
        Hello <span>Boys !</span>
      </Alert> */}
      {/* <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
