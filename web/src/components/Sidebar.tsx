import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import mapMarkerImg from '../images/map-market.svg';

import '../styles/components/sidebar.css'

export default function Sidebar() {
    const { goBack } = useHistory();

    return (
        <aside className="app-sidebar">
            <Link to={'/'}>
                <img src={mapMarkerImg} alt="Happy" />
            </Link>


            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    );
}