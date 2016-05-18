package br.com.unibratec.persistencia;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import br.com.unibratec.entidades.Contato;

public interface ContatoRepositorio extends CrudRepository<Contato, Long> {
	public Contato findByEmail(String email);
	
	@Query("FROM Contato where EXTRACT(MONTH FROM nascimento) = :month") 
	List<Contato> listarAniverssariantes(@Param("month") int month);
}
