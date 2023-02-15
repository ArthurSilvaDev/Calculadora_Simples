function insert(num){
    var numero = document.getElementById("visor_calculadora").innerHTML;
    document.getElementById("visor_calculadora").innerHTML = numero + num;
}
function clearAll(){
    document.getElementById("visor_calculadora").innerHTML = null;
}
function clearLast(){
    var numero = document.getElementById("visor_calculadora").innerHTML;
    document.getElementById("visor_calculadora").innerHTML = numero.substring(0, numero.length -1);
}
function resultado(){
    var calc = document.getElementById("visor_calculadora").innerHTML;
    if (calc){
        document.getElementById("visor_calculadora").innerHTML = eval(calc);
    }
}
function conectar(){
        window.location.href = 'https://github.com/ArthurSilvaDev'
}