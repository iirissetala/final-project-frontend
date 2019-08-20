import React, { Fragment, useState } from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

 function BasicDateTimePicker() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
                // autoOk <- halutaanko tämä?
                ampm={false}
                inputVariant="outlined"
                value={selectedDate}
                onChange={handleDateChange}
                label="Select Date and Time"
                showTodayButton
            />
        </MuiPickersUtilsProvider>

    );
}

 export default BasicDateTimePicker;