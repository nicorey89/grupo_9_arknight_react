import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const UsersDetail = () => {
    const [usuario, setUsuario] = useState([])
    const [imagen, setImagen] = useState([])
    const params = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:3001/api/users/${params.id}`)
        .then((response) => {
          return response.json()
        })
        .then((objeto) => {
            setUsuario(objeto.user)
            setImagen(objeto.user.avatar)
        })
    }, [])
    return (
        <div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h3 className="m-0 font-weight-bold text-gray-800">{usuario.nombre} {usuario.apellido}</h3>
				</div>
				<div className="card-body">
					<div className="text-center">
						<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "20rem"}} src={`/images/${imagen}`} alt="Imagen" />
					</div>
					<p>Email: {usuario.email}</p>
					<p>Direccion: {usuario.direccion}</p>
					<p>Telefono: {usuario.telefono}</p>
					<p>Codigo postal: {usuario.codigo_postal}</p>
					<p>Localidad: {usuario.localidad}</p>
				</div>
			</div>
		</div>
    )
}