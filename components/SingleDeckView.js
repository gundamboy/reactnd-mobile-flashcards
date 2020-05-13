import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from "react-native";
import { Text, Image, Button, Icon } from "react-native-elements";
import styles from '../utils/styles';
import {addNewCardToDeck, getSingleDeck} from "../store/actions/actions-Decks";
import {getDeck} from "../utils/api";

class SingleDeckView extends Component {
    componentDidMount() {
        this.props.navigation.setOptions({title: this.props.deck.title});


    }

    addCard = (deck) => {
        this.props.navigation.navigate('AddCard', {deck:deck});
    }

    startQuiz = (deck) => {
        this.props.navigation.navigate('Quiz', {deck:deck});
    }

    render() {
        console.log("SingleDeckView props: ", this.props);
        return (
            <View>
                <Image
                    source={{uri: this.props.deck.deckImgUri}}
                    style={styles.singleDeckImage}
                />
                <View style={styles.viewWrapper}>
                    <View>
                        <Text>Cards: {this.props.deck.questions.length}</Text>
                    </View>
                    <View style={styles.singleDeckBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.addCard(this.props.deck)}
                        >
                            <View style={styles.addCardBtnView}>
                                <Icon
                                    name='plus-circle'
                                    size={18}
                                    type='material-community'
                                    style={styles.addCardBtnViewIcon}/>

                                <Text style={styles.addCardBtnViewText}>Add A Card</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.startQuiz(this.props.deck)}
                        >
                            <View style={styles.quizCardBtnView}>
                                <Icon
                                    name='school'
                                    size={18}
                                    type='material-community'
                                    style={styles.addCardBtnViewIcon}/>
                                <Text style={styles.addCardBtnViewText}>Start Quiz</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}



function mapStateToProps(state, ownProps) {

    return {
        deck: ownProps.route.params.deck,
    };
}

export default connect(mapStateToProps)(SingleDeckView);