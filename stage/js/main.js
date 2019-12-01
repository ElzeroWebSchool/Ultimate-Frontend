$(function() {
  "use strict";
  $(".toggle-sidebar").on("click", function() {
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  });
  // Toggle Submenu
  $(".toggle-submenu").on("click", function() {
    $(this)
      .find(".fa-angle-right")
      .toggleClass("down");
    $(this)
      .next(".child-links")
      .slideToggle();
  });
  // Open / Close Fullscreen
  $(".toggle-fullscreen").on("click", function() {
    $(this).toggleClass("full-screen");
    if ($(this).hasClass("full-screen")) {
      // Page Is Now Full Screen
      openFullscreen();
    } else {
      // Page is Not Full Screen
      closeFullscreen();
    }
  });
  // Toggle Settings
  $(".toggle-settings").on("click", function() {
    $(this)
      .find("i")
      .toggleClass("fa-spin");
    $(this)
      .parent()
      .toggleClass("hide-settings");
  });

  // Switch Colors Theme
  var themesClasses = [];
  $(".color-options li").each(function() {
    themesClasses.push($(this).data("theme"));
  });
  $(".color-options li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $("body")
      .removeClass(themesClasses.join(" "))
      .addClass($(this).data("theme"));
  });
  // Switch Font Options
  var fontClasses = [];
  $(".font-options select option").each(function() {
    fontClasses.push($(this).val());
  });
  $(".font-options select").on("change", function() {
    $("body")
      .removeClass(fontClasses.join(" "))
      .addClass(
        $(this)
          .find("option:selected")
          .val()
      );
  });
});

var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}
