import React, {Component} from 'react';
import {AuthContext} from "../context/Authcontext";
import ImageDropZone from "./ImageDropZone";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Redirect} from "react-router-dom";

class AddReferencePictures extends Component {
    state= {
            id: this.props.location.state.plan.id,
            referencePictures: '',
            redirect: false
    };

    setRedirect = () => {this.setState({redirect: true})}
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/plan' />
        }
    }

    AuthContext = this.context;

    referencePicChange = (event) => {this.setState({referencePictures: this.state.referencePictures.push(event.target.files[0])})};

    addPictures = (event) => {
        event.preventDefault();
        console.log(this.state.referencePictures);
        this.context.addReferencePictures(this.state.id, this.state.referencePictures);
        this.setRedirect();
        //updatePlan(this.state.id, this.state);
        console.log('addPics', this.state.id, this.state.referencePictures);
    };
    render() {
        return (
            <div>
                <Box borderRadius="borderRadius" {...boxWrapper}>
                    <div style={styling.buttonClose} style={{display: "flex"}} >
                        {this.renderRedirect()}
                        <Button  variant="outlined" size="small" style={{marginLeft:"auto"}} onClick={this.setRedirect}>X</Button>
                    </div>
                    <div style={styling.menu}>
                        <h3>Edit your plan details</h3>
                    </div>
                    <div
                        className={styling.imagedrop}
                        value={this.state.referencePictures}
                        onChange={this.referencePicChange}>
                        <p>You can upload max. 5 reference pictures in your plan</p>
                        <ImageDropZone/>

                    </div>
                    <div style={styling.button} style={{display: "flex"}}>
                        <Button size="small" color="default" variant="outlined" onClick={this.addPictures}>
                            Save
                        </Button>

                    </div>

                </Box>
            </div>

        );
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
    }, button: {
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
    imagedrop: {
        /* marginLeft: theme.spacing(1),
         marginRight: theme.spacing(1),*/
        width: '75%',
    }
};

const boxWrapper = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '75%' },
};

AddReferencePictures.contextType = AuthContext;
export default AddReferencePictures;

