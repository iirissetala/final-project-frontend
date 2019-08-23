import React, { Component } from 'react'
import { Consumer, AuthContext } from "../../context/Authcontext";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Container from '@material-ui/core/Container'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './AWSSlider.css'
import 'react-awesome-slider/dist/styles.css';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        width: '75%'
    },    
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
        width: '75%',
    },    
    imagedrop: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '75%',
    }    
}));    

const boxWrapper = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '75%' },

};    


export default class SinglePlan extends Component {
    state = { data: {} }
    AuthContext = this.context;

    componentDidMount(props) {
        this.context.getData("plans/1").then(res => this.setState({data: res}))
    }    

    
    render() {
        const {id, date, description, header, location, notes, participants} = this.state.data
        console.log(this.state)
        return (
            <div><Container maxWidth="lg">
                <Paper className="root" style={sliderStyle}>
                    <AwesomeSlider cssModule={AwsSliderStyles} >
                        <div data-src="/pics/junatiimi.png" />
                        <div data-src="/pics/trump.jpg" />
                        
                        </AwesomeSlider>
                </Paper>
                        </Container> 
                
                <Grid >
                    <Typography variant="h2" component="h3">
                        <Card className="paper"><CardContent>{description}</CardContent></Card>
                    </Typography>
                </Grid>
                
                        {id} {date}  {header} {location} {notes} {participants}
                    
                    {/* <Typography variant="h5" component="h3">
                        teest
        </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
        </Typography> */}
               </div>
        )
    }    
}    

const sliderStyle = {
    marginBottom: '30px',
    justify: 'center',
    alignItems: 'center',
    maxWidth: '50 %',
    height: 'auto'
}
SinglePlan.contextType = AuthContext;


