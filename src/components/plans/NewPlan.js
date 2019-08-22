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
import Plans from "./Plan";
import ServiceTest, {addNew} from './ServiceTest';
import Map from '../map/Map';

/*
https://react-pdf.org/advanced
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
        marginRight: theme.spacing(1),
        padding: 10,
        alignItems: 'right',
    },
    menu: {
        width: 300,
        alignItems: 'left',
    },
    calendar: {
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
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '75%',
    }
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
}

export default function OutlinedTextFields() {

    const classes = useStyles();
    /*asetetaan vastaanottavat parametrit, jotka käyttäjä täyttää
    * päivämäärä käsitellään muodossa: 2019-09-02T06:30:00
    */
     const [values, setValues] = React.useState({
         header:'',
         date:'',
         location:'',
         description:'',
         participants:'',
         notes: '',
         referencepictures:'',
     });
    const handleChange = header => event => {
        setValues({ ...values, [header]: event.target.value });
    };

    /*kun käyttäjä klikkaa 'save' buttonia, formin tiedot lähetetään kohti titokantaa
    * ja samalla tyhjennetään formi kun tiedot on lähetetty*/
    const sendData = (event) => {
        event.preventDefault();
        addNew(values);
        clearData();
    };

    const clearData = (event) => {
        setValues({header:'', date:'', location:'', description:'', participants:'', notes: '', referencepictures:''});
    };


    return (
      <div>
        <Box borderRadius="borderRadius" {...boxWrapper}>

            <div className={classes.menu}>
                <h3>Make a new plan!</h3>
            </div>
            <div className={classes.button} >
                <i className="material-icons">highlight_off</i>
            </div>

            <form className={classes.container} noValidate autoComplete="off">

            <TextField
                id="outlined-name"
                label="Project header"
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
                label="Project location"
                className={classes.textField}
                placeholder="Project name"
                value={values.location}
                onChange={handleChange('location')}
                margin="normal"
                variant="outlined"
                float="center"
            />
            <div className={classes.map} style={mapWrapper}>
                <p>MAP COMES --HERE--  tää muotoilu pitää fiksaa :( </p>
                <Map />
            </div>

            <div
                className={classes.calendar}
                value={values.date}
                onChange={handleChange('date')}>
                <BasicDateTimePicker/>
            </div>
                <div
                    className={classes.imagedrop}
                    value={values.referencepictures}
                    onChange={handleChange('referencepictures')}>
                    <ImageDropZone/>
                </div>
        </form>

            <div className={classes.button}>
            <Button variant="outlined" size="small" className={classes.button} onClick={clearData}>
                Delete
                <DeleteIcon className={classes.rightIcon} />
            </Button>
            <Button variant="outlined" size="small" className={classes.button} onClick={sendData}>
                Save
                <SaveIcon className={clsx(classes.rightIcon, classes.iconSmall)} />
            </Button>
            </div>
        </Box>

            <Plans/>
        </div>





    );
}