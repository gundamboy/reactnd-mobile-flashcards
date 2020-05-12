import React, {Component} from 'react';
import {connect, Provider} from "react-redux";
import store from "./store";
import {NavigationContainer} from "@react-navigation/native";
import DeckList from "./components/DeckList";
import {ThemeProvider} from "react-native-elements";
import {createStackNavigator} from "@react-navigation/stack";
import SingleDeckView from "./components/SingleDeckView";

const Stack = createStackNavigator();


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <ThemeProvider>
                    <NavigationContainer>
                        <Stack.Navigator
                            initialRouteName="Home">
                            <Stack.Screen name="Home" component={DeckList} />
                            <Stack.Screen name="Deck" component={SingleDeckView} options={
                                {
                                    title: "test"
                                }
                            } />
                        </Stack.Navigator>
                    </NavigationContainer>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App;
