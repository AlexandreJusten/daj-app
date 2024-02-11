import {  Button, Image, View, useTheme } from "native-base";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";
import IMG from "../../../../assets/categoria/2.png"
export default function MenuView() {
    const { colors } = useTheme();
    
   
    const [itemsPerRow, setItemsPerRow] = useState(4);
    const data = [
        { id: '1', text: 'Item 1' },
        { id: '2', text: 'Item 2' },
        { id: '3', text: 'Item 3' },
        { id: '4', text: 'Item 4' },
        { id: '5', text: 'Item 5' },
        { id: '6', text: 'Item 6' },
        { id: '7', text: 'Item 7' },
        { id: '8', text: 'Item 8' },
        { id: '9', text: 'Item 9' },
        { id: '10', text: 'Item 10' },
        { id: '11', text: 'Item 11' },


      ];
    
      const renderItem = ({ item }) => (
        <View style={{ width: 'auto', height: 100, margin: 8, justifyContent: 'center', alignItems: 'center' }}>
          <HStack
      // bg="lightblue"
      borderRadius={8}
      p={4}
      m={2}
      space={4}
      alignItems="center"
      borderWidth={1}
          borderColor="#00000012"
    >
      <Image
        source={IMG}
        alt="Product Image"
        size="50px"
        borderRadius={8}
      />
      <Box flex={1}>
        <Text fontSize="lg" fontWeight="bold">
          teste
        </Text>
        <Text>"{item.description}"</Text>
      </Box>
    </HStack>
        </View>
      );
  return (
    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    // horizontal={true}
    // numColumns={4}
    // key={itemsPerRow} 
  />
  );
  }

  const style = StyleSheet.create({

    containner: {
       
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 27
    }
  })
  