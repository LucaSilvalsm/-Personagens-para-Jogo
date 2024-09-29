const Conta = require("../Conta Bancaria/Conta");

module.exports = class Usuario {
    constructor(nome, sobrenome, email) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.conta = new Conta(this);
    }

    nome_completo() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
