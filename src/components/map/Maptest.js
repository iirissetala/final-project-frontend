
import React, { Component } from 'react';
import { CameraAlt, Place } from "@material-ui/icons";
import MapGL, {
    GeolocateControl,
    Marker,
    Popup,
    NavigationControl
} from "react-map-gl";
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import Geocoder from 'react-map-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import { AuthContext } from '../context/Authcontext'
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {testSun} from './suncalc'
import DatePicker from './DatePicker';
import { Box } from '@material-ui/core';

var SunCalc = require('suncalc');


const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

export default class MapClass extends Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef()
        this.state = {
            viewport: {
                latitude: 60.16741,
                longitude: 24.942577,
                height: props.height ? props.height : '100vh',
                width: props.width ? props.width : '100vw',
                zoom: 10,
            },
            marker: {
                longitude: 24.94, latitude: 60.16
            },
            events: {},
            selectedPark: null,
            popupInfo: null,
            locations: [],
            selectedLocation: null,
            date: new Date(),
            suncalc: {}
        }
    }
    componentDidMount() {
        console.log(this.mapRef.current.getMap())
        this.setState({ marker: this.state.marker })
        this.context.getData("plans").then(res => this.setState({ locations: res }))
        
        const listener = e => {
            if (e.key === "Escape") {
                this.setState({ selectedLocation: null });
            }
        };
        window.addEventListener("keydown", listener);
        const suncalc = SunCalc.getTimes(this.state.date, this.state.marker.latitude, this.state.marker.longitude);
        
        this.setState({ suncalc: SunCalc.getTimes(this.state.date, this.state.marker.latitude, this.state.marker.longitude) })
        console.log(suncalc)
        const map = this.mapRef.current.getMap();
        map.on('load', function () {
            
            map.addLayer({
                "id": "sun",
                "type": "line",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [24.942577, 60.16741],
                                [25, 60]
                                
                            ]
                        }
                    }
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#888",
                    "line-width": 8
                }
            });
        });
        map.on('load', function () {
            
            var layers = map.getStyle().layers;

            var labelLayerId;
            for (var i = 0; i < layers.length; i++) {
                if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                    labelLayerId = layers[i].id;
                    break;
                }
            }

            map.addLayer({
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',
                    'fill-extrusion-height': [
                        "interpolate", ["linear"], ["zoom"],
                        15, 0,
                        15.05, ["get", "height"]
                    ],
                    'fill-extrusion-base': [
                        "interpolate", ["linear"], ["zoom"],
                        15, 0,
                        15.05, ["get", "min_height"]
                    ],
                    'fill-extrusion-opacity': .6
                }
            }, labelLayerId);
        });
    }
    
    componentDidUpdate() {
    }
    
    testRef = (x, y) =>  {
        const map = this.mapRef.current.getMap()
        
map.getSource("sun").setData({
                
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [y, x],
                                [this.state.viewport.longitude, this.state.viewport.latitude]
                                
                            ]
                     
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#888",
                    "line-width": 8
                }
            });
        
        
    }
    updateViewport = viewport => {
        this.setState({ viewport });
    };
    
    logDragEvent(name, event) {
        this.setState({
            events: {
                ...this.state.events,
                [name]: event.lngLat
            }
        });
    }
    
    onMarkerDragStart = event => {
        this.logDragEvent('onDragStart', event);
    };
    
    onMarkerDrag = event => {
        this.logDragEvent('onDrag', event);
    };
    
    onMarkerDragEnd = event => {
        this.logDragEvent('onDragEnd', event);
        console.log(event.lngLat[0])
        this.setState({
            marker: {
                longitude: event.lngLat[0],
                latitude: event.lngLat[1]
            }
        });
        this.handleViewportChange({longitude: event.lngLat[0], latitude: event.lngLat[1]})
        
    };
    
    handleDateChange = () => {
        var times = SunCalc.getTimes(this.state.date, this.state.viewport.latitude, this.state.viewport.longitude);
        var sunrisePos = SunCalc.getPosition(this.state.date, this.state.viewport.latitude, this.state.viewport.longitude);
        var sunriseAzimuth = sunrisePos.azimuth * 180 / Math.PI;
        const coords = testSun(this.state.viewport.latitude, this.state.viewport.longitude, sunriseAzimuth, 100)
        this.testRef(coords.x, coords.y);
        
    }
    
    handleViewportChange = (viewport) => {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        })
        this.handleDateChange()
    }
    
    handleGeocoderViewportChange = (viewport) => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 }
        
        return this.handleViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        })
        
    }
    

    handleHourChange = (e, value) => {
        console.log(value)
        const olddate = this.state.date
        olddate.setHours(value)
        this.setState({date: olddate})
        this.handleDateChange();
    }
    
    handleMinuteChange = (e, value) => {
        const olddate = this.state.date
        olddate.setMinutes(value)
        this.setState({date: olddate})
        this.handleDateChange();
    }

    handleCalendarChange = date => {
        this.setState({ date: date })
        this.handleDateChange()
    }
    render() {

console.log(this.state)
        const { viewport } = this.state;
        
        return (
            <Box style={{height: '100%', width: '100%'}}>
                <DatePicker latitude={this.state.viewport.latitude}
                    longitude={this.state.viewport.longitude}
                    date={this.state.date}
                    suncalc={this.state.suncalc}
                    handleHourChange={this.handleHourChange}
                    handleMinuteChange={this.handleMinuteChange}
                    handleCalendarChange={this.handleCalendarChange}/>
                
                <div>
                <MapGL
                    ref={this.mapRef}
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={this.updateViewport}
                >

                    {!this.state.locations.length ? null : this.state.locations.map(loc => {
                        return <Marker key={loc.id}
                            mapRef={this.mapRef}
                            latitude={Number(loc.latitude)}
                            longitude={Number(loc.longitude)}>
                            <CameraAlt mapRef={this.mapRef} onClick={(e) => {
                                e.preventDefault();
                                this.setState({ selectedLocation: loc })
                            }} />

                        </Marker>
                    })}

                    {/* Popup when clicked photoshoot-location */}
                    {this.state.selectedLocation ? (
                        <Popup
                            mapRef={this.mapRef}
                            tipSize={5}
                            anchor="top"
                            longitude={this.state.selectedLocation.longitude}
                            latitude={this.state.selectedLocation.latitude}
                            closeOnClick={false}
                            onClose={() => this.setState({ selectedLocation: null })}
                        >
                            <div>
                                <h2>{this.state.selectedLocation.description}</h2>
                                {this.state.selectedLocation.date}
                                <Nav.Link>
                                    <Link to={{ pathname: "/plan/" + this.state.selectedLocation.id, }}
                                    >Photoshoot
                                    </Link>
                                </Nav.Link>
                            </div>
                        </Popup>) : null}

                    {/*  Draggable marker  */}

                    <Marker
                        mapRef={this.mapRef}
                        latitude={this.state.viewport.latitude}
                        longitude={this.state.viewport.longitude}
                        offsetTop={-20}
                        offsetLeft={-10}
                        draggable

                        onDragEnd={this.onMarkerDragEnd}
                        onDragStart={this.onMarkerDragStart}
                        onDrag={this.onMarkerDrag}
                    >
                        {this.state.popupInfo ? (
                            <Popup
                                mapRef={this.mapRef}

                                tipSize={5}
                                anchor="top"
                                longitude={25 /* this.state.selectedLocation.location */}
                                latitude={60 /* this.state.selectedLocation.location */}
                                closeOnClick={false}
                                onClose={() => this.setState({ popupInfo: null })}
                            >
                                <div>
                                    <h2>{this.state.selectedLocation.description}</h2>
                                    <p>{this.state.selectedLocation.date}</p>
                                    <Nav.Link>
                                        <Link to={{ pathname: "/plan/" + this.state.selectedLocation.id, }}
                                        >Photoshoot
                                    </Link>
                                    </Nav.Link>
                                </div>
                            </Popup>) : null}
                        <Place />
                    </Marker>
                    {/* Geocoder  */}
                    <Geocoder
                        mapRef={this.mapRef}
                        onViewportChange={this.handleGeocoderViewportChange}
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                        position="top-left"
                    />



                    <div className="nav" style={navistyle}>
                        <NavigationControl />
                        <GeolocateControl
                            /*
                                                    style={geolocateStyle}
                            */
                            positionOptions={{ enableHighAccuracy: true }}
                            trackUserLocation={true}
                        />
                    </div>
                </MapGL>
                </div>
            </Box>
        );
    }
}

//geolocation button position
const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
};
//navigation buttons position
const navistyle = {
    float: 'right',
    margin: '50px',
    padding: '10px'
};

MapClass.contextType = AuthContext;