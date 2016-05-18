package br.com.unibratec.negocio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.unibratec.entidades.Contato;
import br.com.unibratec.excessoes.AgendaException;
@Service
public class FachadaImpl implements Fachada {
	@Autowired private ContatoService contatos;
	
	public void remover(Contato contato) throws AgendaException {
      contatos.remover(contato);
	}

	public List<Contato> listarTodos() throws AgendaException {
		return contatos.listarTodos();
	}

	public void salvar(Contato contato) throws AgendaException {
        contatos.salvar(contato);
	}

	public Contato buscarContatoEmail(String email) throws AgendaException {
		return contatos.buscarContatoEmail(email);
	}

	public Contato buscarContato(Long id) throws AgendaException {
		return contatos.buscarContato(id);
	}
	public List<Contato> listarAniverssariantes(int mes) throws AgendaException {
		return contatos.listarAniverssariantes(mes);
	}

}
