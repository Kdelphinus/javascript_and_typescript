import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconFeather from 'react-native-vector-icons/Feather';

import MenuScreen from '../screens/MenuScreen';
import LikeScreen from '../screens/LikeScreen';
import HomeScreen from '../screens/HomeScreen';
import MyScreen from '../screens/MyScreen';
import PlanScreen from '../screens/PlanScreen';
import HomeHeaderButton from './HomeHeaderButton';
import { GlobalStyles } from '../styles/CommonStyles';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          title: 'Menu',
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? GlobalStyles.colors.main : color,
                fontSize: 12,
              }}
            >
              Menu
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <IconIonicons
              name='menu'
              color={focused ? GlobalStyles.colors.main : color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Like'
        component={LikeScreen}
        options={{
          title: 'Like',
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? GlobalStyles.colors.main : color,
                fontSize: 12,
              }}
            >
              Like
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <IconAntDesign
              name='hearto'
              color={focused ? GlobalStyles.colors.main : color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? GlobalStyles.colors.main : color,
                fontSize: 12,
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <IconOcticons
              name='home'
              color={focused ? GlobalStyles.colors.main : color}
              size={size}
            />
          ),
          headerTitle: 'TRIPAMI',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => {
            return <HomeHeaderButton />;
          },
        }}
      />
      <Tab.Screen
        name='My'
        component={MyScreen}
        options={{
          title: 'My',
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? GlobalStyles.colors.main : color,
                fontSize: 12,
              }}
            >
              My
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <IconOcticons
              name='person'
              color={focused ? GlobalStyles.colors.main : color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Plan'
        component={PlanScreen}
        options={{
          title: 'Plan',
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? GlobalStyles.colors.main : color,
                fontSize: 12,
              }}
            >
              Plan
            </Text>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <IconFeather
              name='file'
              color={focused ? GlobalStyles.colors.main : color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
