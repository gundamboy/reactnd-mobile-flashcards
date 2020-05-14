import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from "react-native";
import { Text, Image, Button, Icon } from "react-native-elements";
import { NavigationAction } from "@react-navigation/native";
import styles from '../utils/styles';

class SingleDeckView extends Component {
    componentDidMount() {
        this.props.navigation.setOptions({title: this.props.deck.title});
    }

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
            </View>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const deckId = ownProps.route.params.deckId;
    const deck = state['decks'][deckId];

    return {
        deck
    };
};

export default connect(mapStateToProps)(SingleDeckView);