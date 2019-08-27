import React, {Component} from 'react'

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



    const plans = [

        {
            id: 1,
            header: "My photoshoot",
            date: "11.10.2019",
            location: "Oulu",
            participants: ["Meikkaaja", "Valomies", "Malli"],
            description: "I just love lizards",
            notes: "Lizards are the best",
            image1: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
        },
        {
            id: 2,
            header: "My photo",
            date: "21.07.2019",
            location: "Turku",
            participants: ["Meikkaaja", "Valomies", "Malli"],
            description: "I <3 lizards",
            notes: "Lizards are the best",
            image1: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
        },
        {
            id: 3,
            header: "My photoshoot 999",
            date: "12.08.2019",
            location: "Oulu",
            participants: ["Meikkaaja", "Valomies", "Malli"],
            description: "I love wizards",
            notes: "Lizards are the best",
            image1: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
        },
    ];

export {plans};