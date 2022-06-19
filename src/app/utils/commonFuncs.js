export const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}

export const parseDate = (year, month, day) => {
    const date = new Date(year, month, day);
    const result = {
        DAY: day,
        MONTH: month,
        YEAR: year,
        WEEKDAY_SHORT: date.toLocaleString('default', {weekday: 'short'}),
        WEEKDAY_LONG: date.toLocaleString('default', {weekday: 'long'}),
        WORK_TIME: [],
    }

    return result
}

export const range = (start, end, step) => {
    return (
        Array.from(
            Array.from(
                Array(Math.ceil(
                    ((end + step) - start) / step
                )).keys()
            ),
            x => start + x * step
        )
    );
}