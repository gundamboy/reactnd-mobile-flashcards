import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from "react-native";
import { Text, Input  } from "react-native-elements";
import styles from '../utils/styles';
import { addCardToDeck } from "../store/actions/actions-Decks";

class AddCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: 'test q',
            answer: 'test a',
        }
    }

    submitCard = () => {
        const { addCardToDeck, deck, navigation } = this.props;
        console.log("AddCard Submit props", this.props);


        const card = {
            question: this.state.question,
            answer: this.state.answer
        };

        if (this.state.question.length && this.state.answer.length) {
            addCardToDeck(deck.id, card);
            this.setState({ question: '', answer: '' });
            navigation.goBack();
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
                    <Text style={styles.submitButtons}>Add Card</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const deckId = ownProps.route.params.deck.deck.id;
    const deck = state['decks'][deckId];

    return {
        deck
    };
};



export default connect(mapStateToProps,  { addCardToDeck })(AddCard);