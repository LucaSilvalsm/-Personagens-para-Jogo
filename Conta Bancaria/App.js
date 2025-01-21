const Usuario = require("../Conta Bancaria/Usuario");
const Deposito = require("./Deposito");
const Transferencia = require("./Transferencia");
const Conta = require("./Conta");
const Emprestimo = require("./Emprestimo"); // Removido '||'

module.exports = class App {
    static #usuarios = [];

    static buscar_usuario(email) {
        const usuario = this.#usuarios.find(usuario => usuario.email === email);
        return usuario ?? null;
    }

    static cadastrar_usuario(nome, sobrenome, email) {
        const usuario_existente = App.buscar_usuario(email);
        if (!usuario_existente) { // Corrigido para 'usuario_existente'
            this.#usuarios.push(new Usuario(nome, sobrenome, email));
        }
    }

    static depositar(email, valor) {
        const usuario = App.buscar_usuario(email);
        if (usuario) {
            const novo_deposito = new Deposito(valor);
            usuario.conta.adicionar_deposito(novo_deposito);
        }
    }

    static transferencia(mandante_email, recebido_email, valor) {
        const mandante = App.buscar_usuario(mandante_email);
        const recebido = App.buscar_usuario(recebido_email);
        if (mandante && recebido) {
            const transferencia = new Transferencia(mandante_email, recebido_email, valor);
            mandante.conta.adicionar_transferencia(transferencia);
            recebido.conta.adicionar_transferencia(transferencia);
        }
    }

    static emprestar(email, valor, numero_parcelas) {
        const usuario = App.buscar_usuario(email);
        if (usuario) {
            const novo_emprestimo = new Emprestimo(valor, numero_parcelas);
            usuario.conta.adicionar_emprestimo(novo_emprestimo);
        }
    }

    static taxa_emprestimo(nova_taxa) {
        Emprestimo.taxa = nova_taxa;
    }
}
