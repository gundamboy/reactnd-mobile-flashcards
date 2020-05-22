import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from "react-native";
import {Text, Icon, Overlay, Card, Badge} from "react-native-elements";
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
        const enableQuiz =  deck.questions.length > 0;
        console.log("SingleDeckView props: ", this.props);
        console.log("SingleDeckView enableQuiz: ",enableQuiz);

        if (!deck) {
            return (
                <View>
                    <Text>Nothing to see here</Text>
                </View>
            )
        }

        return (
            <View>
                <View style={styles.viewWrapper}>
                    <Card containerStyle={{padding: 0}}>
                        <View style={styles.singleDeckCardBody}>
                            <Text style={styles.singleDeckTitle}>{deck.title}</Text>
                            <Badge badgeStyle={styles.singleDeckCardBadge} value={<Text style={styles.singleDeckCardBadgeText}>{deck.questions.length} cards</Text>} />
                        </View>

                        <View style={[styles.singleDeckBtnRow, styles.buttonRow]}>
                            <View style={[styles.singleDeckButtonWrap, styles.singleDeckBtnAddCardView]}>
                                <TouchableOpacity
                                    onPress={() => this.addCard({deck})}
                                >
                                    <View style={styles.singleDeckButtons}>
                                        <Icon
                                            name='plus-circle'
                                            size={18}
                                            type='material-community'
                                            color='#1597af'
                                            style={styles.singleDeckBtnAddCardBtnViewIcon}/>

                                        <Text style={styles.singleDeckBtnAddCardBtnIconText}>Add A Card</Text>
                                    </View>

                                </TouchableOpacity>
                            </View>

                            {enableQuiz
                                ?
                                <View style={styles.singleDeckButtonWrap}>
                                    <TouchableOpacity
                                        onPress={() => this.startQuiz({deck})}
                                    >
                                        <View style={styles.singleDeckButtons}>
                                            <Icon
                                                name='school'
                                                size={18}
                                                type='material-community'
                                                color='#1597af'
                                                style={styles.singleDeckBtnAddCardBtnViewIcon}/>
                                            <Text style={styles.singleDeckBtnAddCardBtnIconText}>Start Quiz</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={styles.singleDeckButtonWrap}>
                                    <Text style={styles.singleDeckAddQuestionText}>Add a card to take a quiz!</Text>
                                </View>
                            }
                        </View>
                    </Card>
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