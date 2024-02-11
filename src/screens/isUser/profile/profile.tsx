import {  Avatar, Box, Center, Heading, VStack, View, useTheme } from "native-base";
import { Container, Text, Button, Icon, } from 'native-base';
export default function ProfileView() {
    const { colors } = useTheme();
  
    return (
      <Box flex={1} p={4} bg="white">
      <Center>
        {/* <Heading mb={4}>Perfil</Heading> */}
      </Center>
      {/* <Center>
        <Avatar size="2xl" source={{ uri: 'https://wendellcarvalho.com.br/wp-content/webp-express/webp-images/uploads/2023/07/Saiba-o-que-e-uma-pessoa-temperamental-e-como-esse-comportamento-pode-afetar-diferentes-areas-da-vida.jpg.webp' }} mb={4} />
      </Center> */}
      <VStack space={2} alignItems="center">
        <Text fontSize="xl" fontWeight="bold">Alexandre Justen</Text>
        <Text fontSize="md" color="gray.500">Cliente</Text>
      </VStack>
      {/* <Button size="md" mt={4} onPress={() => console.log('Edit Profile')}>
        Edit Profile
      </Button> */}
      <Center>

      <Button size="md" mt={2} onPress={() => console.log('Settings')} w={"200px"} bg={"#2b623c"}>
        consigurar
      </Button>
      </Center>
      <Center>
      <Button size="md" mt={2} colorScheme="danger" onPress={() => console.log('Logout')} >
        sair
      </Button>
      </Center>
    </Box>
    );
  }
  