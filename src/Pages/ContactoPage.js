import React from "react";


import { useState } from 'react';
import axios from 'axios';

const Contacto = (props) => {

    const initialform = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }

    const [sending, setSending ] = useState (false);
    const [msg, setMsg] = useState ('');
    const [formData, setFormData] = useState (initialform);
    
    const handleChange = e  => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica

        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/Contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialform)
        }
    }

    return (
        <main class="holder">
            <div className="Contacto">
                <h2>Contacto inmediato</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="telefono"value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <input type="text" name="mensaje"value={formData.mensaje} onChange={handleChange}/>
                    </p>

                    <p class="acciones">
                        <input type="submit" value="Enviar"/>
                    </p>
                </form> 

                {sending ? <p>Enviando...</p> : null}
                {msg ?  <p>{msg}</p> : null}

            </div>

            <div class="contactos">
                <div class="Contacto">
                    <h2>Telefonos</h2>
                    <p>011-1234-5678</p>
                </div>

                <div class="Contacto">
                    <h2>Facebook</h2>
                    <p>Joaquin Garage</p>
                </div>

                <div class="Contacto">
                    <h2>Instagram</h2>
                    <p>@JoaquinGarage_ok</p>
                </div>

                <div class="Contacto">
                    <h2>Mail</h2>
                    JoaquinGarage@atencionalcliente.com.ar
                </div>
            </div>

        </main>

    )
}

export default Contacto;