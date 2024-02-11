import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, HStack, Image, VStack, View, Text, FlatList, Avatar } from 'native-base';
import Image1 from '../../../../assets/drinks/1.jpg';
import Image2 from '../../../../assets/drinks/2.jpg';
import Image3 from '../../../../assets/drinks/3.jpg';
import Image4 from '../../../../assets/drinks/4.jpg';
import Image5 from '../../../../assets/drinks/5.jpg';

const FlatListExample = () => {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const data = [
    { id: '1', image: Image1, text: 'Item 1' },
    { id: '2', image: Image2, text: 'Item 2' },
    { id: '3', image: Image3, text: 'Item 3' },
    { id: '4', image: Image4, text: 'Item 4' },
    { id: '5', image: Image5, text: 'Item 5' },
    { id: '6', image: Image1, text: 'Item 6' },
    { id: '7', image: Image2, text: 'Item 7' },
    { id: '8', image: Image3, text: 'Item 8' },
    { id: '9', image: Image4, text: 'Item 9' },
    { id: '10', image: Image5, text: 'Item 10' },
    { id: '11', image: Image1, text: 'Item 11' },


  ];

  const renderItem = ({ item }) => (
    <View style={{ margin: 4, justifyContent: 'center', alignItems: 'center' }} borderBottomWidth={2}
      borderColor="#2b623c" >

      <View style={{ margin: 8, justifyContent: 'center', alignItems: 'center' }} borderWidth={1}
        borderColor="#00000025" >
        <HStack size={'lg'}>
          {/* <Image source={item.image} alt={`Image ${item.id}`} style={{ width: 100, height: 100 }} />
           */}
          <Avatar size="2xl" source={item.image} _light={{
            bg: "transparent", 
          }}
            _dark={{
              bg: "transparent", 
            }} />
          <HStack m={2} maxW={'120px'}>
            <VStack>
              <Text>Drink- Nome</Text>

              <Text color={'#505050'}>descricao do drink ou da bebida</Text>
            </VStack>
          </HStack>

        </HStack>
      </View>
    </View>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={true}
    // numColumns={4}
    // key={itemsPerRow} 
    />
  );
};

export default FlatListExample;
