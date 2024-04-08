import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import GameList from '../gameList/GameList';

const ButtonSearch = ({ Data }) => {
  // Estado para almacenar el valor del campo de búsqueda
  const [searchValue, setSearchValue] = useState('');

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Función para manejar la búsqueda
  const searchButton = () => {
    const buscador = searchValue.toLowerCase();
    console.log(buscador);

    // Aquí puedes realizar la lógica de búsqueda utilizando el valor de 'buscador'
    // Por ejemplo, podrías filtrar los datos de 'Data' para mostrar solo los que coincidan con la búsqueda
  };

  return (
    <div>
      <Form className="d-flex" id="buttonSearch" onSubmit={searchButton}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <Button variant="outline-success" type="submit">Search</Button>
      </Form>
    </div>
  );
};

ButtonSearch.propTypes = {
  Data: PropTypes.array
};

export default ButtonSearch;
