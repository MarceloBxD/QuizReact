import React, { useState, useRef } from "react";
import { Button, Flex, useToast, Input, Text } from "@chakra-ui/react";
import { useApp } from "../../context/contextApi";
import bgImgResult from "../../assets/images/bgResult.jpg";
import emailjs from "@emailjs/browser";

export const ShowResult = () => {
  const { correctAnswers } = useApp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(undefined);
  const form = useRef();
  const toast = useToast();

  const resetGame = () => {
    window.location.reload();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_32jf0yc",
        "template_khxhcha",
        form.current,
        "WRzY65xBH3hhgKsK5"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast({
              title: "Email enviado com sucesso!",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          }
        },
        (error) => {
          console.log(error.text);
          if (error.text === "Bad Request") {
            toast({
              title: "Email não enviado!",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
          }
        }
      );

    if (name && email && description && rating) {
      setName("");
      setEmail("");
      setDescription("");
      setRating(undefined);
    }
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
          ref={form}
          onSubmit={sendEmail}
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Flex flexDir="column" gap="10px">
            <label htmlFor="name">Nome Completo</label>
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Nome Completo"
              name="name"
              id="nome"
            />
            <label htmlFor="email">Email</label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="user@email.com"
              id="email"
            />
            <label htmlFor="avaliacao">Avaliação:</label>
            <Input
              variant="flushed"
              defaultValue="10"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              name="rating"
              type="range"
              max="10"
              min="0"
            />
            <label htmlFor="descricao">Descrição</label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              required
              placeholder="Conte-me o que achou da avaliação!"
              name="description"
              id="description"
            />
            <Button
              transition="all 0.2s ease-in-out"
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
          transition="all 0.2s ease-in-out"
          onClick={() => resetGame()}
        >
          Tente Novamente!
        </Button>
        <Button
          color="#000"
          bgColor="red"
          variant="ghost"
          transition="all 0.2s ease-in-out"
          _hover={{ bgColor: "transparent", color: "#fff" }}
          onClick={() => window.close()}
        >
          Sair
        </Button>
      </Flex>
    </Flex>
  );
};
