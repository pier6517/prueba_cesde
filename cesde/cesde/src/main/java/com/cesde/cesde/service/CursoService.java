// Interface que define los métodos que se pueden realizar sobre la entidad Curso
package com.cesde.cesde.service;

import com.cesde.cesde.model.Curso;
import java.util.List;
import java.util.Optional;

/**
 * Interface que define los métodos que se pueden realizar sobre la entidad Curso
 * @version 1.0
 */
public interface CursoService
{
    /**
     * Método que retorna todos los cursos
     * @return List<Curso>
     */
    List<Curso> findAll();

    /**
     * Método que retorna un curso por su id
     * @param id
     * @return Curso
     */
    Optional<Curso> findById(Long id);
    
    /**
     * Método que guarda un curso en la base de datos
     * @param curso
     * @return Curso
     */
    Curso save(Curso curso);
    
    /**
     * Método que elimina un curso de la base de datos
     * @param id
     * @return void
     */
    void delete(Long id);
}