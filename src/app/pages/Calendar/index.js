import React, { useState, useEffect } from "react";
import WorkingDay from "./WorkingDay";
import appConstants from "../../utils/appConstants";
import { getDaysInMonth, parseDate, range } from "../../utils/commonFuncs";
import style from "./style.css";

const Calendar = () => {

    const [activeYear, setActiveYear] = useState(null);
    const [activeMonth, setActiveMonth] = useState(null);
    const [workingDays, setWorkingDays] = useState([]);
    const [workingTimes, setWorkingTimes] = useState([]);

    useEffect(() => {
        setActiveYear(2022);
        setActiveMonth(6);

        // Set Working Time:
        let arrWT = []
        const timeRange = range(appConstants.WORKING_TIME.START, appConstants.WORKING_TIME.END, 100);
        for (let i = 0; i < timeRange.length; i++) {
            const value = timeRange[i];

            const crr = value/ 100;
            const suffix = value < 1200 ? "AM" : "PM";

            arrWT.push({
                TIME_CORE: value,
                DETAIL: `${crr < 12 ? crr : crr - 12 }:00 ${suffix}`
            });

            if (crr === 18) continue;

            for (let j = 0; j < appConstants.WORKING_TIME.PERCENT.length; j++) {
                arrWT.push({
                    TIME_CORE: value,
                    DETAIL: `${crr < 12 ? crr : crr - 12 }:${60 * appConstants.WORKING_TIME.PERCENT[j]} ${suffix}`
                });
            }
        }
        setWorkingTimes(arrWT);
    }, [])

    useEffect(() => {
        // Set Working Day
        let arrWD = []
        const days = getDaysInMonth(activeYear, activeMonth);
        for (let i = 0; i < days; i++) {
            arrWD.push(parseDate(activeYear, activeMonth - 1, i + 1))
        }
        setWorkingDays(arrWD);
    }, [activeMonth, activeYear]);

    return (
        <div className="container">
            <div className="calendar__main">
                <div className="calendar__date">
                    <h1 className="calendar__date-header"></h1>
                    <p className="calendar__date-detail"></p>
                </div>

                <div className="calendar__weekdays">
                    { workingDays.map((item, index) => (
                        <WorkingDay { ...item } schedule={workingTimes} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Calendar;