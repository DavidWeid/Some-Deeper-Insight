$(document).ready(function() {

    $("#works-btn").on("click", function() {
        if($(this).data("status") === "off") {
            worksPageUp();
            contactPageDown();
            pageOneDown();
        } else {
            worksPageDown();
            contactPageDown();
            pageOneUp();
        }
    });

    $("#contact-btn").on("click", function() {
        if($(this).data("status") === "off") {
            contactPageUp();
            worksPageDown();
            pageOneDown();
        } else {
            contactPageDown();
            worksPageDown();
            pageOneUp();
        }
    });

    var pageOneUp = function() {
        $(".page-one").css("opacity", "1");
        $(".full-container").css("background", "rgba(0,0,0,0.3)");
    };

    var pageOneDown = function() {
        $(".page-one").css("opacity", "0");
        $(".full-container").css("background", "rgba(0,0,0,1)");
    }

    var worksPageUp = function() {
        $("#works-btn").data("status", "on");
        $(".page-two").css("height", "100%");
        $("#works-btn").text("HOME");
    };

    var worksPageDown = function() {
        $("#works-btn").data("status", "off");
        $(".page-two").css("height", "0%");
        $("#works-btn").text("WORKS");
    };

    var contactPageUp = function(button, page, btnTxt) {
        
        $("#contact-btn").data("status", "on");
        $(".page-three").css("height", "100%");
        $("#contact-btn").text("HOME");
    };
    
    var contactPageDown = function(button, page, btnTxt) {
    
        $("#contact-btn").data("status", "off");
        $(".page-three").css("height", "0%");
        $("#contact-btn").text("CONTACT");
    };

})
// Document.ready