import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../assets/images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

export default function Landing() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita.</p>
                </header>

                <footer>
                    <strong>Itajubá</strong>
                    <span>Mingas Gerais</span>
                </footer>
            </aside>

            <Map 
                center={[-22.419878, -45.447044]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}