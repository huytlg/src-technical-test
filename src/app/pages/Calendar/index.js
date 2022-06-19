import React, { useState, useEffect } from "react";
import appConstants from "../../utils/appConstants";
import style from "./style.css";

const Calendar = () => {

    const [workingDay, setWorkingDay] = useState([]);
    const [workingTime, setWorkingTime] = useState([])

    useEffect(() => {



    }, [])

    return (
        <div>
            <div className="calendar__main">
                Hello Wolrd
            </div>
        </div>
    )
};

export default Calendar;