export function YoutubeCard() {
  return (
    <div className="flex  items-center mt-50 flex-col  bg-black h-full">
      <div>
        <Imagem type="rounded" url="./caze.png"></Imagem>
      </div>
      <div className="inline-flex flex-col m-3 ">
        <div className="inline-flex">
          <Icon url="./icon-caze.png"></Icon>
          <div className="flex-col">
            <Heading
              type="big"
              conteudo="casimiro comenta real motivo de querer emagrecer"
            ></Heading>
            <Heading type="small" conteudo="cazenews"></Heading>
            <Info conteudo="43 mil visualizações • há 3 semanas"></Info>
          </div>
        </div>
      </div>
    </div>
  );
}

function Imagem(props) {
  return <img src={props.url} className="w-80 rounded-sd"></img>;
}

function Icon(props) {
  return (
    <div className="flex content-start">
      <img src={props.url} className="w-14 h-14 rounded-full m-2" />;
    </div>
  );
}
function Heading(props) {
  if (props.type === "big") {
    return <p className="font-bold text-white uppercase">{props.conteudo}</p>;
  }
  return (
    <div>
      {" "}
      <p className=" text-gray-400 uppercase">{props.conteudo}</p>
    </div>
  );
}

function Info(props) {
  return (
    <div className="text-gray-400 inline-flex">
      <p>{props.conteudo}</p>
    </div>
  );
}

// export function YoutubeCard(props) {
//   return (

//   );
// }

// function Imagem(props) {
//   return <img src={props.url} className="w-80 rounded-sd"></img>;
// }

// function Icon(props) {
//   return (
//     <div className="flex content-start">
//       <img src={props.url} className="w-14 h-14 rounded-full m-2" />;
//     </div>
//   );
// }
// function Heading(props) {
//   if (props.type === "big") {
//     return <p className="font-bold text-white uppercase">{props.conteudo}</p>;
//   }
//   return (
//     <div>
//       {" "}
//       <p className=" text-gray-400 uppercase">{props.conteudo}</p>
//     </div>
//   );
// }

// function Info(props) {
//   return (
//     <div className="text-gray-400 inline-flex">
//       <p>{props.conteudo}</p>
//     </div>
//   );
// }
