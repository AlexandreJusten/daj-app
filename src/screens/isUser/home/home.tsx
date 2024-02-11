import {  Button, Image, ScrollView, View, useTheme } from "native-base";
import { StyleSheet } from "react-native";
import React from "react";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";
// import Logo from '../../assets/daj.png';
import HeaderPage from "../../../shared/components/headerPage";
import HorizontalFlatList from "./horizoltal";
import Carousel from "./carrousel";
import FlatListExample from "./vertical";

export default function HomeView() {
    const { colors } = useTheme();
    
    
    return (
      <View style={style.containner}>

        {/* <HeaderPage/> */}
        <ScrollView>
          <Text ml={3} fontWeight="bold" >
            Categoria
          </Text>
        <HStack >
        <HorizontalFlatList/>
        </HStack>
        <View borderWidth={1}
          borderColor="#00000012">

        <Text ml={3} fontWeight="bold" color="#2b623c">
            Acontecendo Agora 
          </Text>
        <HStack m={4} color="#2b623c" >
       <Carousel/>
        </HStack>
        </View>
        <Text ml={3} fontWeight="bold" color="#2b623c">
            Itens Mais Pedidos 
          </Text>
        <HStack m={2}>

        <FlatListExample/>
        </HStack>

        </ScrollView>
      </View>
               
      
    );
  }

  const style = StyleSheet.create({

    containner: {
        flex: 1,
      
        
        marginTop: 27,
    }
  })
  