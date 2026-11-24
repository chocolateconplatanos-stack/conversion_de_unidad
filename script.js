function calcular() {
    let centimetros = parseFloat(document.getElementById("centimetros").value);

    let tipoMilimetros = 10;
    let tipoMetros = 100;
    let tipoKilometros = 1000000;
    let tipoPulgadas = 2.54;

    let milimetros = centimetros * tipoMilimetros;
    let metros = centimetros / tipoMetros;
    let kilometros = centimetros / tipoKilometros;
    let pulgadas = centimetros / tipoPulgadas;

    document.getElementById("milimetros").innerHTML =
    "Milimetros: mm" + milimetros.toFixed(2);

    document.getElementById("metros").innerHTML =
    "Metros: m" + metros.toFixed(2);

    document.getElementById("kilometros").innerHTML =
    "Kilometros: km" + kilometros.toFixed(2);

    document.getElementById("pulgadas").innerHTML =
    "Pulgadas: inch" + pulgadas.toFixed(2);
}