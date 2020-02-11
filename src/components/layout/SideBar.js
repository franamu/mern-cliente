import React from "react";
import NuevoProyecto from "../proyectos/NuevoProyecto";
import ListadoProyectos from "../proyectos/LisadoProyectos";

const SideBar = () => {
  return (
    <aside>
      <h1>
        Mern<span>task</span>
      </h1>
      <NuevoProyecto />
      <div className="proyectos">
        <h2>Tus proyectos</h2>
        <ListadoProyectos />
      </div>
    </aside>
  );
};

export default SideBar;
