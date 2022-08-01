import React from 'react';
import { useNavigate, useParams } from "react-router-dom"

export const ResultPage = () => {
    let username = localStorage.getItem('username')
    let usermail = localStorage.getItem('usermail')
    let score = 0
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

                    <p>
                        {score}
                    </p>

                </div>

            </div>

        </>
    )
}

export default ResultPage