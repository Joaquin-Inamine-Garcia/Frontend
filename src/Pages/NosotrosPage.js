import React from "react";

const Nosotros = (props) => {
    return (
        <main class="holder">
        <div class="quiensomosimg"></div>
        <img src="img/Quienes somos/Coche antiguo.jpg" width="1000" alt="antiguo"/>
        <div class="Nuestra Historia"></div>
        <h2>Nuestra Historia</h2>
        <p>Somos una empresa familiar con 90 anos de traytectoria en el rubro automotor. Nuestro objetivo es
            brindar a nuestros Clientes un servicio eficaz, basado en responsabilidad y el compromiso.
        </p>
        <p>Marcas que son sponsors de nuestro taller mecanico</p>
        <div class="marcas">
            <div class="marca">
                <img src="img/Quienes somos/yokohama.jpg" width= "500" alt="neumatico"/>
                <h5>Yokohama</h5>
                Ofrecemos todo tipo de neumaticos de la marca, desde los neumaticos mas pequeños hasta los mas grandes
            </div>

            <div class="marca">
                <img src="img/Quienes somos/Sparco-Logo.jpg" width= "500" alt="volantes"/>
                <h5>Sparco</h5>
                <p>Gracias a Sparco, podemos modificar y mejorar la estetica del vehiculo como le guste al cliente</p>
            </div>

            <div class="marca">
                <img src="img/Quienes somos/Marca-Castrol.jpg" width= "500"alt="aceite"/>
                <h5>Castrol</h5>
                Castrol es una de las mejores marcas de aceite que hay en el mundo, estos mismos tienen componetes
                avanzados que
                alargan la vida util del vehiculo.
            </div>

            <div class="marca">
                <img src="img/Quienes somos/Bosch-Logotipo.jpg" width= "500" alt="repuestos"/>
                <h5>Bosch</h5>
                Bosch esta en el top 1 del mundo como el repuesto mas confiable y utilizado para el vehiculo. Estos
                mismos nos ofrecen Baterias, Bujias, Alternadores de arranque, etc.
            </div>
        </div>
    </main>

    )
}

export default Nosotros;