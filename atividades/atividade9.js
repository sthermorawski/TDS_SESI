function saudacao(nome, horario){
    if(horario >= 0 && horario<= 11){
        console.log(`tenha um bom dia! ${nome}`);
    }
    else if(horario >= 12 && horario <= 17){
        console.log(`tenha uma boa tarde! ${nome}`);
    }
    else if (horario>= 18 && horario <= 23){
        console.log(`tenham uma boa noite! ${nome}`);
    }
}
let nome = "sther";
let horario = 17;
saudacao(nome, horario);
