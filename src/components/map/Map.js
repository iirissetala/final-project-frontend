
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
    const [marker, setMarker] = useState({ longitude: 24.94, latitude: 60.16})
    const [events, setEvents] = useState({})
    //Shows coordinates for start position
    const [viewport, setViewport] = useState({
        latitude: 60.16741,
        longitude: 24.942577,
        height: "100vh",
        width: "100vw",
        zoom: 10,
    });

    const logDragEvent = (name, e) => {
        setEvents({...events, [name]: e.lngLat})
    }

    const onMarkerDragStart = e => {
        logDragEvent('onDragStart', e)
    }
    const onMarkerDrag = e => {
        logDragEvent('onDrag', e)
    }
    const onMarkerDragEnd = event => {
        logDragEvent('onDragEnd', event);
        /* this.setMarker({
            marker: {
                longitude: event.lngLat[0],
                latitude: event.lngLat[1]
            }
        }); */
        setMarker({
            
                longitude: event.lngLat[0],
                latitude: event.lngLat[1]
            
        });
    };

    //Escape shuts down popup
    const [selectedPark, setSelectedPark] = useState(null);
    useEffect(()=> {
        setMarker(marker)
        const listener = e => {
            if (e.key === "Escape"){
                setSelectedPark(null);
            }
        };
        window.addEventListener("keydown", listener);
    }, []);
console.log(marker.longitude)
console.log(marker)

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
                     {/* This Marker crashes when let go  */}
                    
                      <Marker
                        latitude={marker.latitude}
                        longitude={marker.longitude}
                        draggable
                        onDragEnd={onMarkerDragEnd}
                        onDragStart={onMarkerDragStart}
                        onDrag={onMarkerDrag}
                        >
                        <Place/>
                    </Marker>
                           
                    
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


