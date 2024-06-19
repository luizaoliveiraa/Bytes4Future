import data from "../spotify_data.history.json";
import moment from "moment";

export function sixMonthsArtists() {
  const mostRecentDate = data
    .filter((e) => e.master_metadata_track_name !== null)
    .toSorted(
      (a, b) => new Date(b.ts).valueOf() - new Date(a.ts).valueOf()
    )[0].ts;

  const dataAtual = moment(new Date(mostRecentDate));
  console.log("hoje", dataAtual.toDate());

  const dataInicio = dataAtual.subtract(6, "months");
  console.log("6atras", dataInicio.toDate());
  const reproducoesUltimos6Meses = data
    .filter((e) => e.master_metadata_track_name !== null)
    .filter((reproducao) => {
      const dataReproducao = moment(reproducao.ts);
      const isAfterBeggining = moment(reproducao.ts).isAfter(dataInicio);
      const isBeforeToday = moment(reproducao.ts).isBefore(dataAtual);
      // const res = dataReproducao.isBetween(dataInicio, dataAtual);
      return isAfterBeggining;
    });

  const tempoPorArtista = {};

  reproducoesUltimos6Meses.forEach((reproducao) => {
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

  const tempoTotalReproducao = artistasTempoArray.reduce(
    (total, reproducao) => total + reproducao.ms_played,
    0
  );
  return artistasTempoArray;
}

export function sixMonthsAlbums() {
  const mostRecentDate = data
    .filter((e) => e.master_metadata_track_name !== null)
    .toSorted(
      (a, b) => new Date(b.ts).valueOf() - new Date(a.ts).valueOf()
    )[0].ts;

  const dataAtual = moment(new Date(mostRecentDate));

  const dataInicio = dataAtual.subtract(6, "months");

  const reproducoesUltimos6Meses = data
    .filter((e) => e.master_metadata_track_name !== null)
    .filter((reproducao) => {
      const isAfterBeggining = moment(reproducao.ts).isAfter(dataInicio);
      console.log(isAfterBeggining);
      return isAfterBeggining;
    });
  const tempoPorAlbum = {};

  reproducoesUltimos6Meses.forEach((reproducao) => {
    const album = reproducao.master_metadata_album_album_name;
    const tempo = reproducao.ms_played;

    tempoPorAlbum[album] = (tempoPorAlbum[album] || 0) + tempo;
  });
  const albumsTempoArray = Object.entries(tempoPorAlbum).map(
    ([artista, tempoTotal]) => ({
      artista,
      tempoTotal,
    })
  );

  albumsTempoArray.sort((a, b) => b.tempoTotal - a.tempoTotal);

  albumsTempoArray.sort((a, b) => b.tempoTotal - a.tempoTotal);
  return albumsTempoArray;
  // // Estado para controlar quantos itens são exibidos
  // const [mostrarMais, setMostrarMais] = useState(10);

  // // Função para mostrar mais itens quando o botão é clicado
  // const mostrarMaisItens = () => {
  //   setMostrarMais(mostrarMais + 10);
  // };
}

export function sixMonthsTracks(date) {
  const dataAtual = moment(date);

  const dataInicio = dataAtual.clone().subtract(6, "months");

  const reproducoesUltimos6Meses = data
    .filter((e) => e.master_metadata_track_name !== null)
    .filter((reproducao) => {
      const dataReproducao = moment(reproducao.ts);
      return dataReproducao.isBetween(dataInicio, dataAtual);
    });

  const tempoPorArtista = {};

  reproducoesUltimos6Meses.forEach((reproducao) => {
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
  return artistasTempoArray;
  // Estado para controlar quantos itens são exibidos
  // const [mostrarMais, setMostrarMais] = useState(10);

  // // Função para mostrar mais itens quando o botão é clicado
  // const mostrarMaisItens = () => {
  //   setMostrarMais(mostrarMais + 10);
  // };
}
