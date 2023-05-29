import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Imagen = require.context('../../assets', true)

export const ProductsDetail = () => {
    const [producto, setProducto] = useState([])
    const params = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:3001/api/products/${params.id}`)
        .then((response) => {
          return response.json()
        })
        .then((objeto) => {
            setProducto(objeto.product)
        })
    }, [])
    return (
        <div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">{producto.titulo}</h5>
				</div>
				<div className="card-body">
					<div >
						<h6>{producto.titulo} {producto.modelo}</h6>
					</div>
					<div className="text-center">
						<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "20rem"}} src={Imagen('./default-image.png')} alt="Imagen" />
					</div>
					<p>{producto.descripcion}</p>
				</div>
			</div>
		</div>
    )
}