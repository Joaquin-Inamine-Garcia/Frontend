import React from "react";

const HomePage = (props) => {
    return (
        <main class="holder">
        <div class="inicioimg">
        <img src="img/Inicio/slide-f150r.jpg" width="1000" alt="camiones"/>
        </div>
        <div class="columnas">
            <h2>Bienvenidos</h2>
            <p>Somos una empresa dedicada al cuidado y servicio automotriz. Contamos con la mas avanzada tecnologia para
                que nuestro trabajo sea eficaz y satisfactorio para el cliente </p>
        </div>
        <div class="Opiniones">
            <h2> Opiniones de nuestros clientes</h2>
            <div class="Opiniones">
                <span class="cita">"Muy responsables y precios razonables"</span>
                <span class="autor"> - Gabriel Medina</span>
            </div>
        </div>

    </main>
    )
}

export default HomePage;