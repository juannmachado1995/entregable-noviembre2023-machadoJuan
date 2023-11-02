//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React, { useState } from "react";
import Formulario from "./Formulario";

function Card() {
  let [datosForm, setDatosForm] = useState(null);

  let manejadorForm = (datos) => {
    setDatosForm(datos);
  };

  return (
    <>
      <h2>Completar Datos</h2>
      <Formulario onSubmit={manejadorForm} />

      {datosForm && (
        <div>
          <h2>Información ingresada:</h2>
          <p>Nombre: {datosForm.nombre}</p>
          <p>DNI: {datosForm.dni}</p>
          <p>Ciudad: {datosForm.ciudad}</p>
        </div>
      )}
    </>
  );
}

export default Card;
