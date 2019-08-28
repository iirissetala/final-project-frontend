import React, {Component} from 'react'
import {AuthContext} from "../context/Authcontext";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import Map from "../map/Maptest";
import ImageDropZone from "./ImageDropZone";
import DeleteIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { makeStyles } from '@material-ui/core/styles/index';
import TextField from '@material-ui/core/TextField/index';
import BasicDateTimePicker from './DateTime';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import Button from '@material-ui/core/Button/index';
// import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import ServiceTest, {addNew} from './ServiceTest';
import {Redirect} from "react-router-dom";


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
    dateChange = (event) => {this.setState({date: event.target.value})};
    locationChange = (event) => {this.setState({location: event.target.value})};
    coordinatesChange = (event) => {
        this.setState ({coordinates: event.target, longitude: event.target.value.longitude, latitude: event.target.value.latitude})};
    participantsChange = (event) => {this.setState({participants: event.target.value})};
    descriptionChange = (event) => {this.setState({description: event.target.value})};
    notesChange = (event) => {this.setState({notes: event.target.value})};
    referencePicChange = (event) => {this.setState({referencePictures: event.target.value})};

    deletePlan = () => {
        this.props.deletePlan(this.props.id)
    };

    editPlan = () => {
        this.context.updateData(this.state);
        console.log('editPlan' + this.state);
    };
    close = () => {


    };

    render (){
        console.log(this.props.location.state);
        return (
        <div>
            <p> tarkoituksen valuttaa propsit placeholdereina input lohkoihin, statet valuen arvoiksi ja Change funktiot onChange muuttujiin
                placeholder={this.props.header} value={this.state.header} onChange={this.headerChange}
            </p>
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
                        /*
                        value={values.date}

                         onChange={handleChange('date')}
                         */
                        >
                        <BasicDateTimePicker/>
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
                    {/*<Button variant="outlined" size="small" style={styling.button} style={{marginLeft:"auto"}}  onClick={this.editPlan}>
                        Delete
                        <DeleteIcon className={classes.rightIcon} />
                    </Button>
                    <Button variant="outlined" size="small" style={styling.button} style={{marginLeft:"auto"}} onClick={this.editPlan}>
                        Save
                        <SaveIcon className={clsx(classes.rightIcon, classes.iconSmall)} />
                    </Button>*/}
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
