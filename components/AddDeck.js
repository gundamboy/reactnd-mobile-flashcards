import React, {Component} from 'react';
import { connect } from 'react-redux';
import {TouchableOpacity, View} from "react-native";
import {Icon, Input, Text} from "react-native-elements";
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
            imgUri: ''
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
                        console.group("Render");
                        console.log("AddDeck saveNewDeck state: ", this.state);
                        console.log("getDeck id: ", this.state.deckId);
                        console.log("getDeck d: ", d);
                        console.log("getDeck title: ", this.state.title);
                        console.groupEnd();

                        this.props.navigation.navigate('Deck', {
                            title: this.state.title,
                            deckId: this.state.deckId,
                            deck: d,
                        });

                        this.setState({ deckId: '', title: '', imgUri: ''});
                    });
            }


        }

    }

    render() {
        return (
            <View style={styles.viewWrapper}>
                <Text style={styles.addCardHeroText}>A a new deck so you can get your study on.</Text>

                <Input
                    containerStyle={styles.addCardInputContainer}
                    placeholder='Title'
                    label={<Text style={styles.addCardInputLabel}>Deck Title:</Text>}
                    value={this.state.title}
                    onChangeText={title => this.setState({ title })}
                />

                <TouchableOpacity
                    onPress={() => {this.submitDeck()}}
                >
                    <Text style={styles.submitButtons}>Save Deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, { saveDeck })(AddDeck);