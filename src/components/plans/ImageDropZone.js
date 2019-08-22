import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import Button from "@material-ui/core/Button";
import {DropzoneDialog} from 'material-ui-dropzone'
/*
https://www.npmjs.com/package/material-ui-dropzone
*/



class ImageDropZone extends Component{
    constructor(props){
        super(props);
        this.state = {
            files: []
        };
    }
    handleChange(files){
        this.setState({
            files: files
        });
    }
    clearAll = () => {
        this.setState({files: []})
    }


    render(){
        return (
            <div>
                {/*määritellään, millaisia tiedostoja hyväksytään*/}
            <DropzoneArea
                onChange={this.handleChange.bind(this)}
                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                maxFileSize={10000000}
                filesLimit={5}
                getFileLimitExceedMessage

            />
                <Button size="small" color="default" variant="outlined" onClick={this.clearAll}>
                    Clear All
                </Button>
                <Button size="small" color="default" variant="outlined" /*onSave*/>
                    Sumbit
                </Button>
            </div>
        )
    }
}

export default ImageDropZone;