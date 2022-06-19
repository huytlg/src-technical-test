import React from "react";
import style from "./style.css";

const WorkingDay = (props) => {
    return (
        <div className="wd__container">
            <div className="wd__title">
                <h2 className="wd__header">{ props.DAY }</h2>
                <p className="wd__weekday-short">{ props.WEEKDAY_SHORT }</p>
                {
                    props.schedule.map((item, index) => {
                        <div className="wd__box">

                        </div>
                    })
                }
            </div>


        </div>
    )
};

export default WorkingDay