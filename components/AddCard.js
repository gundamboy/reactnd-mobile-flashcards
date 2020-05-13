import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from "react-native";
import { Text, Input  } from "react-native-elements";
import styles from '../utils/styles';
import {addNewCardToDeck, handleGetAllDecks} from "../store/actions/actions-Decks";

class AddCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: 'test q',
            answer: 'test a',
        }
    }

    componentDidMount() {

    }

    submitCard = () => {
        if (this.state.question.length && this.state.answer.length) {
            this.props.addCardToDeck(this.props.deck.id, this.state);

            this.props.navigation.goBack();

            this.setState({
                question: '',
                answer: ''
            })
        }

    }

    render() {
        return (
            <View style={styles.viewWrapper}>
                <Text
                    style={styles.addCardHeroText}
                >Add a new card to your {this.props.deck.title} deck.</Text>

                <Input
                    containerStyle={styles.addCardInputContainer}
                    placeholder='Question'
                    label={<Text style={styles.addCardInputLabel}>Add a question:</Text>}
                    value={this.state.question}
                    onChangeText={question => this.setState({ question })}
                />

                <Input
                    containerStyle={styles.addCardInputContainer}
                    placeholder='Answer'
                    label={<Text style={styles.addCardInputLabel}>Add an answer:</Text>}
                    value={this.state.answer}
                    onChangeText={answer => this.setState({ answer })}
                />

                <TouchableOpacity
                    onPress={() => {this.submitCard()}}
                >
                    <Text style={styles.submitCardBtn}>Add Card</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {

    return {
        deck: ownProps.route.params.deck
    };
}

function mapDispatchToProps(dispatch) {

    return {
        addCardToDeck: (deckId, card) => { dispatch(addNewCardToDeck(deckId, card)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);