
function numero(num) {
    var a = document.getElementById("scrn-txt").innerHTML;
    document.getElementById("scrn-txt").innerHTML = a + num;
}

function clearRecent() {
    let str = document.getElementById("scrn-txt").innerHTML;
    str = str.slice(0, -1);
    document.getElementById("scrn-txt").innerHTML = str;
}

function operador(op) {
    var a = document.getElementById("scrn-txt").innerHTML;
    document.getElementById("scrn-txt").innerHTML = a + op;
}

function clearAll() {
    document.getElementById("scrn-txt").innerHTML = " ";

}