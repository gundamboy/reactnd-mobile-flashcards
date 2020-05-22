import React, {Component} from 'react';
import { connect } from 'react-redux';
import {TouchableOpacity, View} from "react-native";
import {Card, Icon, Input, Text} from "react-native-elements";
import {handleGetAllDecks, saveDeck} from "../store/actions/actions-Decks";
import styles from "../utils/styles";
import {generateDeckUID, generateImageUrl} from "../utils/helpers";
import {getDeck} from "../utils/api";

class AddDeck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            deckId: '',
            imgUri: '',
            error: true
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

        this.setState({
            ...this.state,
            deckId: generateDeckUID(),
            imgUri: generateImageUrl()
        }, () => {

        })
    }

    goToHome = () => {
        this.props.navigation.navigate('Home');
    }

    submitDeck = () => {
        const { saveDeck } = this.props;

        if (this.state.title.length) {
            const saveNewDeck = saveDeck(this.state.deckId, this.state.title, this.state.imgUri);

            if(saveNewDeck) {
                getDeck(this.state.deckId)
                    .then((d) => {
                        this.props.navigation.navigate('Deck', {
                            title: this.state.title,
                            deckId: this.state.deckId,
                            deck: d,
                        });

                        this.setState({ deckId: '', title: '', imgUri: '', error: false});
                    });
            }
        } else {
            this.setState({
                ...this.state,
                error: true
            });
        }
    }

    handleTextChange = (text) => {
        this.setState({
            ...this.state,
            title: text,
            error: false
        })
    }

    render() {
        return (
            <View style={styles.viewWrapper}>
                <Card containerStyle={{padding: 0}}>
                    <View style={styles.addNewDeckCardBody}>
                        <Text style={styles.addNewDeckHeroText}>A a new deck so you can get your study on.</Text>
                        <View style={styles.addNewDeckForm}>
                            <Input
                                containerStyle={styles.addDeckInputContainer}
                                placeholder='Title'
                                inputStyle={styles.addNeDeckInputStyles}
                                label={<Text style={styles.addDeckInputLabel}>Deck Title:</Text>}
                                value={this.state.title}
                                onChangeText={title => this.handleTextChange(title)}
                            />

                            {this.state.error &&
                            <View style={styles.addDeckErrorMessageContainer}>
                                <Icon
                                    name='error-outline'
                                    size={36}
                                    style={styles.errorMessageIcon}
                                    color='#db684d'
                                    type='material'
                                />
                                <Text style={styles.errorMessageText}>Your flashcard deck must have a title</Text>
                            </View>
                            }
                        </View>
                    </View>

                    <View style={[styles.buttonRow]}>
                        <TouchableOpacity
                            onPress={() => {this.submitDeck()}}
                        >
                            <View style={styles.addNewDeckSubmitButtons}>
                                <Icon
                                    name='content-save'
                                    size={18}
                                    type='material-community'
                                    color='#1597af'
                                    style={styles.singleDeckBtnAddCardBtnViewIcon}/>
                                <Text style={styles.addNewDeckSubmitButtonText}>Save Deck</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
        );
    }
}

export default connect(null, { saveDeck })(AddDeck);