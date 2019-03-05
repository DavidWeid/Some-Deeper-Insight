// $(document).ready(function () {
//     $(".sidenav").sidenav();
//     $(".slider").slider();
//     $(".scrollspy").scrollSpy();
//     $(".fixed-action-btn").floatingActionButton();
// })

$(document).ready(function() {
    $("#works-btn").on("click", function() {

        if ($(this).data("status") === "off") {
            $(this).data("status", "on");
            $(".page-two").css("height", "100%");
            $(this).text("Home");

        } else if ($(this).data("status") === "on") {
            $(this).data("status", "off");
            $(".page-two").css("height", "0%");
            $(this).text("Works");
        }

    });

    $("#contact-btn").on("click", function() {

        if ($(this).data("status") === "off") {
            $(this).data("status", "on");
            $(".page-three").css("height", "100%");
            $(this).text("Home");

        } else if ($(this).data("status") === "on") {
            $(this).data("status", "off");
            $(".page-three").css("height", "0%");
            $(this).text("Contact");
        }

    });
})