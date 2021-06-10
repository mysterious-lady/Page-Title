$("img").hide();
$("p").hide();
$("h3").hide();
let count = 0;
$(".submit").click(function() {
    let answer = $(".answer-1").val();
    let answer2 = $(".answer-2").val();
    $(".results").text("You are a person who likes to " + answer + " and you're " + answer2 + "years old");
    $(".results").show();
    count = count + 1;
    $(".counter").text("This quiz has been taken " + count + " times");
});