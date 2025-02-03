package com.cesde.cesde.service.impl;

import com.cesde.cesde.model.Docente;
import com.cesde.cesde.repository.DocenteRepository;
import com.cesde.cesde.service.DocenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocenteServiceImpl implements DocenteService
{
    @Autowired
    private DocenteRepository docenteRepository;

    @Override
    public List<Docente> findAll()
    {
        return docenteRepository.findAll();
    }

    @Override
    public Optional<Docente> findById(Long id)
    {
        return docenteRepository.findById(id);
    }

    @Override
    public Docente save(Docente docente)
    {
        return docenteRepository.save(docente);
    }

    @Override
    public void delete(Long id)
    {
        docenteRepository.deleteById(id);
    }
}