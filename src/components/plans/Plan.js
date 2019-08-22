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
import NewPlanModal from './NewPlanModal';
import UseModal from './UseModal';

import TextField from "@material-ui/core/TextField";

function Plans(props) {
    const {isShowing, toggle} = UseModal();

    return (

        <div>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Your coverphoto"
                        height="140"
                        image="https://images.unsplash.com/photo-1566410854867-0fdf0b435ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        title="Your plan cover photo"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">Make a new plan!</Typography>
                        <Typography component="p">Click Create and create a new photoshoot plan</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="default" variant="outlined" onClick={toggle}>
                        Create
                    </Button>
                    <NewPlanModal
                        isShowing={isShowing}
                        hide={toggle}/>
                </CardActions>
            </Card>

        <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={6} justify="center">
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