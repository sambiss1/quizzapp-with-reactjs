import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa"
import { BsCheckCircle, BsXCircle } from "react-icons/bs"

export const ResultPage = () => {
    let username = localStorage.getItem('username')
    let usermail = localStorage.getItem('usermail')
    const score = localStorage.getItem('score')
    console.log(score)
    let navigate = useNavigate()
    return (
        <>
            <div
                className="container">

                <div>
                    <h3>
                        {username}
                    </h3>
                    <h3>
                        {usermail}
                    </h3>
                    <div
                        className="result__icon">
                        {
                            score > 7 ?
                                <BsCheckCircle
                                    className="icon--success"
                                /> :
                                <BsXCircle
                                    className="icon--failed"
                                />
                        }
                    </div>
                    <p>
                        {score}
                    </p>

                    <button
                        onClick={() => {
                            localStorage.removeItem("username")
                            localStorage.removeItem("usermail")
                            navigate("../", { replace: true })
                            window.location.reload(false)
                        }}
                        className="back__home--button"
                    >
                        Accueil
                    </button>

                </div>

            </div>

        </>
    )
}

export default ResultPage