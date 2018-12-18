$(".step-one-button").click(function() {
    $(".step-one-text").text("Hover RIGHT HERE");
    $(".step-one-button").hide();
});

$(".step-one-text").hover(function() {
    $(".step-two-button").show();
    $("step-one-text").hide();
});

$(".step-two-button").dblclick(function() {
    $(".step-two-button").fadeOut();   
    $(".step-three-image").show();
    $(".step-three-instructions").text("Click on the Book");
    $(".step-one-text").hide(); 
});

$(".step-three-image").click(function() {
    $(".step-four-text").text("KNOCK KNOCK(hover over me)");
    $(".step-three-instructions").hide();
});

$(".step-four-text").hover(function() {
    $(".step-five").show();
    $(".final").text("SUPRISE!!!!!!!");
});

