import React, { useState } from "react";
import { Box, HStack, VStack, Text, Input, Button, Heading, Spacer, Center, NativeBaseProvider, FormControl, Link, Image, Avatar } from "native-base";
import Logo from '../../../assets/daj.png'
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Login logic here
    console.log("Login pressed");
  };

  const handleRegister = () => {
    // Registration logic here
    console.log("Register pressed");
  };
  const Example = () => {
    return <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="md">
            {/* <Image source={Logo}></Image> */}
          </Heading>
          <Center>
        <Avatar size="2xl" source={Logo} mb={4}_light={{
    bg: "transparent", // Define a cor de fundo para claro (light) como transparente
  }}
  _dark={{
    bg: "transparent", // Define a cor de fundo para escuro (dark) como transparente
  }} />
      </Center>
  
          <VStack space={3} >
            <FormControl>
              <FormControl.Label>CPF</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Senha</FormControl.Label>
              <Input type="password" />
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "#2b623c"
            }} alignSelf="flex-end" mt="1">
                Esqueceu a senha?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" bg="#2b623c">
              Entrar
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                Novo Usuario?{" "}
              </Text>
              <Link _text={{
              color: "#2b623c",
              fontWeight: "medium",
              fontSize: "sm"
            }} href="#">
                Registrar
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>;
  };

  return (
    <Example/>
  );
}
