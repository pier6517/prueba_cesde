// Entidad Docente
package com.cesde.cesde.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "docentes")
public class Docente {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String documento;
    private String correo;
    
    @OneToMany(mappedBy = "docente", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Curso> cursos = new ArrayList<>();
    
    // Constructor
    public Docente() { 

    }

    // Constructor con parámetros
    public Docente(String nombre, String documento, String correo)
    {
        this.nombre = nombre;
        this.documento = documento;
        this.correo = correo;
    }

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

    public String getDocumento() { 
        return documento; 
    }

    public void setDocumento(String documento) { 
        this.documento = documento; 
    }

    public String getCorreo() { 
        return correo; 
    }

    public void setCorreo(String correo) { 
        this.correo = correo; 
    }
    
	public List<Curso> getCursos() {
		return cursos;
	}
	
	public void setCursos(List<Curso> cursos) {
		this.cursos = cursos;
	}

    @Override
    public String toString() {
        return "Docente{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", documento='" + documento + '\'' +
                ", correo='" + correo + '\'' +
                ", cursos='" + cursos + '\'' +
                '}';
    }    
}