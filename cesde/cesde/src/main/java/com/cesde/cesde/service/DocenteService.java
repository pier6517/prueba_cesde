package com.cesde.cesde.service;

import com.cesde.cesde.model.Docente;
import java.util.List;
import java.util.Optional;

public interface DocenteService {

    /**
     * Método que retorna todos los docentes
     */
    List<Docente> findAll();

    /**
     * Método que retorna un docente por su id
     */
    Optional<Docente> findById(Long id);
    
    /**
     * Método que guarda un docente en la base de datos
     */
    Docente save(Docente docente);

    /**
     * Método que elimina un docente de la base de datos
     */
    void delete(Long id);
}