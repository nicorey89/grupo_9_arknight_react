import { useState, useEffect } from "react";

export const Users = () => {
    const [articulos, setArticulos] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:3001/api/users')
        .then((response) => {
          return response.json()
        })
        .then((articulos) => {
            
          setArticulos(articulos.users)
        })
    }, [])

    return (
        <div>
          <div>
              <h3>cantidad de articulos: {articulos.length}</h3>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>emial</th>
              </tr>
            </thead>
            <tbody>
              {articulos.map(user => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <a href={`/users/${user.id}`}><td>{user.nombre}</td></a>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
}