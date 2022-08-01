import { React, useState, useEffect, useRef } from 'react';

import styled from "styled-components"

import "../styles/App.css";

import questions from "../datas/questions.json";

import { useNavigate } from "react-router-dom"

export const QuestionsPage = () => {




    let navigate = useNavigate()

    // Loading questions
    // questions.sort(() => Math.random() - 0.5);
    // for (let i = 0; i < questions.length; i++) {
    //     questions[i].answerSuggested.sort(() => Math.random() - 0.5);
    // };
    const [questionIndex, setQuestionIndex] = useState(0)
    const [gamerScore, setGamerScore] = useState(0)



    // Get value of selected answer 
    const [answer, setAnswer] = useState("")

    const [buttonValue, setButtonValue] = useState("Suivant")
    const [isDisabled, setDisabled] = useState(true)



    // handle next question fucntion

    const handleNextQuestion = (event) => {
        event.preventDefault()
        const getAnswer = () => {

            console.log(`Answer Selected  : ${answer}`)
            if (answer === questions[questionIndex.correctAnswer]) {
                console.log(`Answer Selected  : ${answer}`)
                setGamerScore(gamerScore + 1)
            }
            else {
                setGamerScore(gamerScore)
            }
        }



        getAnswer()

        setQuestionIndex(questionIndex + 1)
        if (questions.length - 1) {
            navigate("../result", { replace: true })
            console.log(questionIndex + 1)
        } else {
            setQuestionIndex(questionIndex + 1)

        }


    }

    // Timer

    let count = 60;
    const [time, setTime] = useState(60);

    const timer = (e) => {
        setTime(time - 1)
        console.log(time)
    }
    useEffect(() => {
        const countTime = setInterval((e) => timer, 1000);
        return clearInterval(countTime)
    })



    return (
        <>
            <div
                className="container"
            // onLoad={startTime}
            >
                <h3>{questions[questionIndex].questionTitle}</h3>
                <div className="question__status--container">
                    <p className="question__status--number">
                        Questions {questionIndex + 1}/15
                    </p>
                    <p>{time}</p>

                </div>
                <form
                    className="questionForm"
                    onSubmit={handleNextQuestion}
                >
                    <div
                        className="answer__suggested--container"
                    >
                        <input
                            type="radio"
                            className="answer__suggested--first"
                            id="answser__suggested__first"
                            name="answer__suggested"
                            value={questions[questionIndex].answerSuggested[0]}

                            onChange={(event) => {
                                setAnswer(event.target.value)
                                setDisabled(false)
                            }}
                        />
                        <label
                            htmlFor="answser__suggested__first"
                        >{questions[questionIndex].answerSuggested[0]}</label>
                    </div>

                    <div
                        className="answer__suggested--container"
                    >
                        <input
                            type="radio"
                            className="answer__suggested--second"
                            id="answser__suggested__second"
                            name="answer__suggested"
                            value={questions[questionIndex].answerSuggested[1]}
                            onChange={(event) => {
                                setAnswer(event.target.value)
                                setDisabled(false)
                            }}
                        />
                        <label
                            htmlFor="answser__suggested__second"
                        >{questions[questionIndex].answerSuggested[1]}</label>
                    </div>


                    <div
                        className="answer__suggested--container"
                    >
                        <input
                            type="radio"
                            className="answer__suggested--third"
                            id="answser__suggested__third"
                            name="answer__suggested"
                            value={questions[questionIndex].answerSuggested[2]}
                            onChange={(event) => {
                                setAnswer(event.target.value)
                                setDisabled(false)
                            }}
                        />
                        <label
                            htmlFor="answser__suggested__third"
                        >{questions[questionIndex].answerSuggested[2]}</label>
                    </div>

                    <div
                        className="answer__suggested--container"
                    >
                        <input
                            type="radio"
                            className="answer__suggested--fourth"
                            id="answser__suggested__fourth"
                            name="answer__suggested"
                            value={questions[questionIndex].answerSuggested[3]}
                            onChange={(event) => setAnswer(event.target.value)}
                        />
                        <label
                            htmlFor="answser__suggested__fourth"
                        >{questions[questionIndex].answerSuggested[3]}</label>
                    </div>


                    <div>
                        <input
                            type="button"
                            value="Quitter"
                            className="cancel__quiz--button"
                        />
                        <input
                            type="submit"
                            value={buttonValue}
                            className="next__question--button"
                            disabled={isDisabled}
                        />
                    </div>

                </form>
            </div>


        </>
    )
}

export default QuestionsPage