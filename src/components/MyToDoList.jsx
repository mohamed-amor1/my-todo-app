import React, { useState } from "react";
import InputForm from "./InputForm";
import { Text, useToast } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Card, Stack, Box, Heading } from "@chakra-ui/react";
import MyEditableComponent from "./EditTask";

const MyToDoList = () => {
  const [userInput, setUserInput] = useState("");
  const [toDoTasks, setToDoTasks] = useState([]);

  const toast = useToast();

  const addTodo = (task) => {
    const newTask = { id: Date.now(), content: task };
    setToDoTasks([...toDoTasks, newTask]);
  };

  const deleteTodo = (deleteId) => {
    const newTasks = toDoTasks.filter((task) => task.id !== deleteId);
    setToDoTasks(newTasks);
  };

  const handleSubmit = () => {
    if (userInput === "") {
      toast({
        title: "Please enter a task.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    addTodo(userInput);
    setUserInput("");
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <InputForm
        userInput={userInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Card size="sm" width="45vw" m="auto" variant="filled" mt="20px">
        <Heading size="md" textAlign="center" mt="2">
          Tasks
        </Heading>
        <Stack spacing="3" mt="2" shadow="lg" md="6">
          {toDoTasks.map((item) => (
            <Box
              key={item.id}
              boxShadow="2xl"
              p="3"
              rounded="md"
              bg="white"
              _hover={{ bg: "#F7FAFC" }}
            >
              <div>
                <DeleteIcon
                  onClick={() => deleteTodo(item.id)}
                  cursor="pointer"
                  float="right"
                />
                <MyEditableComponent initialValue={item.content} />
              </div>
            </Box>
          ))}
        </Stack>
      </Card>
    </div>
  );
};

export default MyToDoList;
