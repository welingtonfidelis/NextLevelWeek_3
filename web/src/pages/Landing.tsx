import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';

import '../styles/pages/landing.css';

export default function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Logo Happy" />

                <main>
                    <h1>Leve felicidade ao mundo</h1>
                    <p>
                        Visite orfanatos e mude o dia de muitas crianças.
                    </p>
                </main>

                <div className="location">
                    <strong>Itajubá</strong>
                    <span>Minas Gerais</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </Link>
            </div>
        </div>
    )
}