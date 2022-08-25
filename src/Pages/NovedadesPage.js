import React from 'react';

import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/layout/novedades/NovedadItem';

const Novedades = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/Novedades');
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
            novedades.map(item => <NovedadItem key={item.Id}
                title={item.Titulo} subtitle={item.Subtitulo}
                imagen={item.imagen} body={item.Cuerpo} />)
        )
    }
    </section >
    )
};

export default Novedades;