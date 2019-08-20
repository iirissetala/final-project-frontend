import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import TextField from '@material-ui/core/TextField/index';
import BasicDateTimePicker from './DateTime';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import Button from '@material-ui/core/Button/index';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageDropZone from "./ImageDropZone";
import { sizing } from '@material-ui/system';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Plans from "./Plan";


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
    },
    button: {
        marginBottom: theme.spacing(2),
        padding: 12,
        alignItems: 'left',
    },
    menu: {
        width: 300,
        alignItems: 'center',
    },

}));

/*borderit formia varten*/
const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '75%' },
};

export default function OutlinedTextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name:'',
        description:'',
        participants:'',
        notes: '',

    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    return (
      <div>
        <Box borderRadius="borderRadius" {...defaultProps}>
            <div className={classes.menu}><h3>Make a new plan!</h3></div>
            <div className={classes.button} >
                <i className="material-icons">clear</i>
                <i className="material-icons">highlight_off</i>
            </div>
            <form className={classes.container} noValidate autoComplete="off">


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
                    id="outlined-description"
                    label="Description"
                    placeholder="Description"
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
                onChange={handleChange('notes')}
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
                float="center"
                rows="10"
            />
            <BasicDateTimePicker/>
            <ImageDropZone/>
        </form>

            <Button variant="outlined" size="small" className={classes.button}>
                Delete
                <DeleteIcon className={classes.rightIcon} />
            </Button>

            <Button variant="outlined" size="small" className={classes.button}>
                Save
                <SaveIcon className={clsx(classes.rightIcon, classes.iconSmall)} />
            </Button>
        </Box>

            <Plans/>
        </div>





    );
}