package com.xoce.web.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xoce.web.dao.TareasDao;
import com.xoce.web.model.Tareas;
import com.xoce.web.repository.TareaRepository;

@Service
public class ITtareasService implements TareasService {

//	TareasDao tareasDao;
//	public void setTareasDao(TareasDao td){
//		this.tareasDao = td;
//	}
	@Autowired TareaRepository tareaRepository;
	
//	@Autowired
//	ITtareasService(TareaRepository tareaRepository){
//		this.tareaRepository = tareaRepository;
//	}
	 
	@Transactional
	@Override
	public List<Tareas> listTareas() {
//		return this.tareasDao.listTareas();
		return this.tareaRepository.ListTodos();
	}
	public Tareas findOne(){
		return this.tareaRepository.findOne(0);
	}
}
