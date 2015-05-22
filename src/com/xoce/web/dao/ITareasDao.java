package com.xoce.web.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;

import org.springframework.stereotype.Repository;

import com.xoce.web.model.Tareas;

@Repository    
public class ITareasDao implements TareasDao {
	
	private List resultList;
	
	@PersistenceUnit
	private EntityManagerFactory emf;
	
    public void setEntityManagerFactory(EntityManagerFactory emf) {
        this.emf = emf;
    }
	
	@Override
	public List<Tareas> listTareas() {
	
		EntityManager entity = emf.createEntityManager();
		
		resultList = entity.createQuery("from Tareas").getResultList();
		return resultList;
	}

}
