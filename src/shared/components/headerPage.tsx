import React from 'react';
import {Image, Text , Box, HStack, IconButton } from 'native-base';
import { Feather } from "@expo/vector-icons";

import Logo from '../../../assets/daj.png';

const HeaderPage = () => {
  return (

    <Box
      p={2}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      // bg="#2b623c"
      width="100%"
    >
     
      <HStack space={2} alignItems="center">
        <Image source={Logo} alt="Logo" style={{ width: 60, height: 60 }} />
        
      </HStack>
      <Text color="white" fontWeight="bold">
          Alexandre Justen
        </Text>
      <IconButton
        variant="ghost"
        icon={<Feather name="bell" size={24} color="white" />}
        onPress={() => {
          // Ação ao pressionar o ícone de sino
        }}
      />
    </Box>
  );
};

export default HeaderPage;