import React from "react";
import MyToDoList from "./components/MyToDoList";
import { Heading } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import "./App.css";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div>
      <Heading>To Do</Heading>
      <MyToDoList />
    </div>
  );
}

export default App;
