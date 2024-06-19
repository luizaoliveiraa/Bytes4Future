async function getTodo() {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos"; //endpoint - caminho q quero que ela faça
    const res = await fetch(url, { method: "GET" }); //para comunicar com a endpoint precisamos ter o método e caminho - se não colocar nenhum método é o GET - DEFAULT
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
}
getTodo()

// .then(() => console.log("terminado"));
