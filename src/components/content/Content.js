import React, { Component } from 'react'
import SingleContent from './SingleContent'
import Grid from '@material-ui/core/Grid'
import { AuthContext } from '../context/Authcontext';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddContent from './AddContent';

export default class Content extends Component {
    state = { content: [], showModal: false }

    componentDidMount() {
        this.context.getData("content").then(res => this.setState({content: res}))
    }

    handleClickOpen = () => {
        this.setState({showModal: true})
    };
    handleClose = () => {
        this.setState({ showModal: false })
    };

    postMsg = (data) => {
        this.context.postData("content", data).then(this.setState({showModal: false}))
    }

    render() {
            
        return (
            <div>    
            <div style={gridStyle}>
                < Grid
                container
                direction = "row"
                justify = "flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    {this.state.content.length ? this.state.content.map(c => {
                        return <SingleContent key={c.id} post={c}/> 
                    }): < React.Fragment > </React.Fragment> }
                </ Grid>
                <Fab color="primary" aria-label="add" style={btnStyle}>
                    <AddIcon onClick={() => this.setState({ showModal: true })} />
                    </Fab>
                    <AddContent
                        show={this.state.showModal}
                        handleClose={this.handleClose}
                        handleClickOpen={this.handleClickOpen}
                        postMsg={this.postMsg}
                        onHide={() => this.setState({ showModal: false })}/>
                </div>
            </div>
        )
    }
}
const gridStyle = {
    marginLeft: '50px',
    marginRight: '50px',
    marginTop: '20px'
}

const btnStyle = {
    float: "right",
    position: "fixed",
    bottom: "20px",
    right: "20px"
}

Content.contextType = AuthContext;