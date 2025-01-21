module.exports = class Parcela {
    constructor(valor, numero_parcela){
        this.valor = valor;
        this.numero_parcela = numero_parcela;
        this.status = 'pendente';
    }
}  