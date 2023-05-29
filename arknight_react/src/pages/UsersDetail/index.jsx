import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Imagen = require.context('../../assets', true)

export const UsersDetail = () => {
    const [usuario, setUsuario] = useState([])
    const params = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:3001/api/users/${params.id}`)
        .then((response) => {
          return response.json()
        })
        .then((objeto) => {
            setUsuario(objeto.user)
        })
    }, [])
    return (
        <div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">{usuario.nombre}</h5>
				</div>
				<div className="card-body">
					<div >
						<h6>{usuario.nombre} {usuario.apellido}</h6>
					</div>
					<div className="text-center">
						<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "20rem"}} src={Imagen('./default-image.png')} alt="Imagen" />
					</div>
					<p>{usuario.email}</p>
					<p>{usuario.avatar}</p>
				</div>
			</div>
		</div>
    )
}