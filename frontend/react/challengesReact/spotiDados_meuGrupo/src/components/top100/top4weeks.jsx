import data from "../spotify_data.history.json";
import moment from 'moment';

export function fourWeeksArtists(date){
  const dataAtual = moment(date);

  const dataInicio = dataAtual.clone().subtract(4,'weeks' );

  const reproducoesUltimas4Semanas = data.filter((e) => e.master_metadata_track_name !== null).filter((reproducao) => {
  const dataReproducao = moment(reproducao.ts);
  return dataReproducao.isBetween(dataInicio, dataAtual); 
  });

  const tempoPorArtista = {};

  reproducoesUltimas4Semanas.forEach((reproducao) => {
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
  const [mostrarMais, setMostrarMais] = useState(10);
  const mostrarMaisItens = () => {
    setMostrarMais(mostrarMais + 10);
  };
}

 export function fourWeeksAlbums(date){
  const dataAtual = moment(date);

  const dataInicio = dataAtual.clone().subtract(4,'weeks' );

  const reproducoesUltimas4Semanas = data.filter((e) => e.master_metadata_track_name !== null).filter((reproducao) => {
  const dataReproducao = moment(reproducao.ts);
  return dataReproducao.isBetween(dataInicio, dataAtual); 
  });


  const tempoPorArtista = {};

  reproducoesUltimas4Semanas.forEach((reproducao) => {
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

  artistasTempoArray.sort((a, b) => b.tempoTotal - a.tempoTotal);

  // Estado para controlar quantos itens são exibidos
  const [mostrarMais, setMostrarMais] = useState(10);

  // Função para mostrar mais itens quando o botão é clicado
  const mostrarMaisItens = () => {
    setMostrarMais(mostrarMais + 10);
  };
 }

 export function fourWeeksTracks(date){
  const dataAtual = moment(date);

  const dataInicio = dataAtual.clone().subtract(4,'weeks' );

  const reproducoesUltimas4Semanas = data.filter((e) => e.master_metadata_track_name !== null).filter((reproducao) => {
  const dataReproducao = moment(reproducao.ts);
  return dataReproducao.isBetween(dataInicio, dataAtual); 
  });


  const tempoPorArtista = {};

  reproducoesUltimas4Semanas.forEach((reproducao) => {
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
 }