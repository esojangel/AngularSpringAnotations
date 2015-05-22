package com.xoce.web.service;

import java.util.List;

import com.xoce.web.model.Tareas;

public interface TareasService {
	public List<Tareas> listTareas();
	public Tareas findOne();
}
