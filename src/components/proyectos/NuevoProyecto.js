import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
  //state
  const [proyecto, guardarProyecto] = useState({
    nombre: ""
  });

  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    });
  };

  // cuando el usuario envia un proyecto
  const onSumitProyecto = e => {
    e.preventDefault();

    // validar proyecto

    // agregar al state

    // reiniciar el form
  };

  // extraer nombre proyecto
  const { nombre } = proyecto;
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form className="formulario-nuevo-proyecto" onSubmit={onSumitProyecto}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}
        />

        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;
