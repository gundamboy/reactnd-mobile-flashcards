import React, {Component} from 'react';
import {Card, Icon, Text} from "react-native-elements";
import {TouchableOpacity, View} from "react-native";
import styles from "../utils/styles";
import {clearLocalNotification, setLocalNotification} from "../utils/helpers";

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 0,
            correct: 0,
            incorrect: 0,
            totalQuestions: 0,
            showQuestion: false,
        }
    }

    componentDidMount() {
        clearLocalNotification().then(setLocalNotification);

        const { deck } = this.props.route.params.deck;
        this.props.navigation.setOptions({
            title: `${deck.title} Quiz`,
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

    goToHome = () => {
        this.props.navigation.navigate('Home');
    }

    updateQuiz = ( id, total ) => {
        const nextQuestionIndex = this.state.currentQuestion + 1 > total - 1 ? this.state.currentQuestion : this.state.currentQuestion + 1;

        this.setState({
            ...this.state,
            [id]: this.state[id] + 1,
            currentQuestion: nextQuestionIndex,
            showQuestion: nextQuestionIndex >= total ? false : !this.state.showQuestion,
            quizFinished: this.state.correct + this.state.incorrect === total,
        })
    }

    btnViewAnswer = () => {
        this.setState({
            ...this.state,
            showQuestion: !this.state.showQuestion
        })
    }

    resetQuiz = () => {
        this.setState({
            currentQuestion: 0,
            correct: 0,
            incorrect: 0,
            showQuestion: true,
        })
    }

    goHome = () => {
        this.props.navigation.navigate('Home');
    }

    backToDeck = () => {
        this.props.navigation.goBack();
    }

    renderQuestion = (question, total) => {
        return (
            <Card containerStyle={{padding: 0}}>
                <View style={[styles.quizQuestionTotalRow, styles.cardPaddingFix]}>
                    <Text style={styles.cardTitle}>Question {this.state.currentQuestion + 1} of {total}</Text>
                </View>

                <View style={styles.cardBodyQuiz}>
                    <View>
                        <Text style={styles.quizBodyText}>{question}</Text>
                    </View>
                </View>

                <View style={[styles.quizCardFooter, styles.buttonRow]}>
                    <TouchableOpacity
                        style={[styles.quizViewAnswerBtn]}
                        onPress={this.btnViewAnswer}
                    >
                        <Icon
                            name='sync'
                            size={18}
                            type='material'
                            color='#1597af'
                            style={styles.quizViewAnswerIcon}/>
                        <Text style={styles.quizButtonText}>View Answer</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        );
    }

    renderAnswer = (answer, total) => {
        return (
            <Card containerStyle={{padding: 0}}>
                <View style={[styles.quizQuestionTotalRow, styles.cardPaddingFix]}>
                    <Text style={styles.cardTitle}>Answer for question {this.state.currentQuestion + 1}</Text>
                </View>

                <View style={styles.cardBodyQuiz}>
                    <View>
                        <Text style={styles.quizBodyText}>{answer}</Text>
                    </View>
                </View>

                <View style={[styles.quizCardFooter, styles.buttonRow]}>
                    <Text style={styles.quizFooterText}>How did you do?</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={[styles.quizAnswerButton]}
                            onPress={() => this.updateQuiz('correct', total)}
                        >
                            <Icon
                                name='check'
                                size={18}
                                type='material-community'
                                color='#1597af'
                                style={styles.quizViewAnswerIcon}/>
                            <Text style={[styles.quizButtonText, styles.btnQuizCorrect]}>Correct</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.quizAnswerButton]}
                            onPress={() => this.updateQuiz('incorrect', total)}
                        >
                            <Icon
                                name='close'
                                size={18}
                                type='material'
                                color='#db684d'
                                style={styles.quizViewAnswerIcon}/>
                            <Text style={[styles.quizButtonText, styles.btnQuizIncorrect]}>Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        );
    }

    renderQuizComplete = () => {
         const { deck } = this.props.route.params.deck;

        return (
            <Card containerStyle={{padding: 0}}>
                <View style={[styles.quizQuestionTotalRow, styles.cardPaddingFix]}>
                    <Text style={styles.cardTitle}>Good job, you completed the quiz!</Text>
                </View>

                <View style={styles.cardBodyQuiz}>
                    <Text style={styles.quizBodyText}>You scored a {Math.round(((this.state.correct)/deck.questions.length)*100)}%</Text>
                </View>

                <View style={[styles.quizCompleteCardFooter, styles.buttonRow]}>
                    <TouchableOpacity
                        style={[styles.quizCompleteButton]}
                        onPress={() => this.resetQuiz()}
                    >
                        <Text style={styles.quizButtonText}>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.quizCompleteButton, styles.quizCompleteHomeButton]}
                        onPress={() => this.goHome()}
                    >
                        <Text style={[styles.quizButtonText]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.quizCompleteButton]}
                        onPress={() => this.backToDeck()}
                    >
                        <Text style={styles.quizButtonText}>Back to deck</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        )
    }

    render() {
        const { deck } = this.props.route.params.deck;
        const total = deck.questions.length;
        const { question, answer } = deck.questions[this.state.currentQuestion];

        if ( deck ) {
            if (this.state.correct + this.state.incorrect === total) {
                return (
                    <View>
                        {this.renderQuizComplete()}
                    </View>
                );
            }

            if (!this.state.showQuestion && this.state.correct + this.state.incorrect !== total) {
                return (
                    <View>
                        {this.renderAnswer(answer, total)}
                    </View>
                );
            }

            if (this.state.showQuestion && this.state.correct + this.state.incorrect !== total) {
                return (
                    <View>
                        {this.renderQuestion(question, total)}
                    </View>
                );
            }
        } else {
            return (
                <View>
                    <Text>No deck yo!</Text>
                </View>
            );
        }
    }
}

export default Quiz;