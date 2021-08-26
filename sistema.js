let numeroDeAlunos = 10;
let contador = 0;

do {
    if(contador === 0) {
                console.log("O numero atual e Zero");
            } else if(contador % 2 == 0) {
                console.log("O numero e " + contador + " sendo Par.");
            } else {
                console.log("O numero e " + contador + " sendo Impar.")
            }
            contador++;
} while (contador <= numeroDeAlunos);

// while (contador <= numeroDeAlunos) { 
    
//     if(contador === 0) {
//         console.log("O numero atual e Zero");
//     } else if(contador % 2 == 0) {
//         console.log("O numero e " + contador + " sendo Par.");
//     } else {
//         console.log("O numero e " + contador + " sendo Impar.")
//     }
//     contador++; 
// }

// for (let contador = 0; contador <= numeroDeAlunos; contador++) {
//     // console.log(contador);

//     if(contador === 0) {
//         console.log("O número atual é 0.");
//     } else if (contador % 2 == 0) {
//         console.log("O número é " + contador + " é Par.");
//     } else {
//         console.log("O número é " + contador + " é Ímpar.");
//     }
// }

// let listaDeAlunos = ["Marcelo", "Ju", "Cleber", "Wesley", "Adriano"];

// for (const aluno of listaDeAlunos) {
//     console.log(aluno);
// }

// listaDeAlunos.forEach(aluno => {
//     console.log(aluno);
// });