import React from 'react';
import "../styles/Inicio.css"
import "../styles/Alumno.css"

export const Imagen = () => {
  return (
    <div className="imagen"></div>
  );
};


export const Alumno = () => {
  return (
    <div className="Alumno">
      <div className="TarjetaFoto">
        <img src="./img/Yo1.jpg" alt="Foto mía" className="Foto"></img>
        <div className="Info">
          <p className="Matricula">Nombre del Alumno: Vladimir Alexander Garcia</p>
          <p className="Matricula">Matricula del Alumno: S18003199</p>
          <p className="Escolaridad">Escolaridad: 802 Ingeniería de Software, UV</p>
        </div>
      </div>

      <div className="Contenido">
        <p className="Titulo">Trabajo</p>
        <h1 className="Subtitulo">Página realizada en React para la muestra de información sobre colecciones de música!</h1>
        <p className="Descripcion">El front-end puede mostrar las colecciones de canciones almacenadas en la base de datos Graphql, conectada a través de una ApiRest de Python y Django</p>
      </div>
    </div>
  );
}
