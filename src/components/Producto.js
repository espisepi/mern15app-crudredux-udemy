import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productoActions';

const Producto = ({producto}) => {
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();

    // Confirmar si desea eliminarlo
    const confirmarEliminarProducto = id => {
        // preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un producto que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // pasarlo al action
                dispatch( borrarProductoAction(id) );
            }
        });
    }

    // funcion que refirige de forma programada
    const history = useHistory() // Habilitar history para redireccion
    const redireccionarEdicion = producto => {
        history.push(`/productos/editar/${producto.id}`);
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold"> $ {precio} </span></td>
            <td className="acciones">

                {/* <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link> */}
                <button
                    type="button"
                    onClick={ () => redireccionarEdicion(producto) }
                    className="btn btn-primary mr-2"
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => confirmarEliminarProducto(id) }
                >Eliminar</button>
            </td>
        </tr>
    );
}

export default Producto;