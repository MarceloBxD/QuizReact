import React, { useState } from "react";
import { Button, Flex, useToast, Input, Text } from "@chakra-ui/react";
import { useApp } from "../../context/contextApi";
import bgImgResult from "../../assets/images/bgResult.jpg";
import { questions } from "../../utils/questions";

export const ShowResult = () => {
  const { correctAnswers } = useApp();
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [rating, setRating] = useState(0);
  const [dataOverview, setDataOverview] = useState([]);
  const toast = useToast();
  const overview = {
    nome: name,
    telefone: tel,
    avaliacao: rating,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataOverview([...dataOverview, overview]);
    {
      dataOverview.length > 0
        ? toast({
            title: "Avaliação enviada com sucesso!",
            description: "Obrigado por participar!",
            status: "success",
            duration: 2000,
            isClosable: true,
          })
        : toast({
            title: "Erro ao enviar avaliação!",
            description: "Por favor, tente novamente!",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
    }
  };

  const resetGame = () => {
    window.location.reload();
  };

  return (
    <Flex
      gap="10px"
      flexDir="column"
      p="20px"
      h="100%"
      w="100%"
      position="absolute"
      borderRadius="10px"
      bgImg={`${bgImgResult}`}
      objectFit="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      color="#fff"
    >
      <Text fontSize="30px" fontWeight="bold" m="0 auto">
        {correctAnswers === 0
          ? "Você errou todas as questões!"
          : `Você acertou ${correctAnswers} questões!`}
      </Text>
      <Flex>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Flex flexDir="column" gap="10px">
            <label htmlFor="nome">Nome Completo</label>
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Marcelo Bracet"
              name="nome"
              id="nome"
            />
            <label htmlFor="tel">Número</label>
            <Input
              onChange={(e) => setTel(e.target.value)}
              type="tel"
              name="tel"
              placeholder="(00)00000-0000"
              id="tel"
            />
            <label htmlFor="avaliacao">Avaliação</label>
            <Input
              min="0"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              max="10"
              type="range"
              name="avaliacao"
              id="avaliacao"
            />
            <Button
              transition="all 0.4s ease-in-out"
              bgColor="#fff"
              color="#000"
              _hover={{ backgroundColor: "#000", color: "#f00" }}
              type="submit"
            >
              Enviar avaliação
            </Button>
          </Flex>
        </form>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        align="flex-end"
        justify="space-around"
        position="relative"
      >
        <Button
          position="inherit"
          w="fit-content"
          colorScheme="gray"
          variant="ghost"
          color="#fff"
          _hover={{ bgColor: "#000", color: "#f00" }}
          transition="all 0.4s ease-in-out"
          onClick={() => resetGame()}
        >
          Tente Novamente!
        </Button>
        <Button
          color="#000"
          bgColor="red"
          variant="ghost"
          transition="all 0.4s ease-in-out"
          _hover={{ bgColor: "transparent", color: "#fff" }}
          onClick={() => window.close()}
        >
          Sair
        </Button>
      </Flex>
    </Flex>
  );
};
