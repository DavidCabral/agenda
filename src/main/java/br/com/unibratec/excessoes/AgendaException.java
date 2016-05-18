package br.com.unibratec.excessoes;

import br.com.unibratec.entidades.Error;

public class AgendaException extends Exception {
	private static final long serialVersionUID = 3099631619352148392L;
	private Error erro;

	public AgendaException(Error erro) {
		super();
		this.erro = erro;
	}

	public Error getErro() {
		return erro;
	}

	public void setErro(Error erro) {
		this.erro = erro;
	}
	
	
}
