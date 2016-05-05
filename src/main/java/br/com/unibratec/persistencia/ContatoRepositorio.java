package br.com.unibratec.persistencia;

import org.springframework.data.repository.CrudRepository;

import br.com.unibratec.entidades.Contato;

public interface ContatoRepositorio extends CrudRepository<Contato, Long> {
	public Contato findByEmail(String email);
}
