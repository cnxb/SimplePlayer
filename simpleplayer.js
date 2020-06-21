


$("player.player_dark").hover(function () {
    $(this).css("backdrop-filter", "blur(10px)");
    $(this).animate({
        "backgroundColor": "rgba(255,255,255,1)",
        "border-top-width": "10px",
        "border-bottom-width": "10px",
        "border-left-width": "10px",
        "border-right-width": "10px",
        "width": "50px",
        "height": "50px"

    }, 100);
    $(this).find(".player_icon").removeClass("fa-inverse");
    /*$(".container").css("box-shadow","0px 0px 20px 10px #00000048")*/

}, function () {
    $(this).css("backdrop-filter", "blur(5px)");
    $(this).animate({
        "backgroundColor": "rgba(0,0,0,0)",
        "border-top-width": "5px",
        "border-bottom-width": "5px",
        "border-left-width": "5px",
        "border-right-width": "5px",
        "width": "60px",
        "height": "60px"
    }, 100);
    /*$(".container").css("box-shadow","0px 0px 0px 0px #00000048")*/
    $(this).find(".player_icon").addClass("fa-inverse");

}

);
$("player.player_light").hover(function () {
    $(this).css("backdrop-filter", "blur(10px)");
    $(this).animate({
        "backgroundColor": "rgba(0,0,0,1)",
        "border-top-width": "10px",
        "border-bottom-width": "10px",
        "border-left-width": "10px",
        "border-right-width": "10px",
        "width": "60px",
        "height": "60px"

    }, 100);
    
    $(this).find(".player_icon").addClass("fa-inverse");
    /*$(".container").css("box-shadow","0px 0px 20px 10px #00000048")*/

}, function () {
    $(this).css("backdrop-filter", "blur(5px)");
    $(this).animate({
        "backgroundColor": "rgba(255,255,255,0)",
        "border-top-width": "5px",
        "border-bottom-width": "5px",
        "border-left-width": "5px",
        "border-right-width": "5px",
        "width": "70px",
        "height": "70px"
    }, 100);
    /*$(".container").css("box-shadow","0px 0px 0px 0px #00000048")*/
    $(this).find(".player_icon").removeClass("fa-inverse");

}

);
$("player").click(function () {
    if ($(this).find(".player_icon").hasClass("fa-play")) {
        $(this).find(".player_icon").css("transform", "rotate(360deg)");

        $(this).find(".player_icon").removeClass("fa-play");
        $(this).find(".player_icon").addClass("fa-pause");
        setTimeout(function () { $(this).find(".player_icon").css("transform", "rotate(0deg)"); }, 500);
        audio[$(this).attr("id")].play();

    } else {
        $(this).find(".player_icon").css("transform", "rotate(360deg)");
        $(this).find(".player_icon").removeClass("fa-pause");
        $(this).find(".player_icon").addClass("fa-play");
        $(this).find(".player_icon").css("transform", "rotate(0deg)");
        audio[$(this).attr("id")].pause();

    }


}

);
var audio = new Array()
for (i = 0; i < $("player").length; i++) {
    audio[i] = new Audio($("player").eq(i).attr("url"));
    $("player").eq(i).attr("id", i);
    $("player").html('<i class="fa fa-play  fa-2x player_icon"></i>')


}







