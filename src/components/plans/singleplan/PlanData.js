import React, {Component} from 'react';
import EditPreviousPlan, {plans} from '../EditPreviousPlan';
import NewPlan from '../NewPlan';
import {Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";



const planUrl = '/plans/';

class PlanData extends Component {

    render() {
        console.log(this.props.plans)
        return (
            <div>
                {this.props.plans.map(plan => (

                    <Grid item key={plan.header} style={{maxWidth: '600px'}}>
                        <Card style={cardStyle}>
                            <Link to={{pathname:'/plans/'+ plan.id, state:{plan}}}  color={"inherit"} variant={"body2"}>
                                <CardActionArea className={plan.id}>
                                    <CardMedia
                                        component="img"
                                        alt="Coverphoto"
                                        height="140"
                                        image= {plan.referencePictures.length ? "/"+plan.referencePictures[0].url : "/liskodisko.jpg"}
                                        title="Contemplative Reptile"

                                    />

                                    <CardContent   style={{color: 'black'}}>
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
                                <Link to={{pathname:'/plans/'+ plan.id + '/edit', state: {plan}}}>
                                <Button size="small" color="default" variant="outlined" >
                                    Modify
                                </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </div>
        );
    }
}

export default PlanData;


const cardStyle = {
    marginBottom: '10%',
    backgroundColor: 'whitesmoke',
};