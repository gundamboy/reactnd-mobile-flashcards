import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import {NavigationContainer} from "@react-navigation/native";
import DeckList from "./components/DeckList";
import {ThemeProvider} from "react-native-elements";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
          <ThemeProvider>
              <NavigationContainer>
                  <Stack.Navigator>
                      <Stack.Screen name="Home" component={DeckList} />
                  </Stack.Navigator>
              </NavigationContainer>
          </ThemeProvider>
      </Provider>
  );
}
