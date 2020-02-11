import React from "react";
import SideBar from "../layout/SideBar";
import Barra from "../layout/Barra";

const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <SideBar />
      <div className="seccion-principal">
        <Barra />
        <main>
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
