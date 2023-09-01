const jogadorA = 0;
const jogadorB = 0;

if (jogadorA === jogadorB) {
    console.log("SIM");
    if (jogadorA === 0) {
        console.log("Bucha de Branco")
    } else if (jogadorA === 1) {
        console.log("Bucha de ÁS")
    } else if (jogadorA === 2) {
        console.log("Bucha de Dúque")
    } else if (jogadorA === 3) {
        console.log("Bucha de terno");
    } else if (jogadorA === 4) {
        console.log("Bucha de Quadra")
    } else if (jogadorA === 5) {
        console.log("Bucha de Quina")
    } else {
        console.log("Bucha de Sena")
    }
} else {
    console.log("NÃO");
}