import React, {Component} from 'react';
import {Card, Text} from "react-native-elements";
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
            showQuestion: true,
        }
    }

    componentDidMount() {
        const { deck } = this.props.route.params.deck;
        this.props.navigation.setOptions({title: `${deck.title} Quiz`});
        clearLocalNotification().then(setLocalNotification);
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
            <Card>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Question {this.state.currentQuestion + 1} of {total}</Text>
                </View>

                <View style={styles.cardBodyQuiz}>
                    <View>
                        <Text style={styles.quizBodyText}>{question}</Text>
                    </View>
                </View>

                <View style={[styles.cardFooterQuiz, styles.cardButtonRowQuiz]}>
                    <TouchableOpacity
                        style={[styles.btnQuiz, styles.btnQuizAnswer]}
                        onPress={this.btnViewAnswer}
                    >
                        <Text style={styles.addCardBtnViewText}>View Answer</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        );
    }

    renderAnswer = (answer, total) => {
        return (
            <Card>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Answer for question {this.state.currentQuestion + 1}</Text>
                </View>

                <View style={styles.cardBodyQuiz}>
                    <View>
                        <Text style={styles.quizBodyText}>{answer}</Text>
                    </View>
                </View>

                <View style={[styles.cardFooterQuiz, styles.cardButtonRowQuizAnswers]}>
                    <Text>How did you do?</Text>
                    <TouchableOpacity
                        style={[styles.btnQuiz, styles.btnQuizCorrect]}
                        onPress={() => this.updateQuiz('correct', total)}
                    >
                        <Text style={styles.addCardBtnViewText}>Correct</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.btnQuiz, styles.btnQuizIncorrect]}
                        onPress={() => this.updateQuiz('incorrect', total)}
                    >
                        <Text style={styles.addCardBtnViewText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        );
    }

    renderQuizComplete = () => {
         const { deck } = this.props.route.params.deck;

        return (
            <Card>
                <View style={styles.cardHeader}>
                    <Text>Good job, you completed the quiz!</Text>
                </View>

                <View style={styles.cardBodyQuiz}>
                    <Text>You scored a {Math.round(((this.state.correct)/deck.questions.length)*100)}%</Text>
                </View>

                <View style={[styles.cardFooterQuiz, styles.cardButtonRowQuizComplete]}>
                    <TouchableOpacity
                        style={[styles.btnQuiz, styles.btnQuizAnswer]}
                        onPress={() => this.resetQuiz()}
                    >
                        <Text style={styles.addCardBtnViewText}>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnQuiz, styles.btnQuizAnswer]}
                        onPress={() => this.goHome()}
                    >
                        <Text style={styles.addCardBtnViewText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnQuiz, styles.btnQuizAnswer]}
                        onPress={() => this.backToDeck()}
                    >
                        <Text style={styles.addCardBtnViewText}>Back to deck</Text>
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