import { React, useState } from 'react';

import styled from "styled-components"
import { Container } from '../components/Container';
import { Button } from "../components/Button"
import "../styles/App.css";

import questions from "../datas/questions.json"

import { Navigate, useNavigate } from "react-router-dom"

export const QuestionsPage = () => {

    const [questonIndex, setQuestionIndex] = useState(0)
    console.log(questonIndex)
    console.log(questions.map(question => question.questionTitle))

    const handleNextQuestion = (event) => {
        event.preventDefault()
        setQuestionIndex(questonIndex + 1)
        console.log(questions[questonIndex].questionTitle)
    }

    return (
        <>
            <div
                className="container">
                <h3>{questions[questonIndex].questionTitle}</h3>

                <form
                    className="questionForm"
                    onSubmit={handleNextQuestion}
                >
                    <input
                        type="radio"
                        className="answer__suggested--first"
                    />
                    <label>{questions[questonIndex].answerSuggested[0]}</label>
                    <br />
                    <input
                        type="radio"
                        className="answer__suggested--second"
                    />
                    <label>{questions[questonIndex].answerSuggested[1]}</label>
                    <br />
                    <input
                        type="radio"
                        className="answer__suggested--second"
                    />
                    <label>{questions[questonIndex].answerSuggested[2]}</label>
                    <br />
                    <input
                        type="radio"
                        className="answer__suggested--second"
                    />
                    <label>{questions[questonIndex].answerSuggested[3]}</label>
                    <br />

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