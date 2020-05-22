import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from "react-native";
import {Text, Input, Icon, Card} from "react-native-elements";
import styles from '../utils/styles';
import { addCardToDeck } from "../store/actions/actions-Decks";

class AddCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: '',
            answer: '',
            error: false
        }
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={styles.headerButtons}
                        onPress={() => this.goToHome()}>
                        <Icon
                            name='home'
                            size={24}
                            type='material-community'
                        />
                    </TouchableOpacity>
                </View>
            )
        });
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
        } else {
            this.setState({
                ...this.state,
                error: true
            });
        }
    }

    handleQuestionTextChange = (text) => {
        this.setState({
            ...this.state,
            question: text,
            error: false
        })
    }

    handleAnswerTextChange = (text) => {
        this.setState({
            ...this.state,
            answer: text,
            error: false
        })
    }

    render() {
        return (
            <View style={styles.viewWrapper}>
                <Card containerStyle={{padding: 0}}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.addNewCardHeroText}>Add a new flashcard to your {this.props.deck.title} deck.</Text>
                    </View>
                    <View style={styles.addNewDeckCardBody}>
                        <View style={styles.addNewCardForm}>
                            <Input
                                containerStyle={styles.addCardInputContainer}
                                inputStyle={styles.addNewCardInputStyles}
                                placeholder='Question'
                                label={<Text style={styles.addCardInputLabel}>Add a question:</Text>}
                                value={this.state.question}
                                onChangeText={question => this.handleQuestionTextChange(question)}
                            />

                            <Input
                                containerStyle={styles.addCardInputContainer}
                                inputStyle={styles.addNewCardInputStyles}
                                placeholder='Answer'
                                label={<Text style={styles.addCardInputLabel}>Add an answer:</Text>}
                                value={this.state.answer}
                                onChangeText={answer => this.handleAnswerTextChange(answer)}
                            />

                            {this.state.error &&
                            <View style={styles.errorMessageContainer}>
                                <Icon
                                    name='error-outline'
                                    size={36}
                                    style={styles.errorMessageIcon}
                                    color='#db684d'
                                    type='material'
                                />
                                <Text style={styles.errorMessageText}>You must have a question and an answer to save a flashcard</Text>
                            </View>
                            }
                        </View>
                    </View>

                    <View style={[styles.buttonRow, styles.addNewCardBtnRow]}>
                        <TouchableOpacity
                            style={styles.addNewCardSubmitButton}
                            onPress={() => {this.submitCard()}}
                        >
                            <Text style={styles.addNewCardSubmitButtonText} >Add Card</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
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