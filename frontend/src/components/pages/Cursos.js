// Tabla con la lista de cursos y un modal para agregar o editar un curso
import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { show_alert } from '../functions';
import { Link } from 'react-router-dom';
import ModalCursos from '../modals/ModalCursos';

const Cursos = () => {

    const [cursos, setCursos] = useState(null);
    const [docentes, setDocentes] = useState(null);

    const api_cursos = 'http://localhost:8080/api/cursos';
    const api_docentes = 'http://localhost:8080/api/docentes';

    // Axios para obtener la lista de cursos
    useEffect(() => {
        Axios.get(api_cursos, { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } })
            .then(response => {
                // si hay respuesta consultar la lista de docentes
                Axios.get(api_docentes, { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } })
                    .then(response => {
                        setDocentes(response.data);
                        console.log(response.data);
                    })
                    .catch(error => {
                        show_alert('Error', 'No se pudo obtener la lista de docentes', 'error');
                    });
                // guardar la lista de cursos
                setCursos(response.data);
            })
            .catch(error => {
                show_alert('Error', 'No se pudo obtener la lista de cursos', 'error');
            });
    }, []);

    // Modales para agregar o editar un curso (.modalCursos)
    const handleModal = (e) => {
        const modal = document.getElementById('modalCursos');
        const backdrop = document.getElementsByClassName('modal-backdrop')[0];
        if (e.target.getAttribute('data-bs-target') === '#modalCursos') {
            modal.classList.add('show');
            modal.style.display = 'block';
            backdrop.classList.add('show');
        } else {
            modal.classList.remove('show');
            modal.style.display = 'none';
            backdrop.classList.remove('show');
        }
    }

    // Boton eliminar curso
    const handleDelete = (id) => {
        // Swal con confirmacion para eliminar un curso
        show_alert('Eliminar', '¿Estas seguro de eliminar el curso?', 'warning', id, `${api_cursos}/${id}`, 'Eliminar');
    }

    return (
        <div>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h2>Cursos</h2>
                    <Link to="javasript:void(0)" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCursos" onClick={handleModal}>
                        <i className="fas fa-plus"></i> Agregar curso
                    </Link>
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-striped table-hover table-bordered" width="100%" cellSpacing="0" style={{ textAlign: 'center', marginBottom: '0' }}>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Duración <br />(Semanas)</th>
                                <th>Precio</th>
                                <th>Fecha de inicio</th>
                                <th>Docente</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cursos && cursos.map((curso, index) => (
                                <tr key={curso.id}>
                                    <td>{index + 1}</td>
                                    <td>{curso.nombre}</td>
                                    <td>{curso.descripcion}</td>
                                    <td>{curso.duracionEnSemanas}</td>
                                    <td>{curso.precio}</td>
                                    <td>{new Date(curso.fechaInicio).toLocaleString()}</td>
                                    <td>{docentes && docentes.find(docente => docente.cursos[0].id === curso.id).nombre}</td>
                                    <td>
                                        <Link to="javasript:void(0)" className="btn btn-warning btn-sm" title='Editar' onClick={handleModal} data-bs-toggle="modal" data-bs-target="#modalCursos">
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                        <Link to="javasript:void(0)" className="btn btn-danger btn-sm" title='Eliminar' onClick={() => handleDelete(curso.id)}>
                                            <i className="fas fa-trash"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Cursos;