$("button").click(function(){
    let qone= $(".name").val();
    let qtwo= $(".hour").val();
    let qthree= $(".genre").val();

console.log(qone);
    console.log(qtwo);
    console.log(qthree);
    $(".res") .text("");
    
    $(".res").append(qone + " will listen to " + qtwo + " hours of " + qthree + " music.");
});