import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './components/BottomNavigator';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </>
  );
}
