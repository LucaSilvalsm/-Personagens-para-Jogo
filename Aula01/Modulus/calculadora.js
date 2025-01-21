// calculadora.js

const velocidade_permitida = 100;
let transito = false;


function trajeto(transito){
    if(transito === true){
        return "Transito lento, Por favor reduza a velocidade e preste atenção no caminho"
        
    } else {
        return "Transito rápido, continue a andar"
    }
}
// Função sinal
function sinal(cores) {
   if (cores === "Vermelho"){
     return 'Por favor pare.';
   }else{
     return 'Continue a andar.';
   }
}

// Função velocidade
function velocidade(velocidade_atual) {
    if (velocidade_atual < velocidade_permitida) {
        return 'Velocidade permitida.';
    } else {
        return 'Velocidade ultrapassada.';
    }
}

// Exportando as funções como um objeto
module.exports = {
    sinal: sinal,
    velocidade: velocidade,
    trajeto: trajeto
};
