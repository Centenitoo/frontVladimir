import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useTranslation } from "react-i18next";
import "../styles/GuardarInfo.css";

const CREATE_MUSICA_MUTATION = gql`
  mutation CreateMusica(
    $titulo: String!
    $autor: String!
    $clasificacion: Int!
    $disponibleSpotify: String!
    $duracion: Int!
    $genero: String!
    $lanzamiento: String!
    $pais: String!
    $precio: Float!
    $album: String!
  ) {
    createMusica(
      titulo: $titulo
      autor: $autor
      clasificacion: $clasificacion
      disponibleSpotify: $disponibleSpotify
      duracion: $duracion
      genero: $genero
      lanzamiento: $lanzamiento
      pais: $pais
      precio: $precio
      album: $album
    ) {
      id
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

const CreateMusica = () => {
  const { t } = useTranslation();

  const [formState, setFormState] = useState({
    titulo: "",
    autor: "",
    clasificacion: "",
    disponibleSpotify: "",
    duracion: "",
    genero: "",
    lanzamiento: "",
    pais: "",
    precio: "",
    album: "",
  });

  const [createMusica] = useMutation(CREATE_MUSICA_MUTATION, {
    variables: {
      titulo: formState.titulo,
      autor: formState.autor,
      clasificacion: parseInt(formState.clasificacion),
      disponibleSpotify: formState.disponibleSpotify,
      duracion: parseInt(formState.duracion),
      genero: formState.genero,
      lanzamiento: formState.lanzamiento,
      pais: formState.pais,
      precio: parseInt(formState.precio),
      album: formState.album,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createMusica();
  };

  return (
    <div className="About-us sombra" id="Caja" style={{ marginTop: "8rem" }}>
      <section className="About-us-Titulo H1 Espacio" id="Titulo">
        {t("Por favor llena los siguientes recuadros")}
      </section>

      <div id="Formulario-Info">
        <p style={{ color: "white" }} className="Espacio Espacio2">
          {t("Titulo")}
        </p>
        <p style={{ color: "white" }} className="Espacio Espacio2">
          {t("Autor")}
        </p>
        <p style={{ color: "white" }} className="Espacio Espacio2">
          {t("Clasificacion")}
        </p>
        <p style={{ color: "white" }} className="Espacio Espacio2">
          {t("En Spotify")}
        </p>
        <p style={{ color: "white" }} className="Espacio Espacio2">
          {t("Duracion")}
        </p>
        <p style={{ color: "white" }} className="Espacio Espacio2">
          {t("Genero")}
        </p>
        <p style={{ color: "white" }} className="Espacio Espacio2">
          {t("Lanzamiento")}
        </p>
        <p style={{ color: "white" }} className="Espacio Espacio2">
          {t("Pais")}
        </p>
        <p style={{ color: "white" }} className="Espacio Espacio2">
          {t("Precio")}
        </p>
        <p style={{ color: "white" }} className="Espacio Espacio2">
          {t("Album")}
        </p>
      </div>

      <div id="Formulario-Rellenar">
        <form onSubmit={handleSubmit}>
          <div className="Espacio">
            <input
              style={{ color: "black" }}
              className="Respuesta"
              value={formState.titulo}
              onChange={(e) =>
                setFormState({ ...formState, titulo: e.target.value })
              }
              type="text"
              placeholder="Titulo de la musica"
            />
          </div>

          <div className="Espacio">
            <input
              style={{ color: "black" }}
              className="Respuesta"
              value={formState.autor}
              onChange={(e) =>
                setFormState({ ...formState, autor: e.target.value })
              }
              type="text"
              placeholder="Autor de la musica"
            />
          </div>

          <div className="Espacio">
            <input
              style={{ color: "black" }}
              className="Respuesta"
              value={formState.clasificacion}
              onChange={(e) =>
                setFormState({ ...formState, clasificacion: e.target.value })
              }
              type="number"
              placeholder="Clasificacion de la musica"
            />
          </div>

          <div className="Espacio">
            <input
              style={{ color: "black" }}
              className="Respuesta"
              value={formState.disponibleSpotify}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  disponibleSpotify: e.target.value,
                })
              }
              type="text"
              placeholder="Disponible en Spotify (Si/No)"
            />
          </div>

          <div className="Espacio">
            <input
              style={{ color: "black" }}
              className="Respuesta"
              value={formState.duracion}
              onChange={(e) =>
                setFormState({ ...formState, duracion: e.target.value })
              }
              type="number"
              placeholder="Duracion de la musica"
            />
          </div>

          <div className="Espacio">
            <input
              style={{ color: "black" }}
              className="Respuesta"
              value={formState.genero}
              onChange={(e) =>
                setFormState({ ...formState, genero: e.target.value })
              }
              type="text"
              placeholder="Genero de la musica"
            />
          </div>

          <div className="Espacio">
            <input
              style={{ color: "black" }}
              className="Respuesta"
              value={formState.lanzamiento}
              onChange={(e) =>
                setFormState({ ...formState, lanzamiento: e.target.value })
              }
              type="text"
              placeholder="Lanzamiento de la musica"
            />
          </div>

          <div className="Espacio">
            <input
              style={{ color: "black" }}
              className="Respuesta"
              value={formState.pais}
              onChange={(e) =>
                setFormState({ ...formState, pais: e.target.value })
              }
              type="text"
              placeholder="Pais de la musica"
            />
          </div>

          <div className="Espacio">
            <input
              style={{ color: "black" }}
              className="Respuesta"
              value={formState.precio}
              onChange={(e) =>
                setFormState({ ...formState, precio: e.target.value })
              }
              type="number"
              placeholder="Precio de la musica"
            />
          </div>

          <div className="Espacio">
            <input
              style={{ color: "black" }}
              className="Respuesta"
              value={formState.album}
              onChange={(e) =>
                setFormState({ ...formState, album: e.target.value })
              }
              type="text"
              placeholder="Album de la musica"
            />
          </div>

          <div id="Formulario-Boton">
            <input
              style={{ color: "black" }}
              type="submit"
              name="Mensaje"
              value="Enviar"
              className="Boton"
            />
          </div>
        </form>
      </div>

      <div className="Informacion">
      <h1 className="H1">{t("Contactar Alumno")}</h1>
      <ul>
        <li>
          {t("Correo Electronico")}<br />
          <p>{t("S18003199@estudiantes.uv.mx")}</p>
        </li>
        <li>
          {t("Matricula")}<br />
          <p>{t("S18003199")}</p>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default CreateMusica;
