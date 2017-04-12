/**
 * 
 */
var qz1_ans = ["a", "c", "c", "d", "b", "b", "c", "d", "a", "d"];
function testActividad1() {
    var result = 0;
    var clase;
    var answered = $(".askopt:checked").length;
    if (answered === 10) {
        $(".askopt:checked").each(function(index) {
            if ($(this).val() === qz1_ans[index]) {
                result += 1;
                $(this).prop("checked",false);
            }
        });
        if (result > 7) {
            clase = "success";
        } else if (result < 8 && result > 5) {
            clase = "warning";
        } else {
            clase = "danger";
        }
        $("#res-content").html("<h4  class='text-"+clase+"'>Su calificacion es: " + (result + "/" + 10) + "</h4>")
        $("#modal-launcher").click();
    } else {
        alert("Debe responder a todas las preguntas!\nRepondidas: " + answered + "\nSin responder: " + (10 - answered));
    }
}