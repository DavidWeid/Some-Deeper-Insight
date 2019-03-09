$(document).ready(function() {

    var status = "off";
    var page;
    var button = "#";
    var btnTxtHome = "Home";
    var btnTxtAway;

    $("#works-btn").on("click", function() {

        

        var status = $(this).data("status");
        var page = ".page-two";
        var button = "#" + $(this).attr("id");
        var btnTxt = "Works";

        if (status === "off") {
            pageUp(button, page, btnTxt);

        } else {
            pageDown(button, page, btnTxt);
            pageDown("#contact-btn", ".page-three", "Contact");
        }

    });

    $("#contact-btn").on("click", function() {

        var status = $(this).data("status");
        var page = ".page-three";
        var button = "#" + $(this).attr("id");
        var btnTxt = "Contact";

        if (status === "off") {
            pageUp(button, page, btnTxt);

        } else {
            pageDown(button, page, btnTxt);
            pageDown("#works-btn", ".page-two", "Works");
        }

    });

    var pageUp = function(button, page, btnTxt) {
        
        $(button).data("status", "on");
        $(page).css("height", "100%");
        $(button).text("Home");
    };
    
    var pageDown = function(button, page, btnTxt) {
    
        $(button).data("status", "off");
        $(page).css("height", "0%");
        $(button).text(btnTxt);
    }

})
// Document.ready