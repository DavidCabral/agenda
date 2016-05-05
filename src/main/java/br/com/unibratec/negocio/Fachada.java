package br.com.unibratec.negocio;

import java.util.List;

import br.com.unibratec.entidades.Contato;
import br.com.unibratec.excessoes.AgendaException;

public interface Fachada {
	public void remover(Contato contato) throws AgendaException;

	public List<Contato> listarTodos() throws AgendaException;

	public void salvar(Contato contato) throws AgendaException;

	public Contato buscarContatoEmail(String email) throws AgendaException;

	public Contato buscarContato(Long id) throws AgendaException;

}
