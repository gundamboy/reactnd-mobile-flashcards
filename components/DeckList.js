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

    goToSingleDeck = () => {

    }

    render() {
        const { decks } = this.props;

        return (
            <>
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
                                    onPress={() => this.goToSingleDeck}
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
            </>
        );
    }
}


const mapStateToProps = ({ decks }) => ({
    decks
})

export default connect(mapStateToProps)(DeckList);