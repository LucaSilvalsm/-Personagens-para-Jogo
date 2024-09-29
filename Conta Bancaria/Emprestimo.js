const Parcela = require("./Parcela");

module.exports = class Emprestimo {
    constructor(valor, parcelas) {
        this.valor = valor;
        this.parcelas = []; // Esta é a lista de parcelas
        for (let i = 1; i <= parcelas; i++) {
            this.parcelas.push(new Parcela((valor * Emprestimo.#taxa) / parcelas, i));
        }
        this.DataEmprestimo = new Date();
    }

    static #taxa = 1.05;

    static get taxa() {
        return Emprestimo.#taxa;
    }
    static set taxa(nova_taxa) {
        Emprestimo.#taxa = 1 + nova_taxa / 100;
    }
}
