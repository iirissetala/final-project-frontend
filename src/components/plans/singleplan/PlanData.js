import React, {Component} from 'react';
import  {plans} from '../EditPreviousPlan';
import NewPlan from '../NewPlan';
import {Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";


const planUrl = '/plans/';

class PlanData extends Component {

    render() {

        return (
            <div>

        return (
            <div>
                {this.props.plans.map(plan => (

                    <Grid item key={plan.header}>
                        <Card>
                            <Link href={planUrl + plan.id}  color={"inherit"} variant={"body2"}>
                                <CardActionArea className={plan.id}>
                                    <CardMedia
                                        component="img"
                                        alt="Coverphoto"
                                        height="140"
                                        image= {plan.referencePictures.length ? "/"+plan.referencePictures[0].url : "/liskodisko.jpg"}
                                        title="Contemplative Reptile"

                                    />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">{plan.header}</Typography>
                                        <Typography component="h3">{plan.date}</Typography>
                                        <Typography component="p">{plan.description}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>

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
            </div>
        );
    }
}

export default PlanData;