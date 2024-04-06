import { useEffect, useState } from 'react'
//import GameList from './components/gameList/GameList'
import './App.css'

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



  return (
    <div className='text-2xl'>
      <GameList Data={Data} />
    </div>
  )
}

export default App
