package com.cesde.cesde.controller;

import com.cesde.cesde.model.Docente;
import com.cesde.cesde.service.DocenteService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.cesde.cesde.helpers.ResponseHandler;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/docentes")
public class DocenteController {

    @Autowired
    private DocenteService docenteService;

    @GetMapping
    public List<Docente> getAllDocentes() {        
        return docenteService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Docente> getDocenteById(@PathVariable Long id) {
        Optional<Docente> docente = docenteService.findById(id);
        return docente.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Docente createDocente(@Valid @RequestBody Docente docente) {
        return docenteService.save(docente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Docente> updateDocente(@Valid @PathVariable Long id, @RequestBody Docente docente) {
        Optional<Docente> docenteActual = docenteService.findById(id);
        if (docenteActual.isPresent()) {
            Docente updateDocente = docenteActual.get();
            
            updateDocente.setNombre(docente.getNombre());
            updateDocente.setDocumento(docente.getDocumento());
            updateDocente.setCorreo(docente.getCorreo());
            updateDocente.setCursos(docente.getCursos());

            return ResponseEntity.ok(docenteService.save(updateDocente));
        } else {
            return ResponseEntity.notFound().build();
        }        
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteDocente(@PathVariable Long id) {        
    	Optional<Docente> docente = docenteService.findById(id);
    	
    	if (docente.isPresent() && docente.get().getCursos().isEmpty()) {
            docenteService.delete(id);
            return ResponseHandler.generateResponse("Docente eliminado", org.springframework.http.HttpStatus.OK, docente, "204");
        } else {
            return ResponseHandler.generateResponse("No se puede eliminar el docente, tiene cursos asociados", org.springframework.http.HttpStatus.BAD_REQUEST, docente, "400");
        }
    }
}