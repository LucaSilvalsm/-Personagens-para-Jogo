const express = require('express'); // importando o express
const app = express(); // inciando o app

// criando rotas 

app.get('/',function(req,res){
    res.send("Hello, world Lucas seja bem vindo!");
})


app.get('/login',function(req,res){
    res.send("Seja bem vindo a tela de login");
})


app.get('/carrinho',function(req,res){
    res.send("Vamos realizar umas compras");
})


app.get('/historico',function(req,res){
    res.send("Hello, world Lucas seja bem vindo!");
})

// criando um parametros para a rota

app.get('/login/:nome',function(req,res){
    res.send("Seja bem vindo a tela de login");
})


app.listen(4000,function(erro){
    if(erro){
        console.log('Ocorreu um erro ao iniciar o server: ', erro);
    }else {
        console.log('Server rodando na porta 4000'); // logando a mensagem de sucesso ao iniciar o server
    }
})