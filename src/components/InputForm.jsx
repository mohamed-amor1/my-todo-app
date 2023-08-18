import React, { useState } from "react";
import {
  Input,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Text,
  InputGroup,
} from "@chakra-ui/react";

import { InputLeftElement } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const InputForm = ({ userInput, handleChange, handleSubmit }) => {
  const [errorMessage, setErrorMessage] = useState(""); // Use state for error message

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (!userInput) {
        setErrorMessage("Please enter a task"); // Set error message
      } else {
        setErrorMessage(""); // Clear error message
        handleSubmit();
      }
    }
  };

  return (
    <Flex mt={4} direction="column" align="center">
      <Flex direction="row" align="center" width="45vw">
        <FormControl
          isRequired={!!errorMessage} // Use errorMessage to determine if required
          flex="1"
          display="flex"
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none" position="absolute">
              <AddIcon color="gray.400" boxSize={6} pl="2" pt="1.5" />
            </InputLeftElement>
            <Input
              size="lg"
              placeholder="Add Todo"
              value={userInput}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              autoFocus
            />
          </InputGroup>
          <Button
            type="button"
            colorScheme="telegram"
            onClick={handleSubmit}
            size="lg"
            ml={2}
          >
            Add Task
          </Button>
        </FormControl>
      </Flex>
      <Flex mt={2} direction="row" align="left" width="45vw">
        <Text fontSize="lg" color="red.500" textAlign="left">
          {errorMessage}
        </Text>
      </Flex>
    </Flex>
  );
};

export default InputForm;
