import { React, useState, useEffect, useRef } from 'react';

import styled from "styled-components"
import { Container } from '../components/Container';
import { Button } from "../components/Button"
import "../styles/App.css";

import questions from "../datas/questions.json"

import { Navigate, useNavigate } from "react-router-dom"

export const QuestionsPage = () => {




    // Loading questions
    questions.sort(() => Math.random() - 0.5);
    for (let i = 0; i < questions.length; i++) {
        questions[i].answerSuggested.sort(() => Math.random() - 0.5);
    };
    const [questionIndex, setQuestionIndex] = useState(0)

    // handle next question fucntion

    // Get value of selected answer 

    const handleNextQuestion = (event) => {
        event.preventDefault()
        // getAnswer()
        setQuestionIndex(questionIndex + 1)
        console.log(questionIndex + 1)
    }
    let score = 0
    const [answer, setAnswer] = useState("")
    const getAnswer = () => {

        console.log(`Answer Selected  : ${answer}`)
        if (answer === questions[questionIndex.correctAnswer]) {
            return score++
        }
        else {
            return score
        }

    }
    console.log(score);

    // Timer

    let count = 60
    const [time, setTime] = useState(60)

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
                            onChange={(val) => setAnswer(val.target.value)}
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
                        // onChange={(event) => setAnswer(event.target.value)}
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
                        // onChange={(event) => setAnswer(event.target.value)}
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
                        // onChange={(event) => setAnswer(event.target.value)}
                        />
                        <label
                            htmlFor="answser__suggested__fourth"
                        >{questions[questionIndex].answerSuggested[3]}</label>
                    </div>


                    <div>
                        <input
                            type="button"
                            value="Quitter"
                        />
                        <input
                            type="submit"
                            value="Suivant"
                        />
                    </div>

                </form>
            </div>


        </>
    )
}

export default QuestionsPage