import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import TextField from '@material-ui/core/TextField/index';
import BasicDateTimePicker from './DateTime';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import Button from '@material-ui/core/Button/index';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageDropZone from "./ImageDropZone";
import Box from '@material-ui/core/Box';
import ServiceTest, {addNew} from './ServiceTest';
import Map from '../map/Map';
import PlanModal from './PlanModal';

/*
https://react-pdf.org/advanced
https://material-ui-pickers.dev/api/DateTimePicker
*/

/*Määritellään tyylit lomakkeen eri osille*/
const useStyles = makeStyles(theme => ({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        direction: 'row',
        justify: 'center',
        margin: 'normal',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '75%',
    },
    button: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(1),
        padding: 7,
    },
    buttonClose: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: 3,
    },
    menu: {
        width: 300,
        alignItems: 'left',
        marginLeft: theme.spacing(2),
    },
    calendar: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(3),
        width:'75%',
    },
    imagedrop: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width:'75%',
    },
    map: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '75%',
    },
}));


/*borderit formia varten, joka on wrapattu Box elementtiin*/
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

export default function OutlinedTextFields(props) {

    const classes = useStyles();
    /*asetetaan vastaanottavat parametrit, jotka käyttäjä täyttää
    * päivämäärä käsitellään muodossa: 2019-09-02T06:30:00
    */
     const [values, setValues] = React.useState({
         header:'',
         date:'',
         location:'',
         coordinates:[],
         latitude:'',
         longitude:'',
         description:'',
         participants:'',
         notes: '',
         referencephotos:[],
     });



    const handleChange = header => event => {
        setValues({ ...values, [header]: event.target.value});
    };
    const handleChangeTwo = (e) => {
        setValues({...values, referencephotos: [...values.referencephotos, e.target.files[0]]});
        console.log(values.referencephotos)
    };
    const handleCoordinates = header => event => {
        console.log("handleCoordinates", header, ":", event.target);
        setValues({...values, longitude: event.target.longitude, latitude: event.target.latitude, coordinates: event.target});
        console.log("uudet arvot: ", event.target.latitude, event.target.longitude);
    }


    /*kun käyttäjä klikkaa 'save' buttonia, formin tiedot lähetetään kohti tietokantaa
    * ja samalla tyhjennetään formi kun tiedot on lähetetty, modaali suljetaan tallennuksen yhteydessä*/
    const sendData = (event) => {
        event.preventDefault();
        addNew(values);
        clearData();
    };
    /*Tyhjennetään data ja suljetaan modaali*/
    const clearData = (event) => {
        setValues({header:'', date:'', location:'', description:'', participants:'', notes: '', image1:''});
        props.handleClose();
    };

    return (
        <div>

        <Box borderRadius="borderRadius" {...boxWrapper}>
            <div className={classes.buttonClose} style={{display: "flex"}} >
                <Button  variant="outlined" size="small" style={{marginLeft:"auto"}} onClick={clearData}>X</Button>
            </div>
            <div className={classes.menu}>
                <h3>Make a new plan!</h3>
            </div>


            <form className={classes.container} noValidate autoComplete="off">

            <TextField
                id="outlined-name"
                label="Photoshoot name"
                className={classes.textField}
                placeholder="Project name"
                value={values.header}
                onChange={handleChange('header')}
                margin="normal"
                variant="outlined"
                float="center"
            />
            <TextField
                id="outlined-description"
                label="Description"
                placeholder="Description"
                value={values.description}
                onChange={handleChange('description')}
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
                float="center"
                rows="4"
            />

            <TextField
                id="outlined-participants"
                label="Participants"
                placeholder="Participants"
                value={values.participants}
                onChange={handleChange('participants')}
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
                float="center"
                rows="4"
            />
            <TextField
                id="outlined-notes"
                label="Notes"
                placeholder="Notes"
                value={values.notes}
                onChange={handleChange('notes')}
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
                float="center"
                rows="10"
            />
            <TextField
                id="outlined-location"
                label="Photoshoot location"
                className={classes.textField}
                placeholder="Project name"
                value={values.location}
                onChange={handleChange('location')}
                margin="normal"
                variant="outlined"
                float="center"
            />
            <div className={classes.map} style={mapWrapper}>
                <p>You can also pinpoint your planned location on map </p>
                <Map width={'65vw'} height={'50vh'} value={values.coordinates}
                onChange={handleCoordinates('coordinates')}
                     handleCoordinates={handleCoordinates('coordinates')} />


            </div>

            <div
                className={classes.calendar}
                value={values.date}
                onChange={handleChange('date')}>
                <BasicDateTimePicker/>
            </div>
                <div
                    className={classes.imagedrop}
                    value={values.referencephotos}
                    onChange={handleChangeTwo}>
                    <p>You upload max. 5 reference pictures in your plan</p>
                    <ImageDropZone/>
                </div>
        </form>

            <div className={classes.button} style={{display: "flex"}}>
            <Button variant="outlined" size="small" className={classes.button} style={{marginLeft:"auto"}}  onClick={clearData}>
                Delete
                <DeleteIcon className={classes.rightIcon} />
            </Button>
            <Button variant="outlined" size="small" className={classes.button} style={{marginLeft:"auto"}} onClick={sendData}>
                Save
                <SaveIcon className={clsx(classes.rightIcon, classes.iconSmall)} />
            </Button>
            </div>
        </Box>
        </div>
    );
}