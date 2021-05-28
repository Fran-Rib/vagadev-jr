// slides

$(".fade").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
});

// notificações

$(document).ready(function() {
    var clicks = 0;
    $(".btcomprar").click(function() {
        clicks++;
        if (clicks >= 1) {
            $("#ncarrinho").html(clicks);
            $("#blue").show();
        }
    });
});