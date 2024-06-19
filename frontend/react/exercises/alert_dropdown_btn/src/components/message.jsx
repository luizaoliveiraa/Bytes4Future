const name = "23";

function Message() {
  if (name) return <h1>Hello {name}</h1>; // aqui basicamente diz - se name is true - ou seja, se tiver name- retorne Hello e o nome
  return <h1>Hello World</h1>; // caso nao tenha nada na variável do nome retorna somente hello world
}

export default Message;
