import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from "react-native";
import {Text, Image, Icon, Overlay} from "react-native-elements";
import { StackActions } from '@react-navigation/native';
import styles from '../utils/styles';
import {deleteDeck} from "../store/actions/actions-Decks";

class SingleDeckView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }


    componentDidMount() {
        this.props.navigation.setOptions({title: this.props.deck.title});

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
                    <TouchableOpacity
                        style={styles.headerButtons}
                        onPress={() => this.toggleOverlay()}>
                        <Icon
                            name='settings'
                            size={24}
                            type='material-community'
                        />
                    </TouchableOpacity>
                </View>
            )
        });
    }

    deleteDeck = (id) => {
        const { navigation, dispatch } = this.props;
        dispatch(deleteDeck(id)).then((result) => {
            console.log("deleteDeck dispatch result: ", result);
            this.toggleOverlay();
            navigation.dispatch(StackActions.popToTop())
        });
    }

    goToHome = () => {
        const { navigation } = this.props;
        navigation.dispatch(StackActions.popToTop());
    }

    toggleOverlay = () => {
        this.setState({
            visible: !this.state.visible
        })
    };

    addCard = (deck) => {
        this.props.navigation.navigate('AddCard', {
            deck: deck,
        });
    }

    startQuiz = (deck) => {
        this.props.navigation.navigate('Quiz', {
            deck: deck,
        });
    }

    render() {
        const { deck } = this.props;
        console.log("SingleDeckView props: ", this.props);

        if (!deck) {
            return (
                <View>
                    <Text>Nothing to see here</Text>
                </View>
            )
        }

        return (
            <View>
                <Image
                    source={{uri: deck.deckImgUri}}
                    style={styles.singleDeckImage}
                />
                <View style={styles.viewWrapper}>
                    <View>
                        <Text>Cards: {deck.questions.length}</Text>
                    </View>
                    <View style={styles.singleDeckBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.addCard({deck})}
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
                            onPress={() => this.startQuiz({deck})}
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
                <Overlay
                    isVisible={this.state.visible}
                    onBackdropPress={this.toggleOverlay}
                    overlayStyle={{}}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 22,
                                textAlign: 'center',
                                borderBottomWidth: 1,
                                borderBottomColor: '#ccc',
                                marginBottom: 8,
                                paddingBottom: 4
                            }}
                        >Options</Text>
                        <Text>Would you like to delete this deck?</Text>
                        <View style={styles.deleteDeckBtnRow}>
                            <TouchableOpacity
                                onPress={() => {this.deleteDeck(this.props.deck.id)}}
                            >
                                <Text style={styles.submitButtons}>DELETE</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {this.toggleOverlay()}}
                            >
                                <Text style={styles.submitButtons}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Overlay>
            </View>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const deckId = ownProps.route.params.deckId;
    const deck = state['decks'][deckId] !== undefined ? state['decks'][deckId] : ownProps.route.params.deck;

    return {
        deck
    };
};

export default connect(mapStateToProps)(SingleDeckView);