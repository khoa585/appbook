import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './src/components/Menu/Menu';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Detail from './src/components/Detail/Detail'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore'
function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home" component={Menu}
      />
      <Stack.Screen name="Detail" component={Detail}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
function SettingsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home" component={Menu} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
const store = configureStore()
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Library') {
                iconName = focused ? 'book' : 'book';
              }
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#284bad',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Library" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer >
    </Provider>
  );
};

export default App;
