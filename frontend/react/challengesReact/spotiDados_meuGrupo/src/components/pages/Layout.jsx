// Layout.jsx

import { Outlet } from "react-router-dom";
import sidebarImage from "../Logo.png";

import { LuLibrary } from "react-icons/lu";
import { MdHome } from "react-icons/md";
import { CountThingsUser } from "../userThings/userReq";

function Layout({ navigateTo }) {
  // Adicione um estado para controlar a visibilidade do CountThingsUser
  // const [showCountThingsUser, setShowCountThingsUser] = useState(false);

  // // Função para alternar a visibilidade do CountThingsUser
  // const toggleCountThingsUser = () => {
  //   setShowCountThingsUser(!showCountThingsUser);
  // };

  return (
    <div className="layout">
      <div className="sidebar">
        <img
          src={sidebarImage}
          alt="Imagem da Sidebar"
          className="sidebar-image"
        />
        <ul>
          <div className="icons">
            <div className="flex flex-col pl-5 gap-4">
              <div onClick={() => navigateTo("/Home")}>
                <p className="homebtn">
                  <SideBarIcon icon={<MdHome size="40" />} />
                  Inicio
                </p>
              </div>
              <p
                className="biblioteca-btn"
              >
                <SideBarIcon icon={<LuLibrary size="40" />} /> Biblioteca
              </p>
            </div>
          </div>

          {/* <button className="sidebar-button" onClick={() => {}}>
            Retrospectiva
          </button> */}
          <button
            className="sidebar-button"
            onClick={() => navigateTo("/Albums")}
          >
            Top Álbuns
          </button>
          <button
            className="sidebar-button"
            onClick={() => navigateTo("/Músicas")}
          >
            Top Faixas
          </button>
          <button
            className="sidebar-button"
            onClick={() => navigateTo("/Artists")}
          >
            Top Artistas
          </button>
        </ul>
      </div>

      {/* <div className="compUser"> */}
      {/* Renderize o CountThingsUser com base no estado de visibilidade
        {showCountThingsUser && <CountThingsUser />} */}
      {/* <CountThingsUser/> */}
      {/* </div> */}
      <Outlet />
    </div>
  );
}

const SideBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

export default Layout;
