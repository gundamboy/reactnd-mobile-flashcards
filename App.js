import React, {Component} from 'react';
import {Provider} from "react-redux";
import store from "./store";
import {NavigationContainer} from "@react-navigation/native";
import DeckList from "./components/DeckList";
import {ThemeProvider} from "react-native-elements";
import {createStackNavigator} from "@react-navigation/stack";
import SingleDeckView from "./components/SingleDeckView";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import AddDeck from "./components/AddDeck";

const Stack = createStackNavigator();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <ThemeProvider>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Home">
                            <Stack.Screen name="Home"
                                          options={({ navigation, route}) => ({
                                              headerTitle: "Your Decks"
                                          })}
                                          component={DeckList} />
                            <Stack.Screen name="AddDeck"
                                          options={({ navigation, route}) => ({
                                              headerTitle: "Add A New Deck"
                                          })}
                                          component={AddDeck} />
                            <Stack.Screen name="Deck" component={SingleDeckView} />
                            <Stack.Screen name="AddCard" component={AddCard} options={{title: "Add A Card"}} />
                            <Stack.Screen name="Quiz" component={Quiz} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App;
