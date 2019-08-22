
import React, {useState, useEffect} from 'react';
import {CameraAlt, Place} from "@material-ui/icons";
import ReactMapGL, {
    GeolocateControl,
    Marker,
    Popup,
    NavigationControl
} from "react-map-gl";
import * as parkDate from "./skatebord"

//geolocation button position
const geolocateStyle ={
    float: 'left',
    margin: '50px',
    padding: '10px'
};
//navigation buttons position
const navistyle ={
    float: 'right',
    margin: '50px',
    padding: '10px'
};



export default function Map(){
    //Shows coordinates for start position
    const [viewport, setViewport] = useState({
        latitude: 60.16741,
        longitude: 24.942577,
        height: "100vh",
        width: "100vw",
        zoom: 10,
    });

    const onMarkerDragEnd = event => {
        this.logDragEvent('onDragEnd', event);
        this.setState({
            marker: {
                longitude: event.lngLat[0],
                latitude: event.lngLat[1]
            }
        });
    };

    //Escape shuts down popup
    const [selectedPark, setSelectedPark] = useState(null);
    useEffect(()=> {
        const listener = e =>{
            if (e.key === "Escape"){
                setSelectedPark(null);
            }
        };
        window.addEventListener("keydown", listener);
    }, []);


        return(
            <div>
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={(viewport)=>{
                        setViewport(viewport);
                    }}
                >
                    {/*Previous photoshootlocations loaded*/}
                    {parkDate.features.map((park)=>(
                            <Marker key={park.properties.PARK_ID}
                                    latitude={park.geometry.coordinates[1]}
                                    longitude={park.geometry.coordinates[0]}>
                                <CameraAlt onClick={(e)=>{
                                    e.preventDefault();
                                    setSelectedPark(park)
                                }}/>
                            </Marker>

                        ))}
                    {selectedPark ?(
                        <Popup
                            latitude={selectedPark.geometry.coordinates[1]}
                            longitude={selectedPark.geometry.coordinates[0]}
                            onClose={()=>{
                                setSelectedPark(null);
                        }}
                            >
                            <div>
                                <h2>{selectedPark.properties.NAME}</h2>
                                <p>{selectedPark.properties.DESCRIPTIO}</p>
                            </div>
                        </Popup>

                    ): null}
                    {/*This Marker crashes when let go
                    <Marker
                        latitude={60.16}
                        longitude={24.94}
                        draggable
                        onDragEnd={onMarkerDragEnd}>
                        <Place/>
                    </Marker>
*/}
                    <div className="nav" style={navistyle}>
                    <NavigationControl/>
                    <GeolocateControl
/*
                        style={geolocateStyle}
*/
                        positionOptions={{enableHighAccuracy: true}}
                        trackUserLocation={true}
                    />
                    </div>
                </ReactMapGL>
            </div>
        );
    }


