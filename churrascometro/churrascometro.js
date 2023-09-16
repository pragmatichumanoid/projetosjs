//carne-400g por adulto caso o evento seja mais de 6 horas, sera 650g p/pessoa
//cerveja-1200ml por pessoa, caso + de 6 horas sera 2000ml
//refri/agua-1000ml por pessoa, caso +  de  6 horas seras 1500ml
//crianças valem meio adulto, 05


let inputA = document.getElementById("adult");
let inputC = document.getElementById("crian");
let inputD = document.getElementById("durac");

let result = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adults = inputA.value;
    let criancas = inputC.value;
    let duracao = inputD.value;

    let qtdCarne = carnePorPessoa(duracao) * adults + (carnePorPessoa(duracao) / 2 * criancas);
    console.log(`A quantidade de carne por pessoas em g será-${qtdCarne}`)
    let qtdCerveja = cvjPorPessoa(duracao) * adults;
    console.log(`A quantidade de cerveja por pessoas em ml será-${qtdCerveja}`)
    let qtdReAg = refriAguaPorPessoa(duracao) * adults + (refriAguaPorPessoa(duracao) / 2 * criancas);
    console.log(`A quantidade de refrigerante ou água por pessoas em ml será-${qtdReAg}`)

    result.innerHTML = `<p> A quantidade necessária de carne será de ${qtdCarne}g<p>`
    result.innerHTML += `<p> A quantidade necessária de cerveja para adultos  será de ${qtdCerveja}ml<p>`
    result.innerHTML += `<p> A quantidade necessária água ou refrigerante será de ${qtdReAg}ml<p>`
}
function carnePorPessoa(duracao) {
    if (duracao > 6) {
        return 650;
    } else {
        return 400;
    }

}
function cvjPorPessoa(duracao) {
    if (duracao > 6) {
        return 650;
    } else {
        return 400;
    }

}
function refriAguaPorPessoa(duracao) {
    if (duracao > 6) {
        return 650;
    } else {
        return 400;
    }

}