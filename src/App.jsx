import { useEffect, useState } from 'react'
import GameList from './components/gameList/GameList'
import NavBar from './components/navBar/NavBar';
import './App.css'
<<<<<<< HEAD
import MoreInfo from './components/moreInfo/MoreInfo';
=======
import Cart from './components/cart/Cart';
>>>>>>> origin/ramaTade

function App() {

  // URL de la API externa que queremos consultar
  const URL = 'https://www.freetogame.com/api/games';

  // Estado para almacenar los datos obtenidos de la API
  const [Data, setData] = useState([]);

  // Estado para indicar si la solicitud está en curso
  const [Cargando, setCargando] = useState(true);

  // Estado para almacenar cualquier error que ocurra durante la solicitud
  const [Error, setError] = useState(null);

  // useEffect se utiliza para realizar la solicitud a la API cuando el componente se monta
  useEffect(() => {
    // Función asincrónica para realizar la solicitud a la API
    const fetchData = async () => {
      try {
        // Realizar la solicitud a la URL especificada
        const response = await fetch(URL);

        // Verificar si la respuesta es exitosa (código de estado 200-299)
        if (!response.ok) {
          throw new Error('Error en la red: ' + response.statusText);
        }

        // Convertir la respuesta a formato JSON
        const datos = await response.json();

        // Actualizar el estado con los datos obtenidos de la API
        setData(datos);

        // Indicar que la solicitud ha finalizado
        setCargando(false);
      } catch (error) {
        // Capturar cualquier error que ocurra durante la solicitud y actualizar el estado de error
        setError(error);

        // Indicar que la solicitud ha finalizado (incluso si hubo un error)
        setCargando(false);
      }
    };

    // Llamar a la función fetchData para realizar la solicitud a la API
    fetchData();

  }, []); // El array vacío indica que este efecto se ejecuta solo una vez, al montar el componente

<<<<<<< HEAD
  const [modalShow, setModalShow] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
=======
  const [optSmModal, setOptSmModal] = useState(false);

  const toggleOpen = () => setOptSmModal(!optSmModal);

  

 



>>>>>>> origin/ramaTade

  const openModal = (game) => {
    setSelectedGame(game); // Establece el juego seleccionado
    setModalShow(true);
  };
  
  const hideModal = () => {
    setSelectedGame(null); // Resetea el juego seleccionado al cerrar
    setModalShow(false);
  };

  return (

    <>
<<<<<<< HEAD
      <NavBar />
      

      <div className='text-2xl'>
        <GameList Data={Data} openModal={openModal} />
=======
      <NavBar toggleOpen={toggleOpen}/>
      <Cart toggleOpen={toggleOpen} setOptSmModal={setOptSmModal} optSmModal={optSmModal}/>

      <div className='text-2xl'>
        <GameList Data={Data} toggleOpen={toggleOpen} setOptSmModal={setOptSmModal} optSmModal={optSmModal} />
>>>>>>> origin/ramaTade
      </div>
      {selectedGame && <MoreInfo Data={selectedGame} showModal={modalShow} hideModal={hideModal} />}
    </>
  )
}

export default App