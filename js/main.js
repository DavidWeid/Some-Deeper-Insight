$(document).ready(function() {
  console.log("Ready");

  $("#works-btn").on("click", function() {
    if ($(this).data("status") === "off") {
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
    if ($(this).data("status") === "off") {
      contactPageUp();
      worksPageDown();
      pageOneDown();
    } else {
      contactPageDown();
      worksPageDown();
      pageOneUp();
    }
  });

  $("#email-btn").on("click", function() {
    if ($(this).data("status") === "off") {
      $(this).data("status", "on");
      $("#message-sent").css("opacity", "0");
      contactBtnDivUp();
      contactFormUp();
    } else {
      $(this).data("status", "off");
      contactBtnDivDown();
      contactFormDown();
    }
  });

  $("#send-btn").on("click", function() {
    contactBtnDivDown();
    contactFormDown();
    $(".text-field").val("");
    $("#email-btn").data("status", "off");
    $("#message-sent").css("opacity", "1");
  });

  var contactBtnDivUp = function() {
    $(".contactBtn-row").css("height", "20%");
    $("#contactBtnDiv").css("top", "18%");
  };

  var contactBtnDivDown = function() {
    $(".contactBtn-row").css("height", "100%");
    $("#contactBtnDiv").css("top", "50%");
  };

  var contactFormUp = function() {
    $(".contactForm-row").css("height", "80%");
  };

  var contactFormDown = function() {
    $(".contactForm-row").css("height", "0%");
  };

  var pageOneUp = function() {
    $(".page-one").css("opacity", "1");
    $(".full-container").css("background", "rgba(0,0,0,0.3)");
    // worksPageDown();
    // contactPageDown();
  };

  var pageOneDown = function() {
    $(".page-one").css("opacity", "0");
    $(".full-container").css("background", "rgba(0,0,0,1)");
  };

  var worksPageUp = function() {
    $("#works-btn").data("status", "on");
    $(".page-two").css("height", "100%");
    $("#works-btn").text("HOME");
    pageOneDown();
    contactPageDown();
  };

  var worksPageDown = function() {
    $("#works-btn").data("status", "off");
    $(".page-two").css("height", "0%");
    $("#works-btn").text("WORKS");
  };

  var contactPageUp = function() {
    $("#contact-btn").data("status", "on");
    $(".page-three").css("height", "100%");
    $("#contact-btn").text("HOME");
    pageOneDown();
    worksPageDown();
  };

  var contactPageDown = function() {
    $("#contact-btn").data("status", "off");
    $(".page-three").css("height", "0%");
    $("#contact-btn").text("CONTACT");
  };
});
// Document.ready
