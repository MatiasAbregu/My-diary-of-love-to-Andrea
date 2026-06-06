import React from 'react'
import './DiaryButton.css'

export const DiaryButton = ({ img, title, onclick }) => {
    return (
        <div className='btn-diary' onClick={onclick}>
            <img src={img} />
            <label>{title}</label>
        </div>
    )
}
