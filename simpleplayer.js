
$("player.player_dark").hover(function () {
    $(this).find(".player_icon").removeClass("player_icon_white");
    $(this).find(".player_icon").addClass("player_icon_black");

}, function () {
    $(this).find(".player_icon").addClass("player_icon_white");
    $(this).find(".player_icon").removeClass("player_icon_black");
}

);
$("player.player_light").hover(function () {
    $(this).find(".player_icon").addClass("player_icon_white");
    $(this).find(".player_icon").removeClass("player_icon_black");
}, function () {
    $(this).find(".player_icon").removeClass("player_icon_white");
    $(this).find(".player_icon").addClass("player_icon_black");
}

);
$("player").click(function () {
    if ($(this).find(".player_icon").hasClass("player_icon_pause")) {
        $(this).find(".player_icon").css("transform", "rotate(360deg)");

        $(this).find(".player_icon").removeClass("player_icon_pause");
    
        setTimeout(function () { $(this).find(".player_icon").css("transform", "rotate(0deg)"); }, 500);
        audio[$(this).attr("id")].pause();

    } else {
        $(this).find(".player_icon").css("transform", "rotate(360deg)");
        $(this).find(".player_icon").addClass("player_icon_pause");
        $(this).find(".player_icon").css("transform", "rotate(0deg)");
        audio[$(this).attr("id")].play();

    }


}

);
var audio = new Array()
for (i = 0; i < $("player").length; i++) {
    audio[i] = new Audio($("player").eq(i).attr("url"));
    $("player").eq(i).attr("id", i);
    if($("player").eq(i).hasClass("player_light")){
        $("player").html('<i class="player_icon"></i>')

    }else{
        $("player").html('<i class="player_icon"></i>')


    }



}







$("player.player_dark").find(".player_icon").addClass("player_icon_white");
$("player.player_light").find(".player_icon").addClass("player_icon_black");