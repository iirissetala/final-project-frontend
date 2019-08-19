import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BasicDateTimePicker from './DateTime';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <div>
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-name"
                label="Project name"
                className={classes.textField}
                placeholder="Project name"
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
            />


            <TextField
                id="outlined-textarea"
                label="Participants"
                placeholder="Participants"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />

            <TextField
                id="outlined-textarea"
                label="Notes"
                placeholder="Notes"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />

        </form>
        {/*<BasicDateTimePicker/>*/}
        </div>
    );
}