import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductsDetail = () => {
    const [producto, setProducto] = useState([])
    const [imagen, setImagen] = useState([])
    const params = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:3001/api/products/${params.id}`)
        .then((response) => {
          return response.json()
        })
        .then((objeto) => {
            setProducto(objeto.product)
            setImagen(objeto.product.imagen)
        })
    }, [])
    return (
        <div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h3 className="m-0 font-weight-bold text-gray-800">{producto.titulo}</h3>
				</div>
				<div className="card-body">
					<div >
						<h3>{producto.modelo}</h3>
					</div>
					<div className="text-center">
						<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "20rem"}} src={`/images/${imagen}`} alt="Imagen" />
					</div>
					<p>Descipcion:</p>
					<p>{producto.descripcion}</p>
					<p>Precio: {producto.precio}</p>
					<p>Descuento: {producto.descuento} %Off</p>
					<p>Cuotas: {producto.cuotas}</p>
				</div>
			</div>
		</div>
    )
}