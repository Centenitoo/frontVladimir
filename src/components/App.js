import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import { Alumno, Imagen } from "./Inicio";
import MusicaList from "./MusicaList";
import CreateMusica from "./CreateMusica";
import Login from "./Login";
import Search from "./Search";
import Openai from "./openai";

const Home = () => {
  return (
    <>
      <Alumno />
      <MusicaList />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Imagen />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateMusica />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/openai" element={<Openai />} />
      </Routes>
    </div>
  );
};

export default App;
