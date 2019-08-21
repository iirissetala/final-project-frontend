
import React, {useState} from 'react';



import ReactMapGL from "react-map-gl";


export default function Map(){
    const [viewport, setViewport] = useState({
        latitude: 60.16741,
        longitude: 24.942577,
        height: "100vh",
        width: "100vw",
        zoom: 10,
    });
        return(
            <div>
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={(viewport)=>{
                        setViewport(viewport);
                    }}
                >
                </ReactMapGL>
            </div>
        );
    }


