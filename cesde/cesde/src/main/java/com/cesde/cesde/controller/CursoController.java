package com.cesde.cesde.controller;

import com.cesde.cesde.model.Curso;
import com.cesde.cesde.service.CursoService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.cesde.cesde.helpers.ResponseHandler;

import java.util.List;
import java.util.Optional;

/**
 * Clase que define los métodos que se pueden realizar sobre la entidad Curso
 * @version 1.0
 */
@RestController
@RequestMapping("/api/cursos")
public class CursoController
{
    @Autowired
    private CursoService cursoService;

    /**
     * Método que retorna todos los cursos
     * @return List<Curso>
     */
    @GetMapping
    public List<Curso> getAllcursos()
    {	
        return cursoService.findAll();
    }

    /**
     * Método que retorna un curso por su id
     * @param id
     * @return Curso
     */
    @GetMapping("/{id}")
    public ResponseEntity<Curso> getCursoById(@Valid @PathVariable Long id)
    {
        Optional<Curso> curso = cursoService.findById(id);
        return curso.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Método que guarda un curso en la base de datos
     * @param curso
     * @return Curso
     */
    @PostMapping
    public Curso createCurso(@Valid @RequestBody Curso curso)
    {
        return cursoService.save(curso);
    }

    /**
     * Método que actualiza un curso en la base de datos
     * @param curso
     * @return Curso
     */
    @PutMapping("/{id}")
    public ResponseEntity<Curso> updateCurso(@Valid @PathVariable Long id, @RequestBody Curso cursoDetails)
    {
        Optional<Curso> curso = cursoService.findById(id);
        if (curso.isPresent())
        {
            Curso updateCurso = curso.get();
            
            updateCurso.setNombre(cursoDetails.getNombre());
            updateCurso.setDescripcion(cursoDetails.getDescripcion());
            updateCurso.setDuracionEnSemanas(cursoDetails.getDuracionEnSemanas());
            updateCurso.setPrecio(cursoDetails.getPrecio());
            updateCurso.setFechaInicio(cursoDetails.getFechaInicio());
            updateCurso.setDocente(cursoDetails.getDocente());

            return ResponseEntity.ok(cursoService.save(updateCurso));
        } else {
            return ResponseEntity.notFound().build();
        }
    }    

    /**
     * Método que elimina un curso de la base de datos
     * @param id
     * @return void
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCurso(@Valid @PathVariable Long id)
    {
    	Optional<Curso> curso = cursoService.findById(id);
        
		if (curso.isPresent() && curso.get().getDocente() == null) {
			cursoService.delete(id);
			return ResponseHandler.generateResponse("Curso eliminado", HttpStatus.OK, curso, "200");
		} else {
			return ResponseHandler.generateResponse("No se puede eliminar el curso", HttpStatus.BAD_REQUEST, curso, "400");			
		}
    }
}