import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { ancestor } from "../data";

export default function MapData() {
    //FUTURE: set center based on bounds of inputted data
    return (
        <section id="mapdata" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-emerald-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <MapContainer>
                        <TileLayer
                            url="https://tile.openstreetmap.org/"
                            />
                            {ancestor.map((location) => (
                                <Marker position={[location.lat, location.long]}>
                                    <Popup>
                                        <ul>
                                            <li><strong>Name: </strong>{location.name}</li>
                                            <li><strong>Year: </strong>{location.year}</li>
                                            <li><strong>Description: </strong>{location.description}</li>
                                            <li><strong>Source: </strong>{location.source}</li>
                                        </ul>
                                    </Popup>
                                </Marker>
                            ))};
                    </MapContainer>
                </div>
            </div>
        </section>
    );
}
