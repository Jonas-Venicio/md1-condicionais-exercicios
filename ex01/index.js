const play1 = "tesoura";
const play2 = "pedra";

if (play1 === "pedra" && play2 === "papel") {
    console.log("Play2 Venceu");
} else if (play2 === "pedra" && play1 === "papel") {
    console.log("Play1 Venceu");
} else if (play1 === "tesoura" && play2 === "papel") {
    console.log("Play1 Venceu");
} else if (play1 === "papel" && play2 === "tesoura") {
    console.log("Play2 Venceu");
} else if (play1 === "pedra" && play2 === "tesoura") {
    console.log("Play1 Venceu");
} else if (play1 === "tesoura" && play2 === "pedra") {
    console.log("Play2 Venceu");
} else {
    console.log("Empate");
}






