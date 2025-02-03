package com.cesde.cesde.service.impl;

import com.cesde.cesde.model.Curso;
import com.cesde.cesde.repository.CursoRepository;
import com.cesde.cesde.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CursoServiceImpl implements CursoService
{
    @Autowired
    private CursoRepository cursoRepository;

    @Override
    public List<Curso> findAll()
    {
        return cursoRepository.findAll();
    }

    @Override
    public Optional<Curso> findById(Long id)
    {
        return cursoRepository.findById(id);
    }

    @Override
    public Curso save(Curso curso)
    {
        return cursoRepository.save(curso);
    }

    @Override
    public void delete(Long id)
    {
        cursoRepository.deleteById(id);
    }
}