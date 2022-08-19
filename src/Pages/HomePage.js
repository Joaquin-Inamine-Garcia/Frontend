import React from "react";

import { useState, useEffect } from React;
import axios from 'axios';
import NovedadItem from '../components/layout/novedades/NovedadItem';

const HomePage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/HomePage');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className="holder">
        <h2>Novedades</h2>
        {
        loading ? (
            <p>Cargando...</p>
        ) : (
            novedades.map(item => <NovedadItem key={Item.id}
                title={item.titulo} subtitle={item.subtitulo}
                imagen={item.imagen} body={item.cuerpo} />)
        )
    }
    </section >
    )
};

export default HomePage;