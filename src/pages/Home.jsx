import { React, useState } from 'react';

import styled from "styled-components"
import { Container } from '../components/Container';
import { Button } from "../components/Button"
import "../styles/App.css"

import { Navigate, useNavigate } from "react-router-dom"

export const Buttons = styled.button`
    background: #028A3D;
    border: none;
    color: white;
    box-shadow: 0px 4px 4px 2px #C4C4C4;
    padding: 3% 5%;
    align-self: center;
`

export const Title = ({ title }) => {
    return (
        <>
            <h3
                className="homepage__title"
            >{title}</h3>
        </>
    )
}



export const Home = () => {

    const [gamerName, setGamerName] = useState("")
    const [gamerMail, setGamerMail] = useState("")
    let navigate = useNavigate();
    const handleStartQuiz = (event) => {


        event.preventDefault();
        console.log(gamerName);
        console.log(gamerMail);
        console.log("Test commencer")

        localStorage.setItem("username", gamerName)
        localStorage.setItem("usermail", gamerMail)

        console.log(`Local storage : ${localStorage.getItem("username")}`)
        navigate("../questions", { replace: true });
        // return <Navigate to="/questions" replace={true} />
    }
    return (
        <div>
            <div className="container">
                <Title
                    title="Javascript Quiz"
                    className="homepage__title"
                />
                <p>
                    Évaluez vos connaissances en JavaScript en répondant aux questions que nous avons spécialement sélectionnées pour vous.
                    C'est fun et c'est gratuit.
                </p>
                <form
                    className="homepage__form"
                    onSubmit={handleStartQuiz}
                >
                    <p>Nom</p>
                    <input
                        type="text"
                        placeholder="Joseph"
                        className="input__text--name"
                        id="input__name"
                        onChange={(event) => setGamerName(event.target.value)}
                    />
                    <br />
                    <p>Email</p>
                    <input
                        type="email"
                        placeholder="joseph@kinshasadigital.com"
                        className="input__text--email"
                        id="input__email"
                        onChange={(event) => setGamerMail(event.target.value)}
                    />
                    <br />

                    {/* <Button
                        buttonText="Commencer"
                        className="start__quiz--button"
                        id="start__quiz--buttons"
                    /> */}
                    <Buttons>
                        Commencer
                    </Buttons>
                </form>
            </div>
        </div>
    )
}

export default Home