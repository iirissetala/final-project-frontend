import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import TextField from '@material-ui/core/TextField/index';
import BasicDateTimePicker from './DateTime';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import Button from '@material-ui/core/Button/index';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        // direction: 'row',
        // justify: 'center',
        // alignItems: 'center'
        marginTop: 20,
        padding: 30
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

export default function OutlinedTextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        // name: 'Cat in the Hat',
        // age: '',
        // multiline: 'Controlled',
        // currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <div>
            <div className="buttons" style={{padding: 30}}>
                <i className="material-icons">clear</i>
                <i className="material-icons">highlight_off</i>
            </div>
        <form className={classes.container}
              noValidate autoComplete="off">
    return (
        <div>
        <form className={classes.container} noValidate autoComplete="off">

            <i className="material-icons">clear</i>
            <i className="material-icons">highlight_off</i>

            <TextField
                id="outlined-name"
                label="Project name"
                className={classes.textField}
                placeholder="Project name"
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
                float="center"
            />

            <TextField
                id="outlined-participants"
            />

            <TextField
                id="outlined-textarea"
                label="Participants"
                placeholder="Participants"
                // onChange={handleChange('participants')}
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
                float="center"
            />

            <TextField
                id="outlined-notes"
            />

            <TextField
                id="outlined-textarea"
                label="Notes"
                placeholder="Notes"
                // onChange={handleChange('notes')}
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
                float="center"

            />

        <BasicDateTimePicker/>
        </form>
            />

        </form>
        <BasicDateTimePicker/>

            <Button variant="outlined" size="small" color="grey" className={classes.button}>
                Delete
                <DeleteIcon className={classes.rightIcon} />
            </Button>

            <Button variant="outlined" size="small" className={classes.button}>
                Save
                <SaveIcon className={clsx(classes.rightIcon, classes.iconSmall)} />
            </Button>
        </div>

                <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Save
            </Button>

        </div>
    );
}