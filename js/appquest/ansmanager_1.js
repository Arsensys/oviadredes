/**
 * 
 */
var qz1_ans = ["a", "c", "c", "d", "b", "b"];
function testActividad1() {
    var answered = $(".askopt:checked").length;
    if (answered === 10) {

    } else {

        alert("Debe responder a todas las preguntas!\nRepondidas: "+answered+"\nSin responder: "+(10-answered));
    }
}