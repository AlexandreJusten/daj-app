import React from 'react';
import { View, Text, FlatList, Image, Center, Box, ZStack } from 'native-base';
import Image1 from '../../../../assets/categoria/1.png';
import Image2 from '../../../../assets/categoria/2.png';
import Image3 from '../../../../assets/categoria/3.png';
import Image4 from '../../../../assets/categoria/4.png';
import Image5 from '../../../../assets/categoria/5.png';

const HorizontalFlatList = () => {
  const data = [
    { id: '1', image: Image1, text: 'Bebidas' },
    { id: '2', image: Image2, text: 'Salada' },
    { id: '3', image: Image3, text: 'Lanches' },
    { id: '4', image: Image4, text: 'Drinks' },
    { id: '5', image: Image5, text: 'Cervejas' },
  ];
  const Example = ({ item }) => {
    return <Center h="40">
        <Box mt="-32" ml={4}>
          <ZStack mt="3" ml={-50}>
            <Box bg="#2b623c" size="16" rounded="lg" shadow={3} />
            <Image source={item.image} alt={`Image ${item.id}`} style={{ width: 60, height: 60 }} mt="3" ml="2" size="16" rounded="lg" shadow={7}/>
            {/* <Box bg="primary.300" mt="10" ml="10" size="16" rounded="lg" shadow={7} /> */}
          </ZStack>
        </Box>
      </Center>;
  };
  const renderItem = ({ item }) => (
    <View style={{ width: 90, height: 120, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={item.image} alt={`Image ${item.id}`} style={{ width: 60, height: 60 }} />
      <Text mt={2}>{item.text}</Text>
      {/* <Example item={item}/> */}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  );
};

export default HorizontalFlatList;