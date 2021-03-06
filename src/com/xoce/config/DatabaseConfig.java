package com.xoce.config;

import java.util.Map;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@EnableJpaRepositories(basePackages = {"com.xoce.web.repository","com.xoce.web.service"})
@PropertySource("/WEB-INF/jdbc.properties")
@EnableTransactionManagement
public class DatabaseConfig {
	
	@Autowired
	private Environment env;
	
	@Bean(name = "dataSourse")
	public BasicDataSource dataSource(){ 
		BasicDataSource driverBasicDataSource = new BasicDataSource();
		driverBasicDataSource.setDriverClassName(env.getProperty("jdbc.driverClassName"));
		driverBasicDataSource.setUrl(env.getProperty("jdbc.databaseurl"));
		driverBasicDataSource.setUsername(env.getProperty("jdbc.username"));
		driverBasicDataSource.setPassword(env.getProperty("jdbc.password"));
		return driverBasicDataSource;
	}

	//Set up JPA and transactionManager
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
	    LocalContainerEntityManagerFactoryBean emf = new LocalContainerEntityManagerFactoryBean();
	    emf.setDataSource(dataSource());
	    emf.setPackagesToScan("com.xoce.web.model");
	    // let Hibernate know which database we're using.
	    // note that this is vendor specific, not JPA
	    Map<String, Object> opts = emf.getJpaPropertyMap();
	    opts.put("hibernate.dialect", env.getProperty("jdbc.dialect"));
	    opts.put("hibernate.show_sql", "true");
	    emf.setJpaPropertyMap(opts);
	    HibernateJpaVendorAdapter va = new HibernateJpaVendorAdapter();
	    emf.setJpaVendorAdapter(va);
	    return emf;
	}

	//Let us use PlatformTransactionManager directly to implement programmatic approach to implement transactions
	    //To start a new transaction you need to have a instance of TransactionDefinition
	 @Bean
//	 public PlatformTransactionManager transactionManager(){
	 public JpaTransactionManager transactionManager(){
	        JpaTransactionManager transactionManager=new JpaTransactionManager();
	        transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
	        return transactionManager;
	}
	 
//	 // Bean Dao's
//	 @Bean
//	 public ITareasDao tareaDao(){
//		 ITareasDao dao = new ITareasDao();
//		 dao.setEntityManagerFactory(entityManagerFactory().getObject());
//		 return dao;
//	 }
//	 // Bean de servicios
//	 @Bean
//	 public ITtareasService tareasService(){
//		 ITtareasService srv = new ITtareasService(null);
////		 srv.setTareasDao(this.tareaDao());
//		 return srv;
//	 }
	
}	
