import React, {Component} from 'react'
import {AuthContext} from "../context/Authcontext";

const plans = [];

class EditPreviousPlan extends Component {
/*Propsit tuodaan luokasta .singleplan/PlanData */
    state= {
        id: this.props.id,
        header: this.props.header,
        date:this.props.date,
        location:this.props.location,
        latitude: this.props.latitude,
        longitude: this.props.coordinates,
        participants:this.props.participants,
        description:this.props.description,
        notes:this.props.notes,
        referencePictures: this.props.referencePictures
    };

    AuthContext = this.context;

    headerChange = (event) => {this.setState({header: event.target.value})};
    dateChange = (event) => {this.setState({date: event.target.value})};
    locationChange = (event) => {this.setState({location: event.target.value})};
    longChange = (event) => {this.setState ({latitude: event.target.value})};
    latChange = (event) => {this.setState({latitude: event.target.value})};
    participantsChange = (event) => {this.setState({participants: event.target.value})};
    descriptionChange = (event) => {this.setState({description: event.target.value})};
    notesChange = (event) => {this.setState({notes: event.target.value})};
    referencePicChange = (event) => {this.setState({referencePictures: event.target.value})};

    deletePlan = () => {
        this.props.deletePlan(this.props.id)
    };

    editPlan = () => {
        this.props.editPlan(this.state.id, this.state)
    };

    render (){
        return (
        <div>
            <p> tarkoituksen valuttaa propsit placeholdereina input lohkoihin, statet valuen arvoiksi ja Change funktiot onChange muuttujiin
                placeholder={this.props.header} value={this.state.header} onChange={this.headerChange}
            </p>
        </div>

        )
    }
}


component.componentDidMount()
     this.context.getData("plans").push.plans;
}

export {plans};