import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

var SunCalc = require('suncalc');

export default class DatePicker extends Component {
    state = {
        suncalc: this.props.suncalc,
        sunriseHour: null,
        sunriseMin: null,
        sunsetHour: null,
        sunsetMin: null,
        date: this.props.date
    }
    
    componentDidMount() {
        console.log(this.state)
        this.suncalcUpdate()
    }
    
        componentDidUpdate() {
            
        }
        
        suncalcUpdate() {
            console.log("UDPDSAPPDSA    ")
            const suncalc = SunCalc.getTimes(this.props.date, this.props.latitude, this.props.longitude);
            this.setState({ suncalc })
            const sunrise = suncalc.sunrise
            this.setState({ sunriseHour: sunrise.getHours(), sunriseMin: sunrise.getMinutes() })
            const sunset = suncalc.sunset
            this.setState({ sunsetHour: sunset.getHours(), sunsetMin: sunset.getMinutes() })
        }
        
        handleDateChange(e) {
            this.setState({date: e.target.value})
            /* this.props.handleCalendarChange(); */
        }
        
        render() {
        const { sunriseHour, sunriseMin, sunsetHour, sunsetMin } = this.state
        console.log(this.state)
        console.log(this.props)
        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Pick a date"
                            value={this.props.date}
                            onChange={this.props.handleCalendarChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    
                    </MuiPickersUtilsProvider>
                <div >
                    
                <Slider
                    style={sliderStyle}
                    defaultValue={12}
                    
                    aria-labelledby="discrete-slider-always"
                    valueLabelDisplay="on"
                    step={1}
                    
                    min={sunriseHour}
                    max={sunsetHour}
                    onChange={this.props.handleHourChange}
                    />
                <Slider
                    style={sliderStyle}
                    defaultValue={30}
                    
                    aria-labelledby="discrete-slider-always"
                    valueLabelDisplay="on"
                    step={5}
                    
                    min={sunriseMin ? sunriseMin : 0}
                    max={sunsetMin ? sunsetMin : 59}
                    onChange={this.props.handleMinuteChange}
                    />
                </div>
            </div>
        )
    }
}

const sliderStyle = {
    /* marginLeft: '10px',
    marginRight: '10px' */
}