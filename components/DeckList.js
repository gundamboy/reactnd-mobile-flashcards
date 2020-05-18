import React, {Component} from 'react';
import { connect } from "react-redux";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Card, Icon, Button } from "react-native-elements";
import {handleGetAllDecks} from "../store/actions/actions-Decks";
import styles from '../utils/styles';

class DeckList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(handleGetAllDecks());

        this.props.navigation.setOptions({
            headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={styles.headerButtons}
                    onPress={() => this.goToAddDeck()}>
                    <Icon
                        name='plus-circle'
                        size={24}
                        type='material-community'
                    />
                </TouchableOpacity>
                </View>
            )
        });
    }

    goToAddDeck = () => {
        this.props.navigation.navigate('AddDeck');
    }

    goToSingleDeck = (deck) => {
        this.props.navigation.navigate('Deck', {
            title: deck.title,
            deckId: deck.id,
            singleDeck: deck
        });
    }

    render() {
        const { decks } = this.props.decks;

        return (
            <View>
                <FlatList
                    data={Object.keys(decks)}
                    renderItem={({ item }) => (
                        <Card
                            image={{uri: decks[item].deckImgUri}
                            }>
                            <View style={styles.cardFooter}>
                                <View>
                                    <Text>{decks[item].title}</Text>
                                    <Text>{decks[item].questions.length} {decks[item].questions.length === 1 ? "card" : "cards"} in this deck</Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => this.goToSingleDeck(decks[item])}
                                    >
                                        <Icon
                                            name='arrow-right-bold-circle'
                                            size={30}
                                            type='material-community'/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Card>
                    )}
                    keyExtractor={item => decks[item].id}
                    horizontal={false}
                />
            </View>
        );
    }
}


const mapStateToProps = state => ({ decks: state });


export default connect(mapStateToProps)(DeckList);