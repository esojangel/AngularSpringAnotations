package com.xoce.web.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xoce.web.model.Tareas;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TareaRepository extends JpaRepository<Tareas,Integer>{
	
//	@Query(
//            "Select t FROM Tareas t WHERE t.id_tarea = :id"
//    )
//    public List<Tareas> search(@Param("id") Integer id);
	
	@Query(value = "Select * FROM Tareas t WHERE true", nativeQuery = true)
	public List<Tareas> ListTodos();
}
