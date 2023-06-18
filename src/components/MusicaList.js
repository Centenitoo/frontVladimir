import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../styles/Mostrar.css';
import { useTranslation } from "react-i18next";

const FEED_QUERY = gql`
  query {
    musicas {
      titulo
      duracion
      lanzamiento
      autor
      clasificacion
      pais
      genero
      album
      disponibleSpotify
      precio
    }
  }
`;
const MusicaList = () => {
  const { t } = useTranslation();

  const { data } = useQuery(FEED_QUERY);

  return (
    <div className="transparent-container">
      <span style={{ color: "white" }} className="Mostrar_Titulo">{t("Canciones Almacenadas!")}</span>

      {data &&
        data.musicas.map((musica) => {
          return (
            <div className="card card3" key={musica.titulo}>
              <div className="inner">
                <h2 className="title">
                  <p>ID: {musica.titulo}</p>
                </h2>
                <div>
                  <div className="subtitle">
                    {t("Titulo_Cancion")}:
                    <span className="texto"> {musica.titulo} </span>
                  </div>

                  <div className="subtitle">
                    {t("Duracion")}:
                    <span className="texto"> {musica.duracion} </span>
                  </div>

                  <div className="subtitle">
                    {t("Lanzamiento")}:
                    <span className="texto"> {musica.lanzamiento} </span>
                  </div>

                  <div className="subtitle">
                    {t("Autor")}:
                    <span className="texto"> {musica.autor} </span>
                  </div>

                  <div className="subtitle">
                    {t("Clasificacion")}:
                    <span className="texto"> {musica.clasificacion} </span>
                  </div>

                  <div className="subtitle">
                    {t("Pais")}:
                    <span className="texto"> {musica.pais} </span>
                  </div>

                  <div className="subtitle">
                    {t("Genero")}:
                    <span className="texto"> {musica.genero} </span>
                  </div>

                  <div className="subtitle">
                    {t("Album")}:
                    <span className="texto"> {musica.album} </span>
                  </div>

                  <div className="subtitle">
                    {t("Disponible en Spotify")}:
                    <span className="texto"> {musica.disponibleSpotify} </span>
                  </div>

                  <div className="subtitle">
                    {t("Precio")}:
                    <span className="texto"> {musica.precio} </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MusicaList;
