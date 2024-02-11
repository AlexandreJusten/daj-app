import { Box, Button, ScrollView, VStack,FlatList, HStack, Avatar, Text, Spacer, useTheme  } from "native-base";
import { useState } from "react";

export default function CardActive() {
    const { colors } = useTheme();
    const [itemsPerRow, setItemsPerRow] = useState(4);
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Aafreen Khan",
        timeStamp: "12:47 PM",
        recentText: "R$ 10,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Sujitha Mathur",
        timeStamp: "11:11 PM",
        recentText: "R$ 10,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Anci Barroco",
        timeStamp: "6:22 PM",
        recentText: "R$ 10,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Aniket Kumar",
        timeStamp: "8:56 PM",
        recentText: "R$ 10,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      },
      {
        id: "68694a0f-3da1-431f-bd56-142371e29d722",
        fullName: "Aniket Kumar",
        timeStamp: "8:56 PM",
        recentText: "R$ 10,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      },
      {
        id: "68694a0f-3da1-431f-bd56-142371e29d272",
        fullName: "Aniket Kumar",
        timeStamp: "8:56 PM",
        recentText: "R$ 10,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      },
      {
        id: "68694a0f-3da1-431f-bd56-142371e29d7332",
        fullName: "Aniket Kumar",
        timeStamp: "8:56 PM",
        recentText: "R$ 10,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      },
      {
        id: "68694a0f-3da1-431f-bd56-142371edw29d72",
        fullName: "Aniket Kumar",
        timeStamp: "8:56 PM",
        recentText: "R$ 10,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "R$ 10,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      }];
      return (
<ScrollView>

          <Box >
          {/* <Heading fontSize="xl" p="4" pb="3">
           Comanda
          </Heading> */}
          {/* <Spacer></Spacer> */}
          <VStack space={2} alignItems="center" mt={5}>
        <Button bg="#2b623c" w={200} >
          Pagar
        </Button>
      </VStack>
          <FlatList m={2} data={data} renderItem={({
              item
            }) => <Box pl={["0", "4"]} pr={["0", "5"]} py="2">
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar size="48px" source={{
                      uri: item.avatarUrl
                    }} />
                  <VStack>
                    <Text _dark={{
                        color: "warmGray.50"
                    }} color="coolGray.800" bold>
                      {item.fullName}
                    </Text>
                    <Text color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                      {item.recentText}
                    </Text>
                  </VStack>
                  <Spacer />
                  <VStack>

                  <Text fontSize="xs" _dark={{
                      color: "warmGray.50"
                    }} color="coolGray.800" alignSelf="flex-start">
                    {item.timeStamp}
                  </Text>
                  <Text fontSize="xs" _dark={{
                      color: "warmGray.50"
                    }} color="coolGray.800" alignSelf="flex-start">
                    {item.status}
                  </Text>
                        </VStack>
                </HStack>
              </Box>} keyExtractor={item => item.id} />
        </Box>
                </ScrollView>
  )
  }
