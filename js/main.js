$(document).ready(function() {
  console.log("Ready");

  // lazy loads elements with default selector as '.lozad'
  const observer = lozad();
  observer.observe();

  $("#about-btn").on("click", function() {
    if ($(this).data("status") === "off") {
      aboutPageUp();
    } else {
      aboutPageDown();
    }
  });

  $("#works-btn").on("click", function() {
    if ($(this).data("status") === "off") {
      worksPageUp();
      contactPageDown();
      pageOneDown();
      hideAboutBtn();
    } else {
      worksPageDown();
      contactPageDown();
      pageOneUp();
      showAboutBtn();
    }
  });

  $("#contact-btn").on("click", function() {
    if ($(this).data("status") === "off") {
      contactPageUp();
      worksPageDown();
      pageOneDown();
      hideAboutBtn();
    } else {
      contactPageDown();
      worksPageDown();
      pageOneUp();
      showAboutBtn();
    }
  });

  $("#email-btn").on("click", function() {
    if ($(this).data("status") === "off") {
      $(this).data("status", "on");
      $("#message-sent").css("opacity", "0");
      $(".contact-overlay").css("opacity", "0");
      $(".text-field").val("");
      contactBtnDivUp();
      contactFormUp();
    } else {
      $(this).data("status", "off");
      $(".contact-overlay").css("opacity", "1");
      contactBtnDivDown();
      contactFormDown();
    }
  });

  $("#send-btn").on("click", function() {
    contactBtnDivDown();
    contactFormDown();
    $("#email-btn").data("status", "off");
    $("#message-sent").css("opacity", "1");
    $(".contact-overlay").css("opacity", "1");
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
  };

  var pageOneDown = function() {
    $(".page-one").css("opacity", "0");
    $(".full-container").css("background", "rgba(0,0,0,1)");
  };

  var aboutPageUp = function() {
    $("#about-btn").data("status", "on");
    $(".page-four").css("height", "100%");
    $("#about-btn").text("HOME");
    $(".about-btn-div").css("bottom", "95%");
    $("#works-btn").css("visibility", "hidden");
    $("#contact-btn").css("visibility", "hidden");
  };

  var aboutPageDown = function() {
    $("#about-btn").data("status", "off");
    $(".page-four").css("height", "0");
    $("#about-btn").text("ABOUT");
    $(".about-btn-div").css("bottom", "5%");
    $("#works-btn").css("visibility", "visible");
    $("#contact-btn").css("visibility", "visible");
  };

  var hideAboutBtn = function() {
    $(".about-btn-div").css("visibility", "hidden");
  };

  var showAboutBtn = function() {
    $(".about-btn-div").css("visibility", "visible");
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
