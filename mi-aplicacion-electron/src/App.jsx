import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products/all')
      .then(response => {
        console.log('Data from server:', response.data);
        setData(response.data.data); // Aquí actualiza el estado con el array de productos
      })
      .catch(error => {
        console.error('Error fetching data from the backend:', error);
      });
  }, []);

  return (
    <div>
      <h2>Tabla de Datos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
