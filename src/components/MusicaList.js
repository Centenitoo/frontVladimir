import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../styles/Mostrar.css';

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
  const { data } = useQuery(FEED_QUERY);

  return (
    <div className="transparent-container">
      <span style={{color: "white"}} className="Mostrar_Titulo">Canciones Almacenadas!</span>

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
                    Titulo_Cancion:
                    <span className="texto"> {musica.titulo} </span>
                  </div>

                  <div className="subtitle">
                    Duracion:
                    <span className="texto"> {musica.duracion} </span>
                  </div>

                  <div className="subtitle">
                    Lanzamiento:
                    <span className="texto"> {musica.lanzamiento} </span>
                  </div>

                  <div className="subtitle">
                    Autor:
                    <span className="texto"> {musica.autor} </span>
                  </div>

                  <div className="subtitle">
                    Clasificacion:
                    <span className="texto"> {musica.clasificacion} </span>
                  </div>

                  <div className="subtitle">
                    Pais:
                    <span className="texto"> {musica.pais} </span>
                  </div>

                  <div className="subtitle">
                    Genero:
                    <span className="texto"> {musica.genero} </span>
                  </div>

                  <div className="subtitle">
                    Album:
                    <span className="texto"> {musica.album} </span>
                  </div>

                  <div className="subtitle">
                    Disponible en Spotify:
                    <span className="texto"> {musica.disponibleSpotify} </span>
                  </div>

                  <div className="subtitle">
                    Precio:
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
