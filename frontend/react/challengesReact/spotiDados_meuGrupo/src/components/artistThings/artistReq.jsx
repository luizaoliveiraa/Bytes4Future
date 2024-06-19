import { useParams } from "react-router-dom";
import data from "../spotify_data.history.json";
import React, { useMemo } from "react";


export function ArtistReq() {
  let { artista } = useParams();

  const obterDetalhesArtista = () => {
    const dadosArtista = data.filter(
      (item) => item.master_metadata_album_artist_name === artista
    );

    const totalReproducoes = dadosArtista.length;
    const faixasUnicas = [
      ...new Set(dadosArtista.map((item) => item.master_metadata_track_name)),
    ].length;
    const tempoTotalReproducao = dadosArtista.reduce(
      (total, item) => total + item.ms_played,
      0
    );

    const temposReproducaoFaixas = {};
    dadosArtista.forEach((item) => {
      const nomeFaixa = item.master_metadata_track_name;
      temposReproducaoFaixas[nomeFaixa] =
        (temposReproducaoFaixas[nomeFaixa] || 0) + item.ms_played;
    });
    const topFaixas = Object.entries(temposReproducaoFaixas)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([nomeFaixa, tempoReproducao]) => ({ nomeFaixa, tempoReproducao }));

    return {
      totalReproducoes,
      faixasUnicas,
      tempoTotalReproducao,
      topFaixas,
    };
  };

  const { totalReproducoes, faixasUnicas, tempoTotalReproducao, topFaixas } = useMemo(() => obterDetalhesArtista(), [artista]);

  function estacaoMaisOuvidaArtist(artista) {
    const reproducoes = data.filter(
      (e) => e.master_metadata_track_name !== null
    );
    const artistaReproducoes = reproducoes.filter(
      (e) => e.master_metadata_album_artist_name === artista
    );
    const datasDeReproducao = artistaReproducoes.map((objeto) => objeto.ts);

    function calculaEstacaoDoAno(dia, mes) {
      if (dia < 1 || dia > 31)
        return "Por favor introduza um dia entre 1 e 31.";
      if (mes < 1 || mes > 12)
        return "Por favor introduza um mês entre 1 e 12.";
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

  function obtemPlays() {
    const reproducoes = data.filter(
      (cadaElem) => cadaElem.master_metadata_track_name !== null
    );
    return reproducoes;
  }

  return (
    <div className="art-requisitos">
      <div className="div-artista bg-cover bg-contain">
        <div className="div-artista-content">
          <h1 className="text-5xl">{artista}</h1>
          <br />
          <span className=" inline-flex gap-2 ">
            <p className=" font-bold">Reproduções totais:</p>
            {totalReproducoes}
          </span>
          <br />
          <span className=" inline-flex gap-2">
            <p className="font-bold">Faixas diferentes: </p>
            {faixasUnicas}
          </span>
          <br />
          <span className=" inline-flex gap-2">
            <p className="font-bold">Estação Favorita:</p>
            {estacaoMaisOuvidaArtist(artista)}
          </span>{" "}
          <br />
          <span className=" inline-flex gap-2">
            <p className="font-bold">Tempo total ouvido:</p>
            {Math.floor(tempoTotalReproducao / 1000 / 60)} minutos
          </span>
          <br />
          <span className=" inline-flex gap-2">
            <p className="font-bold">Percentagem de Reproduções:</p>
            {((totalReproducoes / obtemPlays().length) * 100).toFixed(1)}%
          </span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="top-20-div">
        <p className="top-20">Top 20 faixas</p>
        {topFaixas.map(({ nomeFaixa, tempoReproducao }, index) => (
          <p key={nomeFaixa} className="leading-10 font-bold">
            #{index + 1}. {nomeFaixa} ({Math.floor(tempoReproducao / 1000 / 60)}{" "}
            minutos)
          </p>
        ))}
      </div>
    </div>
  );
}

// <p>Estação do ano que mais ouves: {estacaoDoAno(dataArtist)}</p>;
// const data1 = data.filter((a) => a.master_metadata_track_name != null);

// export const Artist = (props) => {
//   const dataArtist = data1.filter(
//     (a) => a.master_metadata_album_artist_name === props.artist
//   );

//   return (
//     <div>
//       <p>
//         {props.artist} representa {percentagemDoTotal(data1, dataArtist)}% das
//         tuas reproduções.
//       </p>
//       <p>Posição no top100: {posicaoNoTop(props.artist)}</p>
//       <p>Estação do ano que mais ouves: {estacaoDoAno(dataArtist)}</p>
//     </div>
//   );
// };

