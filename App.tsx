import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Teste from './src/screens/isUser/menu/menu';
import Routes from './src/routes';



export default function App() {
  // const { colors } = useTheme();

  return (
   
   <NativeBaseProvider>
   <Routes/>
    </NativeBaseProvider>
    
  );
}


