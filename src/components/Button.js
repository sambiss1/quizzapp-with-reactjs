import React from 'react'

export const Button = ({ buttonText, cname }) => {
    return (
        <>
            <button
                className={cname}
            >
                {buttonText}

            </button>
        </>
    )
}

export default Button