import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField/index';


class About extends Component {
    render() {
        return (
            <div style={styles.container}>
                <form style={styles.form}>
                <paper>
                    <h1 style={styles.h1}>ABOUT</h1>
                    <br></br>
                    <br></br>

                    <h5 style={styles.h5}>
                        This platform is made for photographers to assist you in your photoshoot-planning process.With SKP-Suomen Kuvapalvelu you can:
                    </h5>
                    <br></br>
                    <br></br>
                    <div>
                        <p>
                            Plan your upcoming photoshoot
                        </p>
                        <br></br>
                        <p>
                            Upload reference pictures
                        </p>
                        <br></br>
                        <p>
                            Check out the coordinates for your shoot in order to see
                            <br></br>
                            the location of the sun relative to the position
                        </p>
                        <br></br>
                        <p>
                            Save and share your photoshoot with your team
                        </p>
                        <br></br>
                        <p>
                            Go through old photoshoots in order to get inspiration
                        </p>
                        <br></br>
                        <p>
                            Create your free account today to start
                            <br></br>
                            planning your photoshoots in a professional way!
                        </p>
                        <br></br>
                        <p>
                            And so much more!
                        </p>
                    </div>

                    <div style={styles.why}>

                        <h6 style={styles.h6}>WHY?</h6>
                        <p>
                            The idea for SKP -Suomen Kuvapalvelu was brought forward by Anna Laitila in a pitch
                            to the Academy.fi Java-class summer of 2019 final project. After she pitched her plan
                            the team quickly got together and started planning on how to go from an idea to a working
                            web app.SKP -Suomen Kuvapalvelu was released only two weeks after the project started.
                            Stay tuned for updates!
                        </p>
                    </div>
                </paper>
                </form>

                <div style={styles.container}>
                <form  style={styles.form2}>
                    <h6 style={styles.h6}>WHO?</h6>
                    <h6>Anna Laitila -Product Owner and a mean front-end trickster</h6>
                                                    -
                    <h6>Samuli Sorjonen -Back-end ninja and a solid all-round developer</h6>
                                                    -
                    <h6>  Teemu Pulli -Git-enforcer and the team cloud-master</h6>
                                                    -
                    <h6>Iiris Setälä - The team finisher and full-stacker</h6>
                                                    -
                    <h6>David Andberg -Scam master and an allround jester</h6>
                </form>
                </div>
            </div>
        );
    }
}

const styles= {

    container:{
        position: 'relative',
    },
    form: {
        backgroundColor: 'ghostwhite',
        marginTop: '10%',
        borderRadius: '5px',
        left: 0,
        top: '50%',
        width: '100%',
        textAlign: 'center',
        fontSize: '12px',

    },
    h1: {
        color: 'dimgrey',
        padding: 10,
    },
    why: {
        paddingBottom:10,
    },
    h5: {
      paddingTop: '70px',
    },
    h6: {
        paddingTop: '50px',
        marginBottom: '20px',
    },
    form2: {
        backgroundColor: 'ghostwhite',
        borderRadius: '5px',
        left: 0,
        top: '50%',
        width: '100%',
        textAlign: 'center',
        fontSize: '12px',
        padding: '20px',
        marginTop:'50px',
    },
}


export default About;