// function estacaoDoAno(data) {
//   const datas = data.map((elem) => new Date(elem.ts));

//   let count1 = 0;
//   let count2 = 0;
//   let count3 = 0;
//   let count4 = 0;

//   for (let i = 0; i < datas.length; i++) {
//     if (
//       (datas[i].getMonth() === 2 && datas[i].getDate() >= 20) ||
//       datas[i].getMonth() === 3 ||
//       (datas[i].getMonth() === 4 && datas[i].getDate() <= 20)
//     ) {
//       count1++;
//     }
//     if (
//       (datas[i].getMonth() === 5 && datas[i].getDate() >= 21) ||
//       datas[i].getMonth() === 6 ||
//       (datas[i].getMonth() === 7 && datas[i].getDate() <= 21)
//     ) {
//       count2++;
//     }
//     if (
//       (datas[i].getMonth() === 8 && datas[i].getDate() >= 22) ||
//       datas[i].getMonth() === 9 ||
//       (datas[i].getMonth() === 10 && datas[i].getDate() <= 21)
//     ) {
//       count3++;
//     }
//     if (
//       (datas[i].getMonth() === 11 && datas[i].getDate() >= 22) ||
//       datas[i].getMonth() === 0 ||
//       (datas[i].getMonth() === 1 && datas[i].getDate() <= 19)
//     ) {
//       count4++;
//     }
//   }

//   let array = [count1, count2, count3, count4];
//   let estacaomaxima = Math.max(...array);
//   let estacao = "";

//   if (estacaomaxima === count1) {
//     estacao = "Primavera";
//   }
//   if (estacaomaxima === count2) {
//     estacao = "Verão";
//   }
//   if (estacaomaxima === count3) {
//     estacao = "Outono";
//   }
//   if (estacaomaxima === count4) {
//     estacao = "Inverno";
//   }
//   return estacao;
// }

// function percentagemDoTotal(data1, data2) {
//   let total = totalReproducoes(data1);
//   let totalArtista = totalReproducoes(data2);

//   return Math.floor((totalArtista / total) * 10000) / 100;
// }

// function posicaoNoTop(artistname) {
//   const top100 = top100Artistas();
//   let posicao = "";

//   for (let i = 0; i < top100.length; i++) {
//     if (top100[i][0] === artistname) {
//       posicao += i + 1 + "º";
//       break; // Pare o loop assim que o artista for encontrado
//     }
//   }

//   // Se a posição ainda estiver vazia, o artista não está no top 100
//   if (posicao === "") {
//     posicao = "Este artista não está no teu top 100";
//   }

//   return posicao;
// }

// function estacaoMaisOuvida(artistName) {
//   const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);

//   repsDoArtista = reproducoes.filter
//   const datasDeReproducao = reproducoes.map((objeto) => objeto.ts);
//   function calculaEstacaoDoAno(dia, mes) {
//     if (dia < 1 || dia > 31) return "Por favor introduza um dia entre 1 e 31.";
//     if (mes < 1 || mes > 12) return "Por favor introduza um mês entre 1 e 12.";
//     if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30)
//       return "Por favor introduza um dia entre 1 e 30.";
//     if (mes === 2 && dia > 28)
//       return "Por favor introduza um dia entre 1 e 28.";
//     const estacao = {
//       1: "Inverno",
//       2: "Inverno",
//       3: "Primavera",
//       4: "Primavera",
//       5: "Primavera",
//       6: "Verão",
//       7: "Verão",
//       8: "Verão",
//       9: "Outono",
//       10: "Outono",
//       11: "Outono",
//       12: "Inverno",
//     };
//     if (mes === 1 && dia < 21) {
//       return estacao[12];
//     } else if (dia < 21) {
//       return estacao[mes - 1];
//     }
//     return estacao[mes];
//   }
//   const contagemEstacoes = {
//     Inverno: 0,
//     Primavera: 0,
//     Verão: 0,
//     Outono: 0,
//   };
//   datasDeReproducao.forEach((dataReproducao) => {
//     const data = new Date(dataReproducao);
//     const diaDoMes = data.getUTCDate();
//     const mesDoAno = data.getUTCMonth() + 1;
//     const estacao = calculaEstacaoDoAno(diaDoMes, mesDoAno);
//     contagemEstacoes[estacao]++;
//   });
//   let estacaoMaisOuvida = "";
//   let maxOcorrencias = 0;
//   for (const estacao in contagemEstacoes) {
//     if (contagemEstacoes[estacao] > maxOcorrencias) {
//       estacaoMaisOuvida = estacao;
//       maxOcorrencias = contagemEstacoes[estacao];
//     }
//   }
//   return estacaoMaisOuvida;
// }
