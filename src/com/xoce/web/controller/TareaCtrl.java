package com.xoce.web.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xoce.web.model.Tareas;
import com.xoce.web.service.TareasService;

@Controller
@RequestMapping("tareas")
public class TareaCtrl {
	
	@Resource
	private TareasService tareasService;

	public void setTareasService(TareasService  ts){
		this.tareasService = ts; 
	}
	
	@RequestMapping("/listar")
	public @ResponseBody List<Tareas> listar(){
		return this.tareasService.listTareas();
	}
	@RequestMapping("/una")
	public @ResponseBody Tareas una(){
		Tareas tarea = this.tareasService.findOne();
		System.out.println(tarea);
		return tarea;
	}

}

