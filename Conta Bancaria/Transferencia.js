module.exports = class Transferencia{
    constructor(usuario_mandante,usuario_recebido,valor){
        this.usuario_mandante = usuario_mandante;
        this.usuario_recebido = usuario_recebido;
        this.valor = valor;
        this.DataRecebida = new Date();
        
    }
}