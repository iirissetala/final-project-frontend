import React, {Component} from 'react';
import Jumbo from '../jumbo/Jumbo'
import TheOtherJumbo from "../jumbo/TheOtherJumbo";

class Homer extends Component{
    render(){
        return(
            <div style={styles.jumbo}>
                <TheOtherJumbo/>
            </div>
        )
    }
}

export default Homer

const styles ={
    jumbo: {
        width: '90%',
        justify: 'center',
        alignItems: 'center',
        height: 'auto',
        margin: '0 auto',
        paddingTop: '10%',
        borderRadius: 'borderRadius',

        /*        borderRadius: '25px',
                border: '3px solid #BADA55',
                */

    }
}