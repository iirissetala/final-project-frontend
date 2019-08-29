import React, {Component} from 'react'
import {AuthContext} from "../context/Authcontext";
import Map from "../map/Map";
import ImageDropZone from "./ImageDropZone";
import TextField from '@material-ui/core/TextField/index';
import BasicDateTimePicker from './DateTime';
import Button from '@material-ui/core/Button/index';
import Box from '@material-ui/core/Box';
import ServiceTest, {deletePlan, updatePlan} from './ServiceTest';
import {Redirect} from "react-router-dom";
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


const plans = [];

class EditPreviousPlan extends Component {
/*Propsit tuodaan luokasta .singleplan/PlanData */
    state= {
        id: this.props.location.state.plan.id,
        header: this.props.location.state.plan.header,
        date:this.props.location.state.plan.date,
        location:this.props.location.state.plan.location,
        coordinates:this.props.location.state.plan.coordinates,
        latitude: this.props.location.state.plan.latitude,
        longitude: this.props.location.state.plan.longitude,
        participants:this.props.location.state.plan.participants,
        description:this.props.location.state.plan.description,
        notes:this.props.location.state.plan.notes,
        referencePictures: this.props.location.state.plan.referencePictures,
        redirect: false
    };

    setRedirect = () => {this.setState({redirect: true})}
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    AuthContext = this.context;

    headerChange = (event) => {this.setState({header: event.target.value})};
    dateChange = date => {this.setState({date: date})};
    locationChange = (event) => {this.setState({location: event.target.value})};
    coordinatesChange = (event) => {
        this.setState ({coordinates: event.target, longitude: event.target.longitude, latitude: event.target.latitude})};
    participantsChange = (event) => {this.setState({participants: event.target.value})};
    descriptionChange = (event) => {this.setState({description: event.target.value})};
    notesChange = (event) => {this.setState({notes: event.target.value})};
    referencePicChange = (event) => {this.setState({referencePictures: event.target.value})};

    deleteThisPlan = () => {
        deletePlan(this.props.location.state.plan.id);
        console.log("deletoi: " + this.props.location.state.plan.id)
    };

    editPlan = (event) => {
        event.preventDefault();
        this.context.updateData(this.state.id, this.state);
        //updatePlan(this.state.id, this.state);
        console.log('editPlan', this.props.location.state.plan);
    };
    close = () => {


    };

    render (){
        console.log(this.props.location.state);
        return (
        <div>
            <Box borderRadius="borderRadius" {...boxWrapper}>
                <div style={styling.buttonClose} style={{display: "flex"}} >
                    {this.renderRedirect()}
                    <Button  variant="outlined" size="small" style={{marginLeft:"auto"}} onClick={this.setRedirect}>X</Button>
                </div>
                <div style={styling.menu}>
                    <h3>Make a new plan!</h3>
                </div>


                <form style={styling.container} noValidate autoComplete="off">

                    <TextField
                        id="outlined-name"
                        label="Photoshoot name"
                        style={styling.textField}
                        placeholder={this.props.header}
                        value={this.state.header}
                        onChange={this.headerChange}
                        margin="normal"
                        variant="outlined"
                        float="center"
                    />
                    <TextField
                        id="outlined-description"
                        label="Description"
                        placeholder={this.props.description}
                        value={this.state.description}
                        onChange={this.descriptionChange}
                        multiline
                        style={styling.textField}
                        margin="normal"
                        variant="outlined"
                        float="center"
                        rows="4"
                    />

                    <TextField
                        id="outlined-participants"
                        label="Participants"
                        placeholder={this.props.participants}
                        value={this.state.participants}
                        onChange={this.participantsChange}
                        multiline
                        style={styling.textField}
                        margin="normal"
                        variant="outlined"
                        float="center"
                        rows="4"
                    />
                    <TextField
                        id="outlined-notes"
                        label="Notes"
                        placeholder={this.props.notes}
                        value={this.state.notes}
                        onChange={this.notesChange}
                        multiline
                        style={styling.textField}
                        margin="normal"
                        variant="outlined"
                        float="center"
                        rows="10"
                    />
                    <TextField
                        id="outlined-location"
                        label="Photoshoot location"
                        style={styling.textField}
                        placeholder={this.props.location}
                        value={this.state.location}
                        onChange={this.locationChange}
                        margin="normal"
                        variant="outlined"
                        float="center"
                    />
                    <div style={styling.map} style={mapWrapper}>
                        <p>You can also pinpoint your planned location on map </p>
                        <Map width={'65vw'} height={'50vh'} value={this.state.coordinates}
                             onChange={this.coordinatesChange}
                             handleCoordinates={this.coordinatesChange} />

                    </div>

                    <div
                        style={styling.calendar}
                        placeholder={this.props.date}
                        value={this.state.date}
                        onChange={this.dateChange}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DateTimePicker
                                ampm={false}
                                inputVariant="outlined"
                                value={this.state.date}
                                onChange={this.dateChange}
                                label="Select Date and Time"
                                showTodayButton
                                margin="normal"
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div
                        style={styling.imagedrop}
                        /*value={values.referencephotos}
                        onChange={handleChangeTwo}>*/
                        >
                        <p>You upload max. 5 reference pictures in your plan</p>
                        <ImageDropZone/>
                    </div>
                </form>

                <div style={styling.button} style={{display: "flex"}}>
                    <Button size="small" color="default" variant="outlined" onClick={this.editPlan}>
                        Save
                    </Button>
                    <Button size="small" color="default" variant="outlined" onClick={this.deleteThisPlan}>
                        Delete
                    </Button>
                </div>
            </Box>
        </div>

        )
    }
}


const styling = {
    container: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        direction: 'row',
        justify: 'center',
        margin: 'normal',
    },
    textField: {
        /*marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),*/
        width: '75%',
    },
    button: {
        /*marginBottom: theme.spacing(2),
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(1),*/
        padding: 7,
    },
    buttonClose: {
       /* marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),*/
        padding: 3,
    },
    menu: {
        width: 300,
        alignItems: 'left',
       /* marginLeft: theme.spacing(2),*/
    },
    calendar: {
       /* marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(3),*/
        width:'75%',
    },
    imagedrop: {
       /* marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),*/
        width:'75%',
    },
    map: {
       /* marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),*/
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '75%',
    },
};

const boxWrapper = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '75%' },
};

const mapWrapper= {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '75%',
};


EditPreviousPlan.contextType = AuthContext;
export default EditPreviousPlan;
