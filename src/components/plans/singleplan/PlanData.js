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
// const picUrl = "/" + this.props.plans.referencePictures[0].url;

class PlanData extends Component {

    getImage = () =>{
        return this.props.plans.referencePictures ? "/"+this.props.plans.referencePictures[0].url : "/liskodisko.jpg"
    };


    render() {

        return (
            <div>
                {/*<NewPlan addNew={this.props.addNew}/>*/}
{/*
                {plandata}
*/}


                {this.props.plans.map(plan => (
                    <Grid item key={plan.header}>

                        <Card>
                            <Link href={planUrl + plan.id}  color={"inherit"} variant={"body2"}>
                                <CardActionArea className={plan.id}>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={this.getImage()}
                                        title="Contemplative Reptile"

                                    />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">{plan.header}</Typography>
                                        <Typography component="h3">{plan.date}</Typography>
                                        <Typography component="h3">{"ID: " + plan.id}</Typography>

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

/*
id: this.props.id,
    header: this.props.header,
    date:this.props.date,
    location:this.props.location,
    latitude: this.props.latitude,
    longitude: this.props.longitude,
    participants:this.props.participants,
    description:this.props.description,
    notes:this.props.notes,
    referencePictures: this.props.referencePictures*/
