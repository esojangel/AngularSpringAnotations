package com.xoce.web.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tareas")
public class Tareas implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -6179890184869416028L;

	@Id
	@Column(name="id_tarea")
	Integer id;

	@Column(name="titulo")
	String titulo;
	
	@Column(name="des_tarea")
	String des_tarea;

	@Column(name="id_usuario")
	Integer id_usuario;
	
	@Column(name="complete")
	Boolean complete;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public Integer getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Integer id_usuario) {
		this.id_usuario = id_usuario;
	}
	public String getDes_tarea() {
		return des_tarea;
	}

	public void setDes_tarea(String des_tarea) {
		this.des_tarea = des_tarea;
	}

	public Boolean getComplete() {
		return complete;
	}

	public void setComplete(Boolean complete) {
		this.complete = complete;
	}
}
