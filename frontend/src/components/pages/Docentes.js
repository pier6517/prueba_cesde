// Lista de docentes
import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { show_alert } from '../functions';
import { Link } from 'react-router-dom';

const Docentes = () => {
    const [docentes, setDocentes] = useState([]);
    const [cursos, setCursos] = useState([]);

    const api_docentes = 'http://localhost:8080/api/docentes';
    const api_cursos = 'http://localhost:8080/api/cursos';

    useEffect(() => {
        Axios.get(api_docentes, { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } })
            .then(response => {
                setDocentes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        Axios.get(api_cursos, { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } })
            .then(response => {
                setCursos(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h2>Docentes</h2>
                    <Link to="javasript:void(0)" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDocentes">
                        <i className="fas fa-plus"></i> Agregar docente
                    </Link>
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-striped table-hover table-bordered" width="100%" cellSpacing="0" style={{ textAlign: 'center', marginBottom: '0' }}>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Nombre</th>
                                <th>Documento</th>
                                <th>Correo</th>
                                <th>Cursos asignados</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {docentes && docentes.map((docente, index) => (
                                <tr key={docente.id}>
                                    <td>{index + 1}</td>
                                    <td>{docente.nombre}</td>
                                    <td>{docente.documento}</td>
                                    <td>{docente.correo}</td>
                                    <td>
                                        {cursos && cursos.map(curso => (
                                            curso.id === docente.cursos[0].id ? <span key={curso.id}>{curso.nombre}<br /></span> : null
                                        ))}
                                    </td>
                                    <td>
                                        <Link to={`docente/${docente.id}`} className="btn btn-primary">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                        <Link to={`docente/edit/${docente.id}`} className="btn btn-warning">
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                        <Link to={`docente/delete/${docente.id}`} className="btn btn-danger">
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

export default Docentes;