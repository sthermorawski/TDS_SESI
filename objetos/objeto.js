const aluno ={
    nome: "sther",
    idade: 16,
    curso: "desenvolvimento de sistemas"
}

console.log(aluno);
console.log(aluno.nome);       //recomendado
console.log(aluno["idade"]);   //funciona 

aluno.matricula = "2025A";  //adicionas
aluno.idade = 18            //alterar
delete aluno.curso;         //remover

console.log(aluno);
