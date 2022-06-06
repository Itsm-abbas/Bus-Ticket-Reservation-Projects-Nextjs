import React from 'react'
import style from '../styles/guidelines.module.css'
import { FaStreetView, FaBusAlt, FaClock } from 'react-icons/fa'
import GuidelineBox from './GuidelineBox'
const Guidelines = () => {
    return (
        <section className={style.guideline_section}>
            <div className={style.guideline_wrapper}>
                <div>
                    <h1>
                        Follow 3 steps to <br />
                        Get Your Online Ticket
                    </h1>
                </div>
                <div className={style.guideline_boxes_wrapper}>
                    <GuidelineBox
                        Icon={FaStreetView}
                        heading={"Select Your Destination"}
                        desc={" Select Your Destination in one of the three destinations"}
                        classname={"guideline_1"} />

                    <GuidelineBox
                        Icon={FaBusAlt}
                        heading={"Select Your Seat"}
                        desc={" Select your seat number from 1 to 50"}
                        classname={"guideline_2"} />
                    <GuidelineBox
                        Icon={FaClock}
                        heading={"Select Time"}
                        desc={" Select time and date of journey"}
                        classname={"guideline_3"} />
                    {/* 
                    <div className={`${style.guideline_box} ${style.guideline_3}`}>
                        <i><FaClock /></i>

                        <h4>Select Time</h4>
                        <p>
                            Select time and date of journey
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Guidelines