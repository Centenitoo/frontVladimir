import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const Link = ({ link }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { t } = useTranslation();
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className='text-center'>
      <div onClick={toggleDetails} style={{ cursor: 'pointer' }}>
        <button className="buttontitle">{link.titulo}</button>
      </div>
      {showDetails && (
        <table className='cont-center'>
          <tbody>
            <tr>
              <td>{t("duration")}:</td>
              <td>{link.duracion}</td>
            </tr>
            <tr>
              <td>{t("release_date")}:</td>
              <td>{link.lanzamiento}</td>
            </tr>
            <tr>
              <td>{t("author")}:</td>
              <td>{link.autor}</td>
            </tr>
            <tr>
              <td>{t("classification")}:</td>
              <td>{link.clasificacion}</td>
            </tr>
            <tr>
              <td>{t("country")}:</td>
              <td>{link.pais}</td>
            </tr>
            <tr>
              <td>{t("genre")}:</td>
              <td>{link.genero}</td>
            </tr>
            <tr>
              <td>{t("album")}:</td>
              <td>{link.album}</td>
            </tr>
            <tr>
              <td>{t("spotify_available")}:</td>
              <td>{link.disponibleSpotify}</td>
            </tr>
            <tr>
              <td>{t("price")}:</td>
              <td>{link.precio}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Link;
