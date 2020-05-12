import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from "react-native";
import { Image, Button, Icon } from "react-native-elements";
import styles from '../utils/styles';

class SingleDeckView extends Component {
    componentDidMount() {
        this.props.navigation.setOptions({title: this.props.deck.title});
    }

    addCard = (id) => {
        this.props.navigation.navigate('AddCard', {deckId: id});
    }

    startQuiz = (deck) => {
        this.props.navigation.navigate('Quiz', {deck:deck});
    }

    render() {
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
                            onPress={() => this.addCard(this.props.deck.id)}
                        >
                            <Button
                                title="Add A Card"
                                type="clear"
                                icon={
                                    <Icon
                                        name='plus-circle'
                                        size={15}
                                        type='material-community'/>
                                }
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.startQuiz(this.props.deck)}
                        >
                            <Button
                                title="Start Quiz"
                                type="clear"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {

    return {
        deck: ownProps.route.params.deck
    };
}

export default connect(mapStateToProps)(SingleDeckView);