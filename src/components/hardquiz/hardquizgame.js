import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Hardquiz from './hardquizQA'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

import '../quizgame/quizGame.css';

export default class Hquiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAnswer: null,
            currentIndex: 0,
            options: [],
            quizEnd: false,
            score: 0,
            disabled: true,
            timer: 15
        }
    }

    loadGame = () => {
        const { currentIndex } = this.state;
        this.setState(() => {
            return {
                question: Hardquiz[currentIndex].question,
                options: Hardquiz[currentIndex].options,
                answer: Hardquiz[currentIndex].answer
            }
        })
    }

    nextQuestion = () => {
        const { userAnswer, answer, score, currentIndex } = this.state;
        if (userAnswer === answer) {
            this.setState({
                score: score + 1
            })
        }

        this.setState({
            currentIndex: currentIndex + 1,
            userAnswer: null,
            disabled: true,
            timer: 15
        })
    }

    componentDidMount() {
        this.loadGame();
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                timer: this.state.timer - 1
            }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    checkAnswer = (answer) => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state;

        if (currentIndex !== prevState.currentIndex) {
            this.setState(() => {
                return {
                    question: Hardquiz[currentIndex].question,
                    options: Hardquiz[currentIndex].options,
                    answer: Hardquiz[currentIndex].answer
                }
            })
        }
    }

    finishCheck = () => {
        const { userAnswer, score, answer, currentIndex } = this.state;
        if (currentIndex === Hardquiz.length - 1) {
            if (userAnswer === answer) {
                this.setState({
                    score: score + 1
                })
            }
            this.setState({
                quizEnd: true
            })
        }
    }

    refreshPage = () => {
        window.location.reload(false);
    }

    render() {
        const { question, options, currentIndex, userAnswer, quizEnd, score, timer } = this.state;
        return (
            <>
                {quizEnd === false ? (
                    <Container className='gameArea d-flex justify-content-center flex-column'>
                        <Row className='d-flex justify-content-center pb-3'>
                            <Col xl={2} md={8}>
                                <Button variant='danger' size='lg' as={Link} to='/' block>
                                    Main Menu
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1 className='qArea'>{question}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>{`Question ${currentIndex + 1} of ${Hardquiz.length}`}</h3>
                            </Col>
                            <Col>
                                <h2>Score is {score} / {Hardquiz.length}</h2>
                            </Col>
                            <Col>
                                <h1>{timer} secs</h1>
                                <>
                                    {timer === 0 && currentIndex === Hardquiz.length - 1 ? (
                                        this.finishCheck()
                                    ) :
                                        timer === 0 && currentIndex !== Hardquiz.length - 1 ? (
                                            this.nextQuestion()
                                        ) :
                                            (
                                                ''
                                            )}
                                </>
                            </Col>
                        </Row>
                        
                        <Row className='d-flex justify-content-center'>
                            <Col xl={8} md={8}>
                                {
                                    options.map(option => <p className={`options ${userAnswer === option ? 'picked' : null}`} onClick={() => this.checkAnswer(option)}>{option}</p>)
                                }
                            </Col>
                        </Row>

                        { currentIndex === (Hardquiz.length - 1) ? (
                            <Row className='d-flex justify-content-center'>
                                <Col xl={4} md={8}>
                                    <Button variant='danger' size='lg' onClick={this.finishCheck} block>        {/*disabled={this.state.disabled} removed*/}
                                        Finish
                                    </Button>
                                </Col>
                            </Row>
                        ) : (
                                <Row className='d-flex justify-content-center'>
                                    <Col xl={4} md={8}>
                                        <Button variant='dark' size='lg' onClick={this.nextQuestion} block>         {/*disabled={this.state.disabled} removed*/}
                                            {console.log(score)}
                                            Next Question
                                        </Button>
                                    </Col>
                                </Row>
                            )}
                    </Container>
                ) : (
                        <Container className='endingScreen d-flex justify-content-center align-items-center flex-column'>
                            <Row className='d-flex justify-content-center'>
                                <h1>Game Over</h1>
                            </Row>
                            <Row className='d-flex justify-content-center'>
                                <h2>Score is {score} / {Hardquiz.length}</h2>
                            </Row>

                            {score <= 12 ? (
                                <Row>
                                    <Col xl={12}>
                                        <h1 className='pb-3'>Congrats at being the worst</h1>
                                        <ReactPlayer className='pb-3' volume={0.40} loop={true} playing={true} url='https://www.youtube.com/watch?v=41llBu0c2fU' />
                                    </Col>
                                </Row>
                            ) : (
                                    <h1>You are amazing!!</h1>
                                )}

                            <Row className='d-flex justify-content-center'>
                                <Col>
                                    <Button variant='danger' size='lg' as={Link} to='/' block>
                                        Main Menu
                                    </Button>
                                </Col>

                                {/* Need to work on play again btn */}
                                <Col className='d-flex justify-content-center'>
                                    <Button variant='dark' size='lg' onClick={this.refreshPage} block>
                                        Play Again
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    )
                }
            </>
        )
    }
}