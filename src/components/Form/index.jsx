import React, { useState } from "react";
import { Flex, Show, Text } from "@chakra-ui/react";
import { questions } from "../../utils/questions";
import { useEffect } from "react";
import { useApp } from "../../context/contextApi";
import { ShowResult } from "../ShowResult";

export const Form = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const { correctAnswers, setCorrectAnswers } = useApp();

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].resposta) {
      setCorrectAnswers(correctAnswers + 1);
    }
    {
      currentQuestion < questions.length - 1
        ? setCurrentQuestion(currentQuestion + 1)
        : setShowResult(true);
    }
  };

  return (
    <Flex
      gap="8px"
      flexDir="column"
      position="absolute"
      h="550px"
      borderRadius="10px"
      w="500px"
      bgColor="#fff"
    >
      {showResult && <ShowResult />}
      <Text fontWeight="bold" cursor="default" m="20px auto" fontSize="20px">
        Questão {currentQuestion + 1}
      </Text>
      <Flex p="10px">
        <Text fontSize="25px" fontWeight="bold" m="0 auto">
          {questions[currentQuestion].pergunta}
        </Text>
      </Flex>
      <Flex gap="10px">
        <Flex w="100%" flexDir="column" gap="20px">
          {questions[currentQuestion].opcoes.map((opcao, index) => (
            <Flex
              border="2px solid #000"
              borderRadius="8px"
              _hover={{ bgColor: "#eee" }}
              m="10px"
              key={index}
              onClick={() => handleAnswer(opcao)}
              transition="all 0.3s ease-in-out"
            >
              <Text w="100%" p="12px" cursor="pointer" borderRadius="5px">
                {opcao}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
