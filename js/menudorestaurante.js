var listaComida = ["Fettuccine", "Ravioli", "Espaguete", "Lasagna", "Macarrão com queijo","Bacalhau salgado", "Sopa de feijão", "Robalo Assado", "Frango Assado", "Hamburger"];

function pecaPrato()
{
let prato = prompt(`introduzir o primero prato`);
    return Number(prato);
}

function exibePrato(){
pratoum = pecaPrato();
pratodois = pecaPrato();

alert('Escolheu como primeiro prato ' + listaComida[pratoum] + ' e como segundo prato ' + listaComida[pratodois] + '.');

}