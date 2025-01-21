const App = require("./App")

App.cadastrar_usuario("Lucas","Moreira","lukas.silvalsm@hotmail.com")
App.cadastrar_usuario("Amanda","Moreira","amanda.silva@hotmail.com")
App.cadastrar_usuario("Ewellyn","Souza","ewellyn.souza@hotmail.com")
App.cadastrar_usuario("Joana","Maria","joanamaria.silva@hotmail.com")


App.depositar("lukas.silvalsm@hotmail.com",2500)

App.transferencia("lukas.silvalsm@hotmail.com","ewellyn.souza@hotmail.com",1400)

App.taxa_emprestimo(10)
App.emprestar("lukas.silvalsm@hotmail.com",2500,10)
console.log(App.buscar_usuario("lukas.silvalsm@hotmail.com"))
console.table(App.buscar_usuario("lukas.silvalsm@hotmail.com").conta.emprestimos[0].parcelas);