import data from "../spotify_data.history.json";
import React, { useEffect, useState } from "react";
import { sixMonthsAlbums, sixMonthsArtists } from "./top6months";

function top100ArtistsLifetime() {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);

  const tempoPorArtista = {};

  reproducoes.forEach((reproducao) => {
    const artista = reproducao.master_metadata_album_album_name;
    const tempo = reproducao.ms_played;

    tempoPorArtista[artista] = (tempoPorArtista[artista] || 0) + tempo;
  });

  const artistasTempoArray = Object.entries(tempoPorArtista).map(
    ([artista, tempoTotal]) => ({
      artista,
      tempoTotal,
    })
  );

  return artistasTempoArray.toSorted((a, b) => b.tempoTotal - a.tempoTotal);
}

export function TopAlbums() {
  const [lista, setLista] = useState(top100ArtistsLifetime());
  const [selectedTime, setTime] = useState("lifetime"); //'4week' '6month' '1year'
  // Estado para controlar quantos itens são exibidos
  const [mostrarMais, setMostrarMais] = useState(10);

  useEffect(() => {
    if (selectedTime === "6month") {
      const res = sixMonthsAlbums(data);
      console.log(res);
      setLista(res);
    }
    if (selectedTime === "lifetime") {
      const res = top100ArtistsLifetime();
      console.log(res);
      setLista(res);
    }
  }, [selectedTime]);

  // Função para mostrar mais itens quando o botão é clicado
  const mostrarMaisItens = () => {
    setMostrarMais(mostrarMais + 10);
  };
  return (
    <div className="top-artists-container">
      <h1>Top #100 Álbuns</h1>
      <div className="text-white flex justify-between">
        <button onClick={() => setTime("4week")}>4 semanas</button>
        <button onClick={() => setTime("6month")}>6 meses</button>
        <button onClick={() => setTime("1year")}>1 ano</button>
        <button onClick={() => setTime("lifetime")}>Desde sempre</button>
      </div>
      <div className="top-album">
        {lista.slice(0, mostrarMais).map((artista, index) => (
          <div key={index} className="album-item">
            <div className="album-image-placeholder"></div>
            <p className="text-xl">{`#${index + 1}. ${artista.artista}`}</p>
          </div>
        ))}
      </div>{" "}
      <br></br>
      {lista.length > mostrarMais && (
        <button className="btn-vermais" onClick={mostrarMaisItens}>
          Ver mais
        </button>
      )}
    </div>
  );
}

export function TopArtists({ navigateTo }) {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);

  const tempoPorArtista = {};

  reproducoes.forEach((reproducao) => {
    const artista = reproducao.master_metadata_album_artist_name;
    const tempo = reproducao.ms_played;

    tempoPorArtista[artista] = (tempoPorArtista[artista] || 0) + tempo;
  });
  const artistasTempoArray = Object.entries(tempoPorArtista).map(
    ([artista, tempoTotal]) => ({
      artista,
      tempoTotal,
    })
  );

  artistasTempoArray.sort((a, b) => b.tempoTotal - a.tempoTotal);

  const tempoTotalReproducao = reproducoes.reduce(
    (total, reproducao) => total + reproducao.ms_played,
    0
  );

  // Estado para controlar quantos itens são exibidos
  const [mostrarMais, setMostrarMais] = useState(10);

  // Função para mostrar mais itens quando o botão é clicado
  const mostrarMaisItens = () => {
    setMostrarMais(mostrarMais + 10);
  };

  return (
    <div className="top-artists-container">
      <h1>Top #100 artistas</h1>
      <div className="topp-artist">
        {artistasTempoArray.slice(0, mostrarMais).map((artista, index) => (
          <div key={index} className="top-artist">
            <div className="circle-photo"></div>{" "}
            {/* Div que imita o círculo de uma foto */}
            <div
              className="artist-info"
              onClick={() => navigateTo(`/${artista.artista}`)}
            >
              <p className="text-xl font-bold">
                {`${index + 1}. ${artista.artista}`} (
                {Math.floor(artista.tempoTotal / 1000 / 60)} minutos)
              </p>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      {artistasTempoArray.length > mostrarMais && (
        <button className="btn-vermais" onClick={mostrarMaisItens}>
          Ver mais
        </button>
      )}
    </div>
  );
}

export function TopTracks() {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);

  const tempoPorArtista = {};

  reproducoes.forEach((reproducao) => {
    const artista = reproducao.master_metadata_track_name;
    const tempo = reproducao.ms_played;

    tempoPorArtista[artista] = (tempoPorArtista[artista] || 0) + tempo;
  });

  const artistasTempoArray = Object.entries(tempoPorArtista).map(
    ([artista, tempoTotal]) => ({
      artista,
      tempoTotal,
    })
  );

  artistasTempoArray.sort((a, b) => b.tempoTotal - a.tempoTotal);

  // Estado para controlar quantos itens são exibidos
  const [mostrarMais, setMostrarMais] = useState(10);

  // Função para mostrar mais itens quando o botão é clicado
  const mostrarMaisItens = () => {
    setMostrarMais(mostrarMais + 10);
  };

  return (
    <div className="top-tracks-container">
      <h1>Top #100 faixas</h1>
      <div className="top-faixas">
        {artistasTempoArray.slice(0, mostrarMais).map((artista, index) => {
          const tempoPorMinuto = Math.floor(artista.tempoTotal / 60000); // Convertendo para minutos
          return (
            <div key={index} className="top-track">
              <div className="square-photo"></div>{" "}
              <div className="track-info">
                <p className="text-xl font-bold">{`${index + 1}. ${
                  artista.artista
                } (${tempoPorMinuto} minutos)`}</p>
              </div>
            </div>
          );
        })}
      </div>
      <br></br>
      {artistasTempoArray.length > mostrarMais && (
        <button className="btn-vermais" onClick={mostrarMaisItens}>
          Ver mais
        </button>
      )}
    </div>
  );
}
