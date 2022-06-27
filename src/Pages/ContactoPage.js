import React from "react";

const Contacto = (props) => {


    return (
        <main class="holder">
            <div className="Contacto">
                <h2>Contacto inmediato</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="Email"/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="Telefono"/>
                    </p>
                    <p>
                        <label>Mensaje</label>
                        <input type="text" name="Mensaje"/>
                    </p>
                    <p class="acciones">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>

            <div class="contactos">
                <div class="Contacto">
                    <h2>Telefonos</h2>
                    <p>011-1234-5678</p>
                </div>

                <div class="Contacto">
                    <h2>Facebook</h2>
                    <p>Transportes X</p>
                </div>

                <div class="Contacto">
                    <h2>Instagram</h2>
                    <p>@TransportesX_ok</p>
                </div>

                <div class="Contacto">
                    <h2>Mail</h2>
                    Transportesx@atencionalcliente.com.ar
                </div>
            </div>

        </main>

    )
}

export default Contacto;