import { useState, useEffect } from "react";
export const Products = () => {
    const [productos, setProductos] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:3001/api/products')
        .then((response) => {
          return response.json()
        })
        .then((productos) => {
            
          setProductos(productos.products)
        })
    }, [])


    return (
        <div>
          <div>
              <h3>cantidad de articulos: {productos.length}</h3>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>detalle</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(product => {
                return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <a href={`/products/${product.id}`}><td>{product.titulo}</td></a>
                            <td>{product.descripcion}</td>
                        </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
};