import React from 'react'
import style from '../styles/guidelines.module.css'
const GuidelineBox = ({ Icon, heading, desc, classname }) => {
    return (
        <div className={`${style.guideline_box} ${classname}`}>
            <i><Icon /></i>
            <h4>{heading}</h4>
            <p>
                {desc}
            </p>
        </div>
    )
}

export default GuidelineBox