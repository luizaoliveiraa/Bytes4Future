import data from "../../spotify_data.history.json";
import { useState } from "react";

//Esta funcao retorna um array com todos os artistas cujo o nome inclui "value"
export function inputSearch(value) {
  console.log(`Searching for: "${value}"`);
  //Ir ao historico
  //Filtrar o historico (.filter) de maneira a que
  //  So ficam os elementos que
  //      e.master_metadata_artist_name.includes(value)
  const filteredPlaysByArtists = data
    .filter((e) => e.master_metadata_track_name !== null)
    .filter((entry) => entry.master_metadata_album_artist_name.includes(value));
  const artistsFromSongs = filteredPlaysByArtists.map(
    (e) => e.master_metadata_album_artist_name
  );
  const result = Array.from(new Set(artistsFromSongs));
  //Retornar isso
  return result;
}

export function countPlays(data) {
  const reproducoes = data.filter(
    (cadaElem) => cadaElem.master_metadata_track_name !== null
  );
  return reproducoes;
}

export function countTracks(reproducoes) {
  const tracksSemRepetir = [
    ...new Set(
      reproducoes.map((cadaElem) => cadaElem.master_metadata_track_name)
    ),
  ];
  return tracksSemRepetir;
}

function countTempoOuvido(reproducoes) {
  const tempoTotalMs = reproducoes.reduce(
    (total, cadaMsc) => total + cadaMsc.ms_played,
    0
  );
  const tempoTotalMinutos = tempoTotalMs / 60000; //msm coisa que /1000s e depois em / 60 - para dar em minutos
  return Math.floor(tempoTotalMinutos);
}

function countNaoPulado(reproducoes) {
  let tempoTotalMs = reproducoes.reduce((total, cadaMsc) => {
    if (
      cadaMsc.reason_end === "trackdone" &&
      cadaMsc.master_metadata_track_name !== null
    ) {
      return total + cadaMsc.ms_played;
    }
    return total;
  }, 0);
  let tempoTotalMinutosNaoPulado = tempoTotalMs / 60000;
  return Math.floor(tempoTotalMinutosNaoPulado);
}

/*
dia1 = 12/06/2020
diaUltimo = 18/12/2023*/
const diferencaEmDias = Math.floor(
  Math.abs(new Date(2024, 0, 18) - new Date(2020, 5, 1)) /
    (1000 * 60 * 60 * 24)
);

function mediaDiaria(reproducoes) {
  const media = countNaoPulado(reproducoes) / diferencaEmDias;
  return Math.floor(media);
}

function estacaoMaisOuvida() {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);
  const datasDeReproducao = reproducoes.map((objeto) => objeto.ts);

  function calculaEstacaoDoAno(dia, mes) {
    if (dia < 1 || dia > 31) return "Por favor introduza um dia entre 1 e 31.";
    if (mes < 1 || mes > 12) return "Por favor introduza um mês entre 1 e 12.";
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30)
      return "Por favor introduza um dia entre 1 e 30.";
    if (mes === 2 && dia > 28)
      return "Por favor introduza um dia entre 1 e 28.";
    const estacao = {
      1: "Inverno",
      2: "Inverno",
      3: "Primavera",
      4: "Primavera",
      5: "Primavera",
      6: "Verão",
      7: "Verão",
      8: "Verão",
      9: "Outono",
      10: "Outono",
      11: "Outono",
      12: "Inverno",
    };
    if (mes === 1 && dia < 21) {
      return estacao[12];
    } else if (dia < 21) {
      return estacao[mes - 1];
    }
    return estacao[mes];
  }
  const contagemEstacoes = {
    Inverno: 0,
    Primavera: 0,
    Verão: 0,
    Outono: 0,
  };
  datasDeReproducao.forEach((dataReproducao) => {
    const data = new Date(dataReproducao);
    const diaDoMes = data.getUTCDate();
    const mesDoAno = data.getUTCMonth() + 1;
    const estacao = calculaEstacaoDoAno(diaDoMes, mesDoAno);
    contagemEstacoes[estacao]++;
  });
  let estacaoMaisOuvida = "";
  let maxOcorrencias = 0;
  for (const estacao in contagemEstacoes) {
    if (contagemEstacoes[estacao] > maxOcorrencias) {
      estacaoMaisOuvida = estacao;
      maxOcorrencias = contagemEstacoes[estacao];
    }
  }
  return estacaoMaisOuvida;
}

function horaMaisOuvida(reproducoes) {
  let contagemHoras = {};
  reproducoes.forEach((musica) => {
    let hora = new Date(musica.ts).getHours();
    contagemHoras[hora] = contagemHoras[hora] ? contagemHoras[hora] + 1 : 1;
  });
  console.log(contagemHoras);
  // Encontra o valor máximo
  const valorMaximo = Math.max(...Object.values(contagemHoras));
  let horasMaisFrequentes = Object.keys(contagemHoras).filter(
    (chave) => contagemHoras[chave] === valorMaximo
  );
  return horasMaisFrequentes;
}

const reproducoes = countPlays(data);
const tracksSemRepetir = countTracks(reproducoes);

export function CountThingsUser() {
  const [searchResults, setSearchResults] = useState([]);
  const tempoTotalMinutos = countTempoOuvido(reproducoes); // Chamando a função countTempoOuvido com as reproduções

  return (
    <div className="layout-user">
      <div className="relative flex justify-center w-full mt-6"
      onMouseLeave={(e) => setSearchResults ([])}> 
        <input
          onChange={(e) => setSearchResults(inputSearch(e.target.value))}
          type="text"
          placeholder="search..."
          className="flex bg-zinc-600 border px-4 h-10 w-80 rounded-3xl justify-center items-center "
        />
        <div className="absolute flex flex-col items-center bg-slate-900 w-full z-50">
          {searchResults.map((e) => (
            <div className="w-full p-2 bg-slate-800 text-white">{e}</div>
          ))}
        </div>
      </div>
      <div className="div-retros">
        <h1 className="tua-retro ">A tua Retrospectiva em números!</h1>
      </div>
      <div className="user-container">
        <div className="user-box">
          <p className="user">{reproducoes.length} músicas reproduzidas</p>
        </div>
        <div className="user-box">
          <p className="user">{tracksSemRepetir.length} faixas diferentes</p>
        </div>
        <div className="user-box">
          <p className="user">{tempoTotalMinutos} minutos ouvindo música</p>
        </div>
        <div className="user-box">
          <p className="user">
            Sua média diária é de {mediaDiaria(reproducoes)} por dia!
          </p>
        </div>
        <div className="user-box">
          <p className="user">
            {" "}
            {estacaoMaisOuvida()} é a sua estação favorita!
          </p>
        </div>
        <div className="user-box">
          <p className="user">
            És mais ativo às: {horaMaisOuvida(reproducoes)} horas 
          </p>
        </div>
      </div>
    </div>
  );
}
