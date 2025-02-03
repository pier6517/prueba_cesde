// Modal para crear o editar un curso
import React, { useState, useEffect } from 'react';

const ModalCursos = ({ curso, setCurso, setModal }) => {
    const [docentes, setDocentes] = useState([]);

    useEffect(() => {
        fetch('/api/docentes')
            .then(response => response.json())
            .then(data => setDocentes(data));
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setCurso({ ...curso, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const method = curso.id ? 'PUT' : 'POST';
        const url = curso.id ? `/api/cursos/${curso.id}` : '/api/cursos';
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(curso)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setModal(false);
                    setCurso({});
                }
            });
    }

    return (
        <div className="modal" style={{ display: 'block' }} tabIndex="-1" id="modalCursos">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{curso.id ? 'Editar' : 'Agregar'} curso</h5>
                        <button type="button" className="btn-close" onClick={() => setModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" value={curso.nombre || ''} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcion" className="form-label">Descripción</label>
                                <textarea className="form-control" id="descripcion" name="descripcion" value={curso.descripcion || ''} onChange={handleChange}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="duracion_semanas" className="form-label">Duración (Semanas)</label>
                                <input type="number" className="form-control" id="duracion_semanas" name="duracion_semanas" value={curso.duracion_semanas || ''} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="precio" className="form-label">Precio</label>
                                <input type="number" className="form-control" id="precio" name="precio" value={curso.precio || ''} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fecha_inicio" className="form-label">Fecha de inicio</label>
                                <input type="date" className="form-control" id="fecha_inicio" name="fecha_inicio" value={curso.fecha_inicio || ''} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="docente_id" className="form-label">Docente</label>
                                <select className="form-select" id="docente_id" name="docente_id" value={curso.docente_id || ''} onChange={handleChange}>
                                    <option value="">Selecciona un docente</option>
                                    {docentes.map(docente => (
                                        <option key={docente.id} value={docente.id}>{docente.nombre}</option>
                                    ))}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCursos;