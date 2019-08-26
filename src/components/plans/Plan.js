import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { plans } from "./PreviousPlan";
import PlanModal from './PlanModal';


function Plans(props) {

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

                {plans.map(plan => (
                    <Grid item key={plan.header}>

                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={plan.referencePictures}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">{plan.header}</Typography>
                                    <Typography component="h3">{plan.date}</Typography>
                                    <Typography component="p">{plan.description}</Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions>
                                <Button size="small" color="default" variant="outlined">
                                    Share
                                </Button>
                                <Button size="small" color="default" variant="outlined">
                                    Modify
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    </div>
    );
}

export default Plans;