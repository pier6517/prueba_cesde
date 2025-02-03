// Entidad Curso
package com.cesde.cesde.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "cursos")
public class Curso
{
	// Atributos
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    // Validaciones de los atributos
    
    @NotNull
    @NotEmpty
    private String nombre;
    
    private String descripcion;
    
    @NotNull
    @Positive    
    private int duracionEnSemanas;
            
    @NotNull
    private BigDecimal precio;
       
    private LocalDateTime fechaInicio;
    @ManyToOne
    @JsonBackReference(value = "docente")
    @JoinColumn(name = "id_docente", referencedColumnName = "id")
    private Docente docente;

    // Constructor
	public Curso(String nombre, String descripcion, int duracionEnSemanas, BigDecimal precio, LocalDateTime fechaInicio, Docente docente) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.duracionEnSemanas = duracionEnSemanas;
		this.precio = precio;
		this.fechaInicio = fechaInicio;
		this.docente = docente;
	}
	
	// Constructor
    public Curso() { }

    // Getters y Setters
    public Long getId() { 
        return id; 
    }

    public void setId(Long id) { 
        this.id = id; 
    }

    public String getNombre() { 
        return nombre; 
    }

    public void setNombre(String nombre) { 
        this.nombre = nombre; 
    }

    public String getDescripcion() { 
        return descripcion; 
    }

    public void setDescripcion(String descripcion) { 
        this.descripcion = descripcion; 
    }

    public int getDuracionEnSemanas() { 
        return duracionEnSemanas; 
    }

    public void setDuracionEnSemanas(int duracionEnSemanas) { 
        this.duracionEnSemanas = duracionEnSemanas; 
    }

    public BigDecimal getPrecio() { 
        return precio; 
    }

    public void setPrecio(BigDecimal precio) { 
        this.precio = precio; 
    }

    public LocalDateTime getFechaInicio() { 
        return fechaInicio; 
    }

    public void setFechaInicio(LocalDateTime fechaInicio) { 
        this.fechaInicio = fechaInicio; 
    }	
    
    public Docente getDocente() {
    	return docente;
    }
    
	public void setDocente(Docente docente) {
		this.docente = docente;
	}

    // Metodo toString
    @Override
    public String toString()
    {
        return "Curso{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", duracionEnSemanas=" + duracionEnSemanas +
                ", precio=" + precio +
                ", fechaInicio=" + fechaInicio +
                ", docente=" + docente +
                '}';
    }
}
