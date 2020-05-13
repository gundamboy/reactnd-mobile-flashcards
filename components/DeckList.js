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

    }

    goToSingleDeck = (deck) => {
        this.props.navigation.navigate('Deck', {deck:deck});
    }

    render() {
        const { allDecks } = this.props.decks;
        console.log("deck list props: ", this.props);

        return (
            <View>
                <FlatList
                    data={Object.keys(allDecks)}
                    renderItem={({ item }) => (
                        <Card
                            image={{uri: allDecks[item].deckImgUri}
                            }>
                            <View style={styles.cardFooter}>
                                <View>
                                    <Text>{allDecks[item].title}</Text>
                                    <Text>{allDecks[item].questions.length} {allDecks[item].questions.length === 1 ? "card" : "cards"} in this deck</Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => this.goToSingleDeck(allDecks[item])}
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
                    keyExtractor={item => allDecks[item].id}
                    horizontal={false}
                />
            </View>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        decks: state.decks
    };
}


export default connect(mapStateToProps)(DeckList);