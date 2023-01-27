import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import bgImg from "./assets/images/bg.jpg";

function App() {
  return (
    <Flex
      bgImg={`${bgImg}`}
      objectFit="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      h="100vh"
      w="100%"
      justify="center"
      align="center"
    >
      <Form />
    </Flex>
  );
}

export default App;
