// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {Feather} from "@expo/vector-icons"
// import HeaderPage from "../shared/components/headerPage";
// import HomeView from "../screens/home/home";
// import MenuView from "../screens/menu/menu";
// import ProfileView from "../screens/profile/profile"; 
// import CartView from "../screens/cart/cart";
// import { useState } from "react";
// import LoginScreen from "../screens/login/loginScreen";

// const Tab = createBottomTabNavigator();

// export default function TabRoutes(){

//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     return(
//         <Tab.Navigator >
//          {isAuthenticated ? (
//            <>
//         <Tab.Screen
//           name="Inicio"
//           component={HomeView}
//           options={{
//             tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
//             tabBarLabel: 'Inicio',
//             headerTitle: () => <HeaderPage />,
//             headerStyle: { backgroundColor: '#2b623c' },
//             tabBarActiveTintColor: '#2b623c',
//           }}
//         />
//           <Tab.Screen
//             name="cardapio"
//             component={MenuView}
//             options={{
//                 tabBarIcon:({color,size})=> <Feather name="book" color={color} size={size}/>,
//                 tabBarLabel: 'Cardapio',
//                 headerTitle: () => <HeaderPage />,
//                 headerStyle: { backgroundColor: '#2b623c' },
//                 tabBarActiveTintColor: '#2b623c',
//             }}/>
//             <Tab.Screen
//             name="Comanda"
//             component={CartView}
//             options={{
//                 tabBarIcon:({color,size})=> <Feather name="shopping-bag" color={color} size={size}/>,
//                 tabBarLabel: 'Comanda',
//                 headerTitle: () => <HeaderPage />,
//                 headerStyle: { backgroundColor: '#2b623c' },
//                 tabBarActiveTintColor: '#2b623c',
//             }}/>
//                 <Tab.Screen
//             name="profile"
//             component={ProfileView}
//             options={{
//                 tabBarIcon:({color,size})=> <Feather name="user" color={color} size={size}/>,
//                 tabBarLabel: 'Perfil',
//                 headerTitle: () => <HeaderPage />,
//                 headerStyle: { backgroundColor: '#2b623c' },
//                 tabBarActiveTintColor: '#2b623c'
//             }}/>
//         </>
//       ) : (
//         <Tab.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{
//             // tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
//             // tabBarLabel: 'Login',
//             // headerTitle: () => <HeaderPage />,
//             // headerStyle: { backgroundColor: '#2b623c' },
//             // tabBarActiveTintColor: '#2b623c',
//           }}
//         />
//       )}
//         </Tab.Navigator>
//     )
// }

import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import HeaderPage from '../shared/components/headerPage';
import HomeView from '../screens/isUser/home/home';
import MenuView from '../screens/isUser/menu/menu';
import ProfileView from '../screens/isUser/profile/profile';
import CartView from '../screens/isUser/cart/cart';
import LoginScreen from '../screens/login/loginScreen';
import HomeScreenAdmin from '../screens/isAdmin/home/homeScreenAdmin';
import HomeScreenEmployee from '../screens/isEmployee/home/homeScreenEmployee';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
          name="Inicio"
          component={HomeView}
          options={{
            tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
            tabBarLabel: 'Inicio',
            headerTitle: () => <HeaderPage />,
            headerStyle: { backgroundColor: '#2b623c' },
            tabBarActiveTintColor: '#2b623c',
          }}
        />
          <Tab.Screen
            name="cardapio"
            component={MenuView}
            options={{
                tabBarIcon:({color,size})=> <Feather name="book" color={color} size={size}/>,
                tabBarLabel: 'Cardapio',
                headerTitle: () => <HeaderPage />,
                headerStyle: { backgroundColor: '#2b623c' },
                tabBarActiveTintColor: '#2b623c',
            }}/>
            <Tab.Screen
            name="Comanda"
            component={CartView}
            options={{
                tabBarIcon:({color,size})=> <Feather name="shopping-bag" color={color} size={size}/>,
                tabBarLabel: 'Comanda',
                headerTitle: () => <HeaderPage />,
                headerStyle: { backgroundColor: '#2b623c' },
                tabBarActiveTintColor: '#2b623c',
            }}/>
                <Tab.Screen
            name="profile"
            component={ProfileView}
            options={{
                tabBarIcon:({color,size})=> <Feather name="user" color={color} size={size}/>,
                tabBarLabel: 'Perfil',
                headerTitle: () => <HeaderPage />,
                headerStyle: { backgroundColor: '#2b623c' },
                tabBarActiveTintColor: '#2b623c'
            }}/>
    </Tab.Navigator>
  );
};

const TabRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isEmployee,setIsEmployee] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // useEffect(() => {
  //   // Adicione sua lógica de verificação de autenticação aqui
  //   // Exemplo: Verifica se há um token de autenticação válido
  //   const userToken = true; // Substitua getUserToken pela sua função real
  //   setIsAuthenticated(!!userToken);
  // }, []);

  return (
    <Stack.Navigator>
     {isAuthenticated ? (
        <>
          {isAdmin && (
            <Stack.Screen
              name="AdminApp"
              component={HomeScreenAdmin}
              options={{ headerShown: false }}
            />
          )}
          {isEmployee && (
            <Stack.Screen
              name="EmployeeApp"
              component={HomeScreenEmployee}
              options={{ headerShown: false }}
            />
          )}
          {!isAdmin && !isEmployee && (
            <Stack.Screen
              name="RegularUserApp"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
          )}
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default TabRoutes;