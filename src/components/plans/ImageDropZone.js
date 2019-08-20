import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import Button from "@material-ui/core/Button";

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
    render(){
        return (
            <div>
                {/*määritellään, millaisia tiedostoja hyväksytään*/}
            <DropzoneArea
                onChange={this.handleChange.bind(this)}
                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                // showPreviews={true}
                maxFileSize={10000000}
                filesLimit={5}
            />
                <Button size="small" color="grey" variant="outlined" onDelete>
                    Cancel
                </Button>
                <Button size="small" color="grey" variant="outlined" onSave>
                    Sumbit
                </Button>
            </div>
        )
    }
}

export default ImageDropZone;