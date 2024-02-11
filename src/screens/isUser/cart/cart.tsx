import { Avatar, Box, Button, FlatList, HStack, Heading, ScrollView, Spacer, Text, VStack,  useTheme } from "native-base";
import { useState } from "react";
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import CartActive from "./cartActive";
import CartHistoric from "./cartHistoric";


const FirstRoute = () => (
  <CartActive/>
);

const SecondRoute = () => (
  <CartHistoric/>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function CartView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      tabStyle={{ marginTop: 10 }}
      {...props}
      renderLabel={({ route, color }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {route.key === 'first' && (
            <Text>Comanda</Text>
          )}
          {route.key === 'second' && (
            <Text>Historico</Text>
          )}
          
        </View>
      )}
      style={{ backgroundColor: 'transparent',elevation: 0, shadowOpacity: 0 }}
      indicatorStyle={{ backgroundColor: '#2b623c' }}
      pressColor="transparent"

    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
	  renderTabBar={renderTabBar}
    />
  );
}