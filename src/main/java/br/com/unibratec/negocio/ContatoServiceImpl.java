package br.com.unibratec.negocio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.base.Objects;

import br.com.unibratec.entidades.Contato;
import br.com.unibratec.entidades.Error;
import br.com.unibratec.excessoes.AgendaException;
import br.com.unibratec.persistencia.ContatoRepositorio;

@Service
public class ContatoServiceImpl implements ContatoService {
  @Autowired
  private ContatoRepositorio contatos;

  public void remover(Contato contato) throws AgendaException {
    try {
      contatos.delete(contato);
    } catch (Exception e) {
      throw new AgendaException(
          new Error(01, "Não foi possível excluir o contato", e.getMessage()));
    }

  }

  public List<Contato> listarTodos() throws AgendaException {
    try {
      return (List<Contato>) contatos.findAll();
    } catch (Exception e) {
      throw new AgendaException(new Error(01, "Não listar os contatos", e.getMessage()));
    }

  }

  public void salvar(Contato contato) throws AgendaException {
    try {
      validaEmail(contato);
      contatos.save(contato);
    } catch (Exception e) {
    	e.printStackTrace();

      if (e instanceof AgendaException)
        throw (AgendaException) e;

      throw new AgendaException(new Error(01, "Não foi possível salvar o contato", e.getMessage()));
    }
  }

  private void validaEmail(Contato contato) throws AgendaException {
    Contato contatoEmail = buscarContatoEmail(contato.getEmail());
    if (contatoEmail!=null && !Objects.equal(contato, contatoEmail))
      throw new AgendaException(
          new Error(01, "O Email já foi usado para(" + contatoEmail.getNome() + ")", ""));

  }



  public Contato buscarContatoEmail(String email) throws AgendaException {
    try {
      return contatos.findByEmail(email);
    } catch (Exception e) {
      throw new AgendaException(new Error(01, "Não pesquisar o contato", e.getMessage()));
    }

  }

  public Contato buscarContato(Long id) throws AgendaException {
    try {
      return contatos.findOne(id);
    } catch (Exception e) {
      throw new AgendaException(new Error(01, "Não pesquisar o contato", e.getMessage()));
    }
  }

}
