import React, {Component} from 'react';
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import styles from './style.scss';
// import Captioned from 'react-awesome-slider/src/components/hoc/captioned-images';
// import CaptionedStyles from '/styles.scss';

/*
josh-felise-VrtbeywxXDw-unsplash.jpg
kurt-cotoaga-cqbLg3lZEpk-unsplash.jpg
kyle-cesmat-5wZ3iImG-I4-unsplash.jpg
tomas-malik-MODPxoyttL8-unsplash.jpg
*/
class TheOtherJumbo extends Component {

    render() {

        return (
            <div styles={style.SliderContainerStyle}>

                <AwesomeSlider cssModule={styles}>
                    <div style={style.pic} data-src="/pics/josh-felise-VrtbeywxXDw-unsplash.jpg">
                        <p style={style.text}>I want to see what you got.</p>
                    </div>
                    <div data-src="/pics/kurt-cotoaga-cqbLg3lZEpk-unsplash.jpg">
                        <p>The answer is -- Don't think about it.</p>
                    </div>
                    <div data-src="/pics/kyle-cesmat-5wZ3iImG-I4-unsplash.jpg">
                        <p>Sometimes science is more art than science.</p>
                    </div>
                    <div data-src="/pics/tomas-malik-MODPxoyttL8-unsplash.jpg">
                        <p>Love, connection, experience.</p>
                    </div>
                </AwesomeSlider>

                <p style={style.text}>  Hi photographer!
                    <br></br>
                    <br></br>

                    Ever had problems with planning your shoots, keeping all your thoughts together and getting the idea through with all your collaborators?
                    <br></br>
                    <br></br>
                    This App is made for you.
                    <br></br>

                    <br></br>
                    This platform is made for photographers to help and pace up the planning process. The SKP platform majes it easier keeping track of your upcoming photoshoots and  the planning itself.
                    You can pinpoint the location you had in your mind on the map and check from which direction the sun shines. You are able to attach some referencephotos to your plan, add the location on map and make notes concerning your vision.</p>
            </div>

        );
    }
}

export default TheOtherJumbo;



const style= {
    SliderContainerStyle: {
        marginTop: '160px',
        marginBottom: '30px',
        // borderRadius: 'borderRadius',
        borderRadius: '25px',
        border: '3px solid #BADA55',
    },
    text: {
        padding: '30px',
    },
    pic:{
        borderRadius: '25px',
        // border: '3px solid #BADA55',
    }
}

{/*            <AwesomeSlider
            startupScreen={startupScreen}
            cssModule={styles}>
            </AwesomeSlider>*/}

{/*
<img src ="/pics/josh-felise-VrtbeywxXDw-unsplash.jpg"/>
<img src ="/pics/kurt-cotoaga-cqbLg3lZEpk-unsplash.jpg"/>
<img src ="/pics/kyle-cesmat-5wZ3iImG-I4-unsplash.jpg"/>
<img src ="/pics/tomas-malik-MODPxoyttL8-unsplash.jpg"/>
*/}

/*
        const startupScreen = (
            <div>
                <img src="/pics/josh-felise-VrtbeywxXDw-unsplash.jpg" />
            </div>
        );
        */

/*
                <Captioned
                    startupScreen={startupScreen}
                    cssModule={CaptionedStyles}
                    screens={[
                        {
                            backgroundColor: '#4a9c8c',
                            media: '/pics/kurt-cotoaga-cqbLg3lZEpk-unsplash.jpg',
                            caption: 'I want to see what you got.',
                        },
                        {
                            backgroundColor: '#4a9c8c',
                            media: '/pics/kyle-cesmat-5wZ3iImG-I4-unsplash.jpg',
                            caption: "The answer is -- Don't think about it.",
                        },
                        // ...
                    ]}
                />*/
