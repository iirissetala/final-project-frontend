import React, { Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import PlanData from './singleplan/PlanData'
import {AuthContext } from "../context/Authcontext";
import { plans } from "./EditPreviousPlan";
import PlanModal from './PlanModal';


class Plan extends Component {

    state = {
        plans: []
    };

    AuthContext = this.context;

    componentDidMount(props) {
        this.context.getData("plans/" ).then(res => {
            console.log(res)
            this.setState({plans: res})})
        console.log("componentDidMount: ", this.state.plans)
    };


    render() {
        console.log("Renderissa: ", this.state.plans);

        return (

                <div>
                    <div style={{ marginTop: 30, padding: 40 }}>
                        <Grid container spacing={1} justify="center">
                            <PlanModal/>
                        </Grid>
                    </div>

                    <div style={{ marginTop: 20, padding: 30 }}>
                        <Grid container spacing={6} justify="center">

                            <h2>Here you can check and modify your previous plans:</h2>
                            {plans && <PlanData plans ={this.state.plans}/> }

                        </Grid>
                    </div>
                </div>

        );
    }
}

export default Plan;

Plan.contextType = AuthContext;



/*
    const classes = useStyles();

const useStyles = makeStyles(theme => ({
    link: {
        color: "inherit",
        variant: "body2"
    },
}));*/
