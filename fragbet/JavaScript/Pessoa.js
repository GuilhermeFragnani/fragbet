const pessoa = {
    nome: "Ana",
    idade: 30,
    saudacao: function(){
        return "Olá, meu nome é ${this.nome}, e tenho ${idade}"
    }
};
console.log(pessoa.nome); //Acessa a propriedade
console.log(pessoa.saudacao()); //Executa o método