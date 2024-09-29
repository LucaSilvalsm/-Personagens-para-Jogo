module.exports = class Conta {
    #saldo;

    constructor(usuario) {
        this.proprietario = usuario;
        this.#saldo = 0;
        this.depositos = [];
        this.emprestimos = []; // Corrigido para 'emprestimos'
        this.transferencias = []; // Corrigido para 'transferencias'
    }

    get saldo() {
        return this.#saldo;
    }

    adicionar_deposito(deposito) {
        this.#saldo += deposito.valor;
        this.depositos.push(deposito);
    }

    adicionar_emprestimo(emprestimo) {
        this.#saldo += emprestimo.valor; // Corrigido para '+=', não '=+'
        this.emprestimos.push(emprestimo); // Corrigido para 'emprestimos'
    }

    adicionar_transferencia(transferencia) {
        if (transferencia.usuario_recebido === this.proprietario.email) {
            this.#saldo += transferencia.valor;
            this.transferencias.push(transferencia); // Corrigido para 'transferencias'
        } else if (transferencia.usuario_mandante === this.proprietario.email) {
            this.#saldo -= transferencia.valor;
            this.transferencias.push(transferencia); // Corrigido para 'transferencias'
        }
    }
}
