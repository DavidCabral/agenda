package br.com.unibratec.entidades;

import java.io.Serializable;

public class Error implements Serializable {
	private static final long serialVersionUID = -1810437734880396494L;
	private int id;
	private String mensagem;
	private String mensagemInterna;

	public Error(int id, String mensagem ,  String mensagemInterna) {
		super();
		this.id = id;
		this.mensagem = mensagem;
		this.mensagemInterna = mensagemInterna;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}

	public String getMensagemInterna() {
		return mensagemInterna;
	}

	public void setMensagemInterna(String mensagemInterna) {
		this.mensagemInterna = mensagemInterna;
	}
	

}
