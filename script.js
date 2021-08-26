// let presupuestoIngresado = parseFloat(document.getElementById('presupuestoIngresado').value);



// let resultadoCuenta = presupuestoIngresado - valorGasto;
function Add1(){
    let presupuestoIngresado = document.getElementById('presupuestoIngresado').value;

    let divPresupuesto = document.getElementById('presupuesto')

    let dataPrint1 = document.createElement('p')
    dataPrint1.innerHTML=`<p>${presupuestoIngresado}</p>`

    divPresupuesto.appendChild(dataPrint1)

}
function Add2(){

let nombreGasto = document.getElementById('nombreGasto').value
let valorGasto = parseFloat(document.getElementById('valorGasto').value);


let valorYgasto = document.getElementById('valorYgasto')

let dataPrint = document.createElement('div')
dataPrint.innerHTML = `<div>
<p>${nombreGasto}</p><br>
<p>${valorGasto}</p>
</div>`

valorYgasto.appendChild(dataPrint)
}

function Calcular(){
    let presupuestoIngresado = document.getElementById
    ('presupuestoIngresado').value;
    let valorGasto = parseFloat(document.getElementById('valorGasto').value);
    let resultadoCuenta = presupuestoIngresado - valorGasto;

    let divResultadoFinal = document.getElementById('resultadoFinal');

    let dataPrint3 = document.createElement('p')
    dataPrint3.innerHTML = `<p>El Resultado de tu presupuesto es: ${resultadoCuenta}</p>`

    divResultadoFinal.appendChild(dataPrint3);
}





