package br.com.unibratec.ui.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.unibratec.entidades.Contato;
import br.com.unibratec.entidades.Error;
import br.com.unibratec.excessoes.AgendaException;
import br.com.unibratec.negocio.Fachada;

@RequestMapping("/contatos")
@RestController
public class ContatoController {
	@Autowired
	private Fachada fachada;

	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> listarContatos() {
		try {
			return new ResponseEntity<List<Contato>>(fachada.listarTodos(), HttpStatus.OK);
		} catch (AgendaException e) {
			return new ResponseEntity<Error>(e.getErro(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/salvar", method = RequestMethod.POST , produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> salvar(@RequestBody Contato contato){
		try {
			fachada.salvar(contato);
			return new ResponseEntity<Contato>(contato, HttpStatus.OK);
		} catch (AgendaException e) {
			return new ResponseEntity<Error>(e.getErro(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/remover", method = RequestMethod.POST , produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> remover(@RequestBody Contato contato){
        try {
          //if(true) throw new AgendaException(new Error(01, "xablau aqui","xablau interno"));
            fachada.remover(contato);
            return new ResponseEntity<Contato>(contato, HttpStatus.OK);
        } catch (AgendaException e) {
            return new ResponseEntity<Error>(e.getErro(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	

}
