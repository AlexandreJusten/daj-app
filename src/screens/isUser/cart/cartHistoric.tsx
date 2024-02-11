import { Box, Button, ScrollView, VStack,FlatList, HStack, Avatar, Text, Spacer, useTheme  } from "native-base";
import { useState } from "react";

export default function CartHistoric() {
    const { colors } = useTheme();
    const [itemsPerRow, setItemsPerRow] = useState(4);
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "10/10/2023",
        timeStamp: "Pago",
        recentText: "R$ 100,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "23/10/2023",
        timeStamp: "Pago",
        recentText: "R$ 150,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "02/02/2024",
        timeStamp: "Pago",
        recentText: "R$ 90,00",
        status: 'entregue',
        avatarUrl: "https://img.elo7.com.br/product/zoom/265C0EA/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-decorativo-frango.jpg"
      }];
      return (
<ScrollView>

          <Box  >
          {/* <Heading fontSize="xl" p="4" pb="3">
           Comanda
          </Heading> */}
          {/* <Spacer></Spacer> */}
          
          <FlatList  m={2} data={data} renderItem={({
              item
            }) => <Box pl={["0", "4"]} pr={["0", "5"]} py="2" borderWidth={1}
            borderColor="#00000012">
                <HStack space={[2, 3]} justifyContent="space-between">
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
                  
                        </VStack>
                </HStack>
              </Box>} keyExtractor={item => item.id} />
        </Box>
                </ScrollView>
  )
  }
