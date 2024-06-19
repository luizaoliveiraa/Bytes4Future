// import logo from "./logo.svg";
// import "./App.css";
import Message from "./components/message";
import { ListGroup } from "./components/ListGroup";
import { ListGroupJsInfo } from "./components/ListGroup";
import Dropdown from "./components/Dropdown";
import { ListGroup2 } from "./components/ListGroup";
import { ListGroupHandle } from "./components/ListGroup";
import { Alert } from "./components/Alert";
import { AlertDismissing } from "./components/Alert";
import {AlertClosingOnClick} from "./components/Alert";
import { BtnComponent1 } from "./components/BtnComponent";
import { BtnComponent2 } from "./components/BtnComponent";

function App() {
  return (
    <div className="App">
      <Message />
      <ListGroup />
      <ListGroupJsInfo />
      <Dropdown />
      <ListGroup2 />
      <ListGroupHandle />
      <Alert props="texto exibido no alerta" />
      <AlertDismissing />
      <BtnComponent1 />
      <BtnComponent2 props="my btn" />
      <AlertClosingOnClick />
    </div>
  );
}

export default App;
