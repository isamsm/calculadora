const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const p = document.getElementById("resultado");

function somar() {
    const soma = Number(n1.value) + Number(n2.value);
    p.textContent = "O resultado é igual a " + soma;

} function subtrair() {
    const subtracao = Number(n1.value) - Number(n2.value);
    p.textContent = "O resultado é igual a " + subtracao;

} function multiplicar() {
    const multiplicacao = Number(n1.value) * Number(n2.value);
    p.textContent = "O resultado é igual a " + multiplicacao;

} function dividir() {
    const divisao = Number(n1.value) / Number(n2.value);
    p.textContent = "O resultado é igual a " + divisao;
}
