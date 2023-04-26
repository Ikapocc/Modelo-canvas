let socios = $(".socios")
let actividades = $(".actividades")
let recursos = $(".recursos")
let propuestas = $(".propuestas")
let clientes = $(".clientes")
let canales = $(".canales")
let mercado = $(".mercado")
let estructura = $(".estructura")
let fuentes = $(".fuentes")

let arr = [mercado, propuestas, canales, clientes, actividades, recursos, socios, fuentes, estructura]
let animaciones = ["hidden", "card1", "card2"]
let index = 0;

$(document).keypress(started);

function started(){
    let numran = Math.floor(Math.random() * animaciones.length)
    if (index < arr.length) {
        arr[index].addClass(animaciones[numran]);
        index++;
    }
}


